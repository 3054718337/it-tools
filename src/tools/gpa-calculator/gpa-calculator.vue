<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import type { CourseEntry, GpaAlgorithm } from './gpa-calculator.service';
import { calculateGpa, gpaAlgorithms, parseTranscript } from './gpa-calculator.service';
import { useCopy } from '@/composable/copy';

const algorithm = useStorage<GpaAlgorithm>('gpa-calculator--algorithm', 'standard-4.0');
const rawInput = ref('');
const entries = ref<CourseEntry[]>([]);
const failedLines = ref<string[]>([]);

function parseFromInput() {
  const parsed = parseTranscript(rawInput.value);
  entries.value = parsed.entries;
  failedLines.value = parsed.failedLines;
}

function loadSample() {
  rawInput.value = [
    '高等数学 4 92',
    '大学英语 3 85',
    '数据结构 3.5 88',
    '大学物理 3 76',
    '体育 1 良好',
  ].join('\n');
  parseFromInput();
}

function clearAll() {
  rawInput.value = '';
  entries.value = [];
  failedLines.value = [];
}

function addRow() {
  entries.value.push({ id: crypto.randomUUID(), name: '', credits: 2, score: 80, excluded: false });
}

function removeRow(id: string) {
  entries.value = entries.value.filter(entry => entry.id !== id);
}

const result = computed(() => calculateGpa(entries.value, algorithm.value));
const currentAlgorithm = computed(() => gpaAlgorithms.find(option => option.value === algorithm.value)!);
const isGpaMode = computed(() => algorithm.value !== 'weighted-average' && algorithm.value !== 'arithmetic-mean');
const mainLabel = computed(() => (isGpaMode.value ? '平均学分绩点（GPA）' : algorithm.value === 'weighted-average' ? '加权平均分' : '算术平均分'));
const mainScore = computed(() => (isGpaMode.value ? result.value.gpa : algorithm.value === 'weighted-average' ? result.value.weightedScore : result.value.arithmeticMean));
const mainScoreText = computed(() => mainScore.value.toFixed(2));

const resultText = computed(() => [
  `${mainLabel.value}：${mainScoreText.value}`,
  `加权平均分：${result.value.weightedScore.toFixed(2)}`,
  `算术平均分：${result.value.arithmeticMean.toFixed(2)}`,
  `总学分：${result.value.totalCredits}`,
  `课程数：${result.value.courseCount} 门`,
].join('\n'));

const { copy } = useCopy({ text: '计算结果已复制到剪贴板' });
</script>

<template>
  <div>
    <c-card title="第一步：粘贴成绩单">
      <c-input-text
        v-model:value="rawInput"
        multiline
        rows="6"
        label="从教务系统复制的成绩文本"
        placeholder="每行一门课，如：高等数学 4 92；等级制如：体育 1 良好"
        mb-3
      />
      <div class="flex flex-wrap gap-2">
        <c-button @click="parseFromInput()">解析成绩</c-button>
        <n-button @click="loadSample()">填入示例</n-button>
        <n-button quaternary @click="clearAll()">清空</n-button>
      </div>
      <n-alert v-if="failedLines.length" type="warning" class="mt-3" title="部分行未能识别，可在下方手动补录">
        <div v-for="line in failedLines" :key="line" class="text-xs">
          {{ line }}
        </div>
      </n-alert>
    </c-card>

    <c-card title="课程明细（可手动修改、添加）" class="mt-4">
      <div v-if="entries.length === 0" class="py-4 text-center text-sm opacity-60">
        暂无课程，请先解析成绩单或点击「添加一行」。
      </div>
      <div v-for="entry in entries" :key="entry.id" class="mb-2 flex flex-wrap items-center gap-2">
        <c-input-text v-model:value="entry.name" placeholder="课程名" class="min-w-40 flex-1" />
        <n-input-number v-model:value="entry.credits" :min="0" :max="20" :step="0.5" class="w-32" placeholder="学分" />
        <n-input-number v-model:value="entry.score" :min="0" :max="100" class="w-32" placeholder="成绩" />
        <n-tooltip trigger="hover">
          <template #trigger>
            <n-switch v-model:value="entry.excluded" />
          </template>
          打开开关后该课程不参与计算（如重修、不计入绩点的课程）
        </n-tooltip>
        <n-button quaternary type="error" size="small" @click="removeRow(entry.id)">删除</n-button>
      </div>
      <n-button dashed class="mt-2" @click="addRow()">+ 添加一行</n-button>
    </c-card>

    <c-card title="计算结果" class="mt-4">
      <div class="mb-3 flex flex-wrap items-center gap-2">
        <span class="text-sm opacity-70">绩点算法：</span>
        <n-radio-group v-model:value="algorithm">
          <n-radio-button v-for="option in gpaAlgorithms" :key="option.value" :value="option.value" :label="option.label" />
        </n-radio-group>
      </div>
      <p class="mb-4 text-xs opacity-60">
        {{ currentAlgorithm.hint }}
      </p>

      <div class="mb-4 flex flex-wrap gap-3">
        <div class="min-w-40 flex-1 rounded border border-gray-300 p-4 text-center">
          <div class="text-xs opacity-60">
            {{ mainLabel }}
          </div>
          <div class="text-3xl font-bold">
            {{ mainScoreText }}
          </div>
        </div>
        <div class="min-w-40 flex-1 rounded border border-gray-300 p-4 text-center">
          <div class="text-xs opacity-60">
            加权平均分
          </div>
          <div class="text-3xl font-bold">
            {{ result.weightedScore.toFixed(2) }}
          </div>
        </div>
        <div class="min-w-40 flex-1 rounded border border-gray-300 p-4 text-center">
          <div class="text-xs opacity-60">
            总学分
          </div>
          <div class="text-3xl font-bold">
            {{ result.totalCredits }}
          </div>
        </div>
        <div class="min-w-40 flex-1 rounded border border-gray-300 p-4 text-center">
          <div class="text-xs opacity-60">
            课程数
          </div>
          <div class="text-3xl font-bold">
            {{ result.courseCount }}
          </div>
        </div>
      </div>

      <div class="mb-4">
        <c-button @click="copy(resultText)">复制结果</c-button>
      </div>

      <n-table v-if="result.details.length" :bordered="false" :single-line="false" size="small">
        <thead>
          <tr>
            <th class="text-left">
              课程
            </th>
            <th class="text-left">
              学分
            </th>
            <th class="text-left">
              成绩
            </th>
            <th class="text-left">
              绩点
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="detail in result.details" :key="detail.entry.id">
            <td>{{ detail.entry.name }}</td>
            <td>{{ detail.entry.credits }}</td>
            <td>{{ detail.entry.score }}</td>
            <td>{{ isGpaMode ? detail.point.toFixed(2) : '—' }}</td>
          </tr>
        </tbody>
      </n-table>
    </c-card>

    <c-card title="使用说明" class="mt-4">
      <ul class="ml-4 list-disc text-sm leading-6 opacity-80">
        <li>支持直接粘贴教务系统复制的成绩文本，自动识别「课程名 学分 成绩」，学年学期等数字会被自动忽略。</li>
        <li>等级制成绩（优/良/中/及格/不及格）按所在分数段中位分换算：优95、良85、中75、及格65、不及格50。</li>
        <li>绩点 = Σ(单科绩点 × 学分) ÷ Σ学分，按学分加权；算法可切换，如学校有专门算法可对照上方规则说明核对。</li>
        <li>重修、不计入绩点的课程可打开「排除」开关。</li>
      </ul>
    </c-card>
  </div>
</template>
