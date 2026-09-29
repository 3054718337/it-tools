import { describe, expect, it } from 'vitest';
import type { CourseSlot } from './timetable-conflict.service';
import { buildWeekGrid, findConflicts, findFreeBlocks, formatWeeks, parseTimetable, weeksOf } from './timetable-conflict.service';

function make(overrides: Partial<CourseSlot> & { name: string }): CourseSlot {
  return {
    id: crypto.randomUUID(),
    weekday: 1,
    startSection: 1,
    endSection: 2,
    startWeek: 1,
    endWeek: 16,
    parity: 'all',
    ...overrides,
  };
}

describe('timetable-conflict parseTimetable', () => {
  it('解析「课程 星期 节次 周次」格式', () => {
    const { slots, failedLines } = parseTimetable('高等数学 周一 1-2节 1-16周');
    expect(failedLines).toHaveLength(0);
    expect(slots[0]).toMatchObject({ name: '高等数学', weekday: 1, startSection: 1, endSection: 2, startWeek: 1, endWeek: 16, parity: 'all' });
  });

  it('支持无空格、星期X、单双周与默认周次', () => {
    const { slots, failedLines } = parseTimetable('大学英语星期三第3-4节1-16周(单)\n体育 周五 5-6节');
    expect(failedLines).toHaveLength(0);
    expect(slots[0]).toMatchObject({ name: '大学英语', weekday: 3, startSection: 3, endSection: 4, parity: 'odd' });
    expect(slots[1]).toMatchObject({ name: '体育', weekday: 5, startSection: 5, endSection: 6, startWeek: 1, endWeek: 16, parity: 'all' });
  });

  it('同一行多个星期展开为多个时段', () => {
    const { slots } = parseTimetable('自习 周一周三 9-10节');
    expect(slots).toHaveLength(2);
    expect(slots[0]).toMatchObject({ weekday: 1, startSection: 9, endSection: 10 });
    expect(slots[1]).toMatchObject({ weekday: 3, startSection: 9, endSection: 10 });
  });

  it('缺少星期或节次的行进入 failedLines，表头行跳过', () => {
    const { slots, failedLines } = parseTimetable('高等数学 周一\n课程 星期 节次 周次');
    expect(slots).toHaveLength(0);
    expect(failedLines).toEqual(['高等数学 周一']);
  });

  it('第X周单周次解析', () => {
    const { slots } = parseTimetable('讲座 周四 8-9节 第3周');
    expect(slots[0]).toMatchObject({ startWeek: 3, endWeek: 3 });
  });
});

describe('timetable-conflict weeksOf', () => {
  const base: CourseSlot = { id: '1', name: 'A', weekday: 1, startSection: 1, endSection: 2, startWeek: 1, endWeek: 6, parity: 'all' };

  it('单双周过滤正确', () => {
    expect(weeksOf(base)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(weeksOf({ ...base, parity: 'odd' })).toEqual([1, 3, 5]);
    expect(weeksOf({ ...base, parity: 'even' })).toEqual([2, 4, 6]);
  });
});

describe('timetable-conflict findConflicts', () => {
  it('同一天、节次重叠且单双周有交集才冲突', () => {
    const a = make({ name: 'A' });
    const b = make({ name: 'B', weekday: 2 });
    const c = make({ name: 'C', startSection: 3, endSection: 4 });
    const d = make({ name: 'D', parity: 'odd' });
    const e = make({ name: 'E', parity: 'even' });
    const conflicts = findConflicts([a, b, c, d, e]);
    expect(conflicts).toHaveLength(2);
    expect(conflicts[0]).toMatchObject({ sectionFrom: 1, sectionTo: 2 });
  });

  it('冲突周次取交集', () => {
    const a = make({ name: 'A', startWeek: 1, endWeek: 8 });
    const b = make({ name: 'B', startWeek: 5, endWeek: 16 });
    const [conflict] = findConflicts([a, b]);
    expect(conflict?.weeks).toEqual([5, 6, 7, 8]);
  });
});

describe('timetable-conflict findFreeBlocks', () => {
  it('合并连续空闲节次并按周次过滤', () => {
    const slots = [
      make({ name: 'A', weekday: 1, startSection: 1, endSection: 2 }),
      make({ name: 'B', weekday: 1, startSection: 3, endSection: 4, parity: 'even' }),
    ];
    const week1 = findFreeBlocks(slots, 1, 6).filter(block => block.weekday === 1);
    expect(week1).toEqual([{ weekday: 1, fromSection: 3, toSection: 6 }]);
    const week2 = findFreeBlocks(slots, 2, 6).filter(block => block.weekday === 1);
    expect(week2).toEqual([{ weekday: 1, fromSection: 5, toSection: 6 }]);
  });
});

describe('timetable-conflict buildWeekGrid', () => {
  it('按周次与单双周放置课程', () => {
    const slots = [make({ name: 'A', weekday: 2, startSection: 3, endSection: 3, parity: 'odd' })];
    expect(buildWeekGrid(slots, 1, 4)[2]?.[1]?.name).toBe('A');
    expect(buildWeekGrid(slots, 2, 4)[2]?.[1]).toBeNull();
  });
});

describe('timetable-conflict formatWeeks', () => {
  it('连续周次合并为区间', () => {
    expect(formatWeeks([1, 2, 3, 5, 6])).toBe('1-3、5-6');
    expect(formatWeeks([4])).toBe('4');
    expect(formatWeeks([])).toBe('');
  });
});
