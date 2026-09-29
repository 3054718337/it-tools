import { describe, expect, it } from 'vitest';
import { calculateGpa, parseTranscript, scoreToGpaPoint } from './gpa-calculator.service';

describe('gpa-calculator parseTranscript', () => {
  it('解析「课程名 学分 成绩」格式的多行成绩', () => {
    const { entries, failedLines } = parseTranscript('高等数学 4 92\n大学英语 3 85');
    expect(failedLines).toHaveLength(0);
    expect(entries).toHaveLength(2);
    expect(entries[0]).toMatchObject({ name: '高等数学', credits: 4, score: 92, excluded: false });
    expect(entries[1]).toMatchObject({ name: '大学英语', credits: 3, score: 85 });
  });

  it('忽略学年学期等干扰数字', () => {
    const { entries } = parseTranscript('数据结构 3.5 88 2023-2024-1');
    expect(entries[0]).toMatchObject({ name: '数据结构', credits: 3.5, score: 88 });
  });

  it('支持优良中及格等级制成绩', () => {
    const { entries, failedLines } = parseTranscript('体育 1 良好\n军训 2 优秀');
    expect(failedLines).toHaveLength(0);
    expect(entries[0]).toMatchObject({ name: '体育', credits: 1, score: 85 });
    expect(entries[1]).toMatchObject({ name: '军训', credits: 2, score: 95 });
  });

  it('支持学分与成绩顺序颠倒的行', () => {
    const { entries, failedLines } = parseTranscript('大学英语 85 3');
    expect(failedLines).toHaveLength(0);
    expect(entries[0]).toMatchObject({ name: '大学英语', credits: 3, score: 85 });
  });

  it('跳过表头行', () => {
    const { entries } = parseTranscript('课程名称 学分 成绩 绩点\n高等数学 4 92');
    expect(entries).toHaveLength(1);
  });

  it('空行跳过、无法识别的行进入 failedLines', () => {
    const { entries, failedLines } = parseTranscript('\n\n只有课程名');
    expect(entries).toHaveLength(0);
    expect(failedLines).toEqual(['只有课程名']);
  });
});

describe('gpa-calculator scoreToGpaPoint', () => {
  it('标准 4.0 分段边界正确', () => {
    expect(scoreToGpaPoint(90, 'standard-4.0')).toBe(4.0);
    expect(scoreToGpaPoint(89.9, 'standard-4.0')).toBe(3.7);
    expect(scoreToGpaPoint(85, 'standard-4.0')).toBe(3.7);
    expect(scoreToGpaPoint(60, 'standard-4.0')).toBe(1.0);
    expect(scoreToGpaPoint(59.9, 'standard-4.0')).toBe(0);
  });

  it('简化 4.0 / 4.5 / 5.0 分段正确', () => {
    expect(scoreToGpaPoint(95, 'simple-4.0')).toBe(4.0);
    expect(scoreToGpaPoint(80, 'simple-4.0')).toBe(3.0);
    expect(scoreToGpaPoint(92, 'scale-4.5')).toBe(4.5);
    expect(scoreToGpaPoint(65, 'scale-4.5')).toBe(2.0);
    expect(scoreToGpaPoint(95, 'scale-5.0')).toBe(5.0);
    expect(scoreToGpaPoint(60, 'scale-5.0')).toBe(2.0);
  });
});

describe('gpa-calculator calculateGpa', () => {
  it('按学分加权计算绩点与加权平均分', () => {
    const { entries } = parseTranscript('高等数学 4 90\n大学英语 2 80');
    const result = calculateGpa(entries, 'simple-4.0');
    expect(result.gpa).toBeCloseTo(22 / 6, 6);
    expect(result.weightedScore).toBeCloseTo(520 / 6, 6);
    expect(result.arithmeticMean).toBeCloseTo(85, 6);
    expect(result.totalCredits).toBe(6);
    expect(result.courseCount).toBe(2);
  });

  it('被排除的课程不参与计算', () => {
    const { entries } = parseTranscript('高等数学 4 90\n大学英语 2 80');
    entries[1]!.excluded = true;
    const result = calculateGpa(entries, 'simple-4.0');
    expect(result.courseCount).toBe(1);
    expect(result.gpa).toBe(4.0);
    expect(result.weightedScore).toBe(90);
  });

  it('空输入返回 0 而不是 NaN', () => {
    const result = calculateGpa([], 'standard-4.0');
    expect(result.gpa).toBe(0);
    expect(result.weightedScore).toBe(0);
    expect(result.courseCount).toBe(0);
  });
});
