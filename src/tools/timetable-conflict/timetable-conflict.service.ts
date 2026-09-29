export type WeekParity = 'all' | 'odd' | 'even';

export interface CourseSlot {
  id: string
  name: string
  weekday: number // 1=周一 … 7=周日
  startSection: number
  endSection: number
  startWeek: number
  endWeek: number
  parity: WeekParity
}

export interface TimetableParseResult {
  slots: CourseSlot[]
  failedLines: string[]
}

const weekdayMap: Record<string, number> = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 日: 7, 天: 7 };

export const defaultWeekCount = 16;

function trimSeparators(text: string): string {
  return text.replace(/[,，、;；:：|()（）\s]+$/g, '').trim();
}

export function parseTimetable(raw: string): TimetableParseResult {
  const slots: CourseSlot[] = [];
  const failedLines: string[] = [];

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }
    // 无数字且以列名开头的行视为表头
    if (/^(星期|周|节次|时间|课程)/.test(line) && !/\d/.test(line)) {
      continue;
    }

    const weekdayMatches = [...line.matchAll(/(?:周|星期)\s*([一二三四五六日天])/g)].map(match => weekdayMap[match[1]]!);
    const sectionMatches = [...line.matchAll(/第?\s*(\d{1,2})\s*[-–~至]\s*(\d{1,2})\s*节/g)];
    const singleSectionMatch = line.match(/第\s*(\d{1,2})\s*节/);
    const weekRangeMatch = line.match(/(\d{1,2})\s*[-–~至]\s*(\d{1,2})\s*周/);
    const singleWeekMatch = line.match(/第\s*(\d{1,2})\s*周/);
    const parity: WeekParity = /单周|\(单\)|（单）/.test(line) ? 'odd' : /双周|\(双\)|（双）/.test(line) ? 'even' : 'all';

    const startWeek = weekRangeMatch ? Number(weekRangeMatch[1]) : singleWeekMatch ? Number(singleWeekMatch[1]) : 1;
    const endWeek = weekRangeMatch ? Number(weekRangeMatch[2]) : singleWeekMatch ? Number(singleWeekMatch[1]) : defaultWeekCount;

    const sectionPairs: [number, number][] = sectionMatches.map(match => [Number(match[1]), Number(match[2])]);
    if (sectionPairs.length === 0 && singleSectionMatch) {
      const section = Number(singleSectionMatch[1]);
      sectionPairs.push([section, section]);
    }

    if (weekdayMatches.length === 0 || sectionPairs.length === 0 || startWeek < 1 || endWeek < startWeek) {
      failedLines.push(line);
      continue;
    }

    // 课程名 = 第一个「星期/节次/周次」标记之前的内容
    const markerRegex = /(?:周|星期)\s*[一二三四五六日天]|第?\s*\d{1,2}\s*[-–~至]\s*\d{1,2}\s*节|第\s*\d{1,2}\s*节|第?\s*\d{1,2}\s*[-–~至]\s*\d{1,2}\s*周|第\s*\d{1,2}\s*周/g;
    const markerIndexes = [...line.matchAll(markerRegex)].map(match => match.index ?? 0);
    const name = markerIndexes.length > 0
      ? (trimSeparators(line.slice(0, Math.min(...markerIndexes))) || '未命名课程')
      : '未命名课程';

    let pushedCount = 0;
    for (const weekday of weekdayMatches) {
      for (const [startSection, endSection] of sectionPairs) {
        if (startSection < 1 || endSection < startSection) {
          continue;
        }
        slots.push({ id: crypto.randomUUID(), name, weekday, startSection, endSection, startWeek, endWeek, parity });
        pushedCount += 1;
      }
    }

    if (pushedCount === 0) {
      failedLines.push(line);
    }
  }

  return { slots, failedLines };
}

export function weeksOf(slot: CourseSlot): number[] {
  const weeks: number[] = [];
  for (let week = slot.startWeek; week <= slot.endWeek; week += 1) {
    if (slot.parity === 'odd' && week % 2 === 0) {
      continue;
    }
    if (slot.parity === 'even' && week % 2 === 1) {
      continue;
    }
    weeks.push(week);
  }
  return weeks;
}

export interface SlotConflict {
  a: CourseSlot
  b: CourseSlot
  weekday: number
  sectionFrom: number
  sectionTo: number
  weeks: number[]
}

export function findConflicts(slots: CourseSlot[]): SlotConflict[] {
  const conflicts: SlotConflict[] = [];
  for (let i = 0; i < slots.length; i += 1) {
    for (let j = i + 1; j < slots.length; j += 1) {
      const a = slots[i]!;
      const b = slots[j]!;
      if (a.weekday !== b.weekday) {
        continue;
      }
      const sectionFrom = Math.max(a.startSection, b.startSection);
      const sectionTo = Math.min(a.endSection, b.endSection);
      if (sectionFrom > sectionTo) {
        continue;
      }
      const weeksB = new Set(weeksOf(b));
      const weeks = weeksOf(a).filter(week => weeksB.has(week));
      if (weeks.length === 0) {
        continue;
      }
      conflicts.push({ a, b, weekday: a.weekday, sectionFrom, sectionTo, weeks });
    }
  }
  return conflicts;
}

export interface FreeBlock {
  weekday: number
  fromSection: number
  toSection: number
}

export function findFreeBlocks(slots: CourseSlot[], week: number, maxSection: number): FreeBlock[] {
  const blocks: FreeBlock[] = [];
  for (let day = 1; day <= 7; day += 1) {
    const occupied = new Set<number>();
    for (const slot of slots) {
      if (slot.weekday !== day) {
        continue;
      }
      if (!weeksOf(slot).includes(week)) {
        continue;
      }
      for (let section = slot.startSection; section <= slot.endSection; section += 1) {
        occupied.add(section);
      }
    }
    let runStart: number | null = null;
    for (let section = 1; section <= maxSection; section += 1) {
      const isFree = !occupied.has(section);
      if (isFree && runStart === null) {
        runStart = section;
      }
      if ((!isFree || section === maxSection) && runStart !== null) {
        const runEnd = isFree ? section : section - 1;
        if (runEnd >= runStart) {
          blocks.push({ weekday: day, fromSection: runStart, toSection: runEnd });
        }
        runStart = null;
      }
    }
  }
  return blocks;
}

export function buildWeekGrid(slots: CourseSlot[], week: number, maxSection: number): (CourseSlot | null)[][] {
  const grid: (CourseSlot | null)[][] = Array.from({ length: maxSection }, () => Array.from({ length: 7 }, () => null));
  for (const slot of slots) {
    if (!weeksOf(slot).includes(week)) {
      continue;
    }
    for (let section = slot.startSection; section <= Math.min(slot.endSection, maxSection); section += 1) {
      if (grid[section - 1] && grid[section - 1]![slot.weekday - 1] === null) {
        grid[section - 1]![slot.weekday - 1] = slot;
      }
    }
  }
  return grid;
}

export function formatWeeks(weeks: number[]): string {
  if (weeks.length === 0) {
    return '';
  }
  const sorted = [...weeks].sort((a, b) => a - b);
  const parts: string[] = [];
  let start = sorted[0]!;
  let previous = start;
  for (const week of sorted.slice(1)) {
    if (week === previous + 1) {
      previous = week;
      continue;
    }
    parts.push(start === previous ? `${start}` : `${start}-${previous}`);
    start = week;
    previous = week;
  }
  parts.push(start === previous ? `${start}` : `${start}-${previous}`);
  return parts.join('、');
}
