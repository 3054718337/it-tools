export interface CourseEntry {
  id: string
  name: string
  credits: number
  score: number
  excluded: boolean
}

export type GpaAlgorithm = 'standard-4.0' | 'simple-4.0' | 'scale-4.5' | 'scale-5.0' | 'weighted-average' | 'arithmetic-mean';

export interface GpaAlgorithmOption {
  value: GpaAlgorithm
  label: string
  hint: string
}

export const gpaAlgorithms: GpaAlgorithmOption[] = [
  {
    value: 'standard-4.0',
    label: '标准 4.0',
    hint: '90-100→4.0，85-89→3.7，82-84→3.3，78-81→3.0，75-77→2.7，72-74→2.3，68-71→2.0，64-67→1.5，60-63→1.0，60 以下→0',
  },
  {
    value: 'simple-4.0',
    label: '简化 4.0',
    hint: '90-100→4.0，80-89→3.0，70-79→2.0，60-69→1.0，60 以下→0',
  },
  {
    value: 'scale-4.5',
    label: '4.5 制',
    hint: '90-100→4.5，85-89→4.0，80-84→3.5，75-79→3.0，70-74→2.5，65-69→2.0，60-64→1.5，60 以下→0',
  },
  {
    value: 'scale-5.0',
    label: '5.0 制',
    hint: '90-100→5.0，80-89→4.0，70-79→3.0，60-69→2.0，60 以下→0',
  },
  {
    value: 'weighted-average',
    label: '加权平均分（百分制）',
    hint: 'Σ(成绩×学分) ÷ Σ学分，结果为百分制的加权平均分',
  },
  {
    value: 'arithmetic-mean',
    label: '算术平均分',
    hint: '所有课程成绩的算术平均值，不按学分加权',
  },
];

// 等级制成绩按所在分数段的中位分换算为百分制
const gradeLetterToScore: Record<string, number> = {
  优秀: 95,
  优: 95,
  A: 95,
  良好: 85,
  良: 85,
  B: 85,
  中等: 75,
  中: 75,
  C: 75,
  及格: 65,
  合格: 65,
  通过: 65,
  D: 65,
  不及格: 50,
  不合格: 50,
  未通过: 50,
  F: 50,
};

export interface TranscriptParseResult {
  entries: CourseEntry[]
  failedLines: string[]
}

function trimSeparators(text: string): string {
  return text.replace(/[,，、;；:：|()（）\s]+$/g, '').trim();
}

export function parseTranscript(raw: string): TranscriptParseResult {
  const entries: CourseEntry[] = [];
  const failedLines: string[] = [];

  for (const rawLine of raw.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      continue;
    }

    // 含两个及以上列名的行视为表头
    const headerKeywords = ['课程', '学分', '成绩', '学期', '序号', '绩点', '平均分'].filter(keyword => line.includes(keyword));
    if (headerKeywords.length >= 2) {
      continue;
    }

    // 去掉学年学期等干扰数字（2023-2024、2023-2024-1、第3学期）
    const cleaned = line
      .replace(/\d{4}\s*[-–~至]\s*\d{4}(?:\s*[-–~至]\s*\d+)?/g, ' ')
      .replace(/第\s*\d+\s*学期/g, ' ');

    const numberMatches = [...cleaned.matchAll(/\d+(?:\.\d+)?/g)];
    const letterMatch = cleaned.match(/优秀|优良|良好|中等|及格|合格|通过|不及格|不合格|未通过|优|良|中/);

    if (numberMatches.length >= 2) {
      const lastValue = Number.parseFloat(numberMatches.at(-1)![0]);
      const secondLastValue = Number.parseFloat(numberMatches.at(-2)![0]);
      const lastIndex = numberMatches.at(-1)!.index ?? 0;
      const secondLastIndex = numberMatches.at(-2)!.index ?? 0;

      let credits: number;
      let score: number;
      let nameIndex: number;

      if (lastValue >= 0 && lastValue <= 100 && secondLastValue > 0 && secondLastValue <= 20) {
        credits = secondLastValue;
        score = lastValue;
        nameIndex = secondLastIndex;
      }
      else if (secondLastValue >= 0 && secondLastValue <= 100 && lastValue > 0 && lastValue <= 20) {
        // 学分和成绩顺序颠倒的情况
        credits = lastValue;
        score = secondLastValue;
        nameIndex = secondLastIndex;
      }
      else {
        failedLines.push(line);
        continue;
      }

      entries.push({
        id: crypto.randomUUID(),
        name: (trimSeparators(cleaned.slice(0, nameIndex)).replace(/学分$/, '').trim()) || '未命名课程',
        credits,
        score,
        excluded: false,
      });
      continue;
    }

    if (numberMatches.length === 1 && letterMatch) {
      const score = gradeLetterToScore[letterMatch[0]];
      const credits = Number.parseFloat(numberMatches[0]![0]);
      if (score !== undefined && credits > 0 && credits <= 20) {
        entries.push({
          id: crypto.randomUUID(),
          name: trimSeparators(cleaned.slice(0, numberMatches[0]!.index ?? 0)) || '未命名课程',
          credits,
          score,
          excluded: false,
        });
        continue;
      }
    }

    failedLines.push(line);
  }

  return { entries, failedLines };
}

export function scoreToGpaPoint(score: number, algorithm: GpaAlgorithm): number {
  switch (algorithm) {
    case 'standard-4.0':
      if (score >= 90) return 4.0;
      if (score >= 85) return 3.7;
      if (score >= 82) return 3.3;
      if (score >= 78) return 3.0;
      if (score >= 75) return 2.7;
      if (score >= 72) return 2.3;
      if (score >= 68) return 2.0;
      if (score >= 64) return 1.5;
      if (score >= 60) return 1.0;
      return 0;
    case 'simple-4.0':
      if (score >= 90) return 4.0;
      if (score >= 80) return 3.0;
      if (score >= 70) return 2.0;
      if (score >= 60) return 1.0;
      return 0;
    case 'scale-4.5':
      if (score >= 90) return 4.5;
      if (score >= 85) return 4.0;
      if (score >= 80) return 3.5;
      if (score >= 75) return 3.0;
      if (score >= 70) return 2.5;
      if (score >= 65) return 2.0;
      if (score >= 60) return 1.5;
      return 0;
    case 'scale-5.0':
      if (score >= 90) return 5.0;
      if (score >= 80) return 4.0;
      if (score >= 70) return 3.0;
      if (score >= 60) return 2.0;
      return 0;
    case 'weighted-average':
    case 'arithmetic-mean':
      return score;
  }
}

export interface GpaCourseDetail {
  entry: CourseEntry
  point: number
}

export interface GpaResult {
  gpa: number
  weightedScore: number
  arithmeticMean: number
  totalCredits: number
  courseCount: number
  details: GpaCourseDetail[]
}

export function calculateGpa(entries: CourseEntry[], algorithm: GpaAlgorithm): GpaResult {
  const activeEntries = entries.filter(entry => !entry.excluded && Number.isFinite(entry.score) && entry.score >= 0 && entry.credits > 0);

  const totalCredits = activeEntries.reduce((sum, entry) => sum + entry.credits, 0);
  const weightedScore = totalCredits > 0
    ? activeEntries.reduce((sum, entry) => sum + entry.score * entry.credits, 0) / totalCredits
    : 0;
  const arithmeticMean = activeEntries.length > 0
    ? activeEntries.reduce((sum, entry) => sum + entry.score, 0) / activeEntries.length
    : 0;
  const details = activeEntries.map(entry => ({ entry, point: scoreToGpaPoint(entry.score, algorithm) }));
  const gpa = totalCredits > 0
    ? details.reduce((sum, detail) => sum + detail.point * detail.entry.credits, 0) / totalCredits
    : 0;

  return { gpa, weightedScore, arithmeticMean, totalCredits, courseCount: activeEntries.length, details };
}
