<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import type { CourseSlot, WeekParity } from './timetable-conflict.service';
import { buildWeekGrid, findConflicts, findFreeBlocks, formatWeeks, parseTimetable } from './timetable-conflict.service';
import { useCopy } from '@/composable/copy';

const rawInput = ref('');
const slots = ref<CourseSlot[]>([]);
const failedLines = ref<string[]>([]);
const currentWeek = useStorage<number>('timetable-conflict--week', 1);
const maxSection = useStorage<number>('timetable-conflict--max-section', 12);

const weekdayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
const weekdayOptions = weekdayNames.map((label, index) => ({ label, value: index + 1 }));
const parityOptions: { label: string; value: WeekParity }[] = [
  { label: '每周', value: 'all' },
  { label: '单周', value: 'odd' },
  { label: '双周', value: 'even' },
];
const palette = ['#18a058', '#2080f0', '#f0a020', '#d03050', '#7c3aed', '#0891b2', '#db2777', '#65a30d', '#d97706', '#4f46e5'];

function parseFromInput() {
  const parsed = parseTimetable(rawInput.value);
  slots.value = parsed.slots;
  failedLines.value = parsed.failedLines;
}

function loadSample() {
  rawInput.value = [
    '高等数学 周一 1-2节 1-16周',
    '高等数学 周三 3-4节 1-16周',
    '大学英语 周一 1-2节 1-16周(双)',
    '数据结构 周二 3-4节 1-16周',
    '数据结构 周四 3-4节 1-16周',
    '思想道德与法治 周三 1-2节 1-8周',
    '中国近现代史纲要 周三 1-2节 5-16周',
    '体育 周五 5-6节 1-16周',
  ].join('\n');
  parseFromInput();
}

function clearAll() {
  rawInput.value = '';
  slots.value = [];
  failedLines.value = [];
}

function addSlot() {
  slots.value.push({ id: crypto.randomUUID(), name: '新课程', weekday: 1, startSection: 1, endSection: 2, startWeek: 1, endWeek: 16, parity: 'all' });
}

function removeSlot(id: string) {
  slots.value = slots.value.filter(slot => slot.id !== id);
}

function slotColor(slot: CourseSlot): string {
  const index = slots.value.findIndex(item => item.id === slot.id);
  return palette[(index < 0 ? 0 : index) % palette.length]!;
}

function sectionText(slot: CourseSlot): string {
  return slot.startSection === slot.endSection ? `第${slot.startSection}节` : `第${slot.startSection}-${slot.endSection}节`;
}

const conflicts = computed(() => findConflicts(slots.value));
const conflictSlotIds = computed(() => new Set(conflicts.value.flatMap(({ a, b }) => [a.id, b.id])));
const freeBlocks = computed(() => findFreeBlocks(slots.value, currentWeek.value, maxSection.value));

const gridRows = computed(() => {
  const grid = buildWeekGrid(slots.value, currentWeek.value, maxSection.value);
  return grid.map((row, rowIndex) => ({
    section: rowIndex + 1,
    cells: row.map((slot) => {
      if (!slot) {
        return null;
      }
      return { name: slot.name, color: slotColor(slot), conflicted: conflictSlotIds.value.has(slot.id) };
    }),
  }));
});

const freeBlocksText = computed(() => {
  const lines = weekdayNames.map((name, index) => {
    const dayBlocks = freeBlocks.value.filter(block => block.weekday === index + 1);
    const detail = dayBlocks.map(block => (block.fromSection === block.toSection ? `第${block.fromSection}节` : `第${block.fromSection}-${block.toSection}节`)).join('、');
    return `${name}：${detail || '无空闲'}`;
  });
  return `第 ${currentWeek.value} 周空闲时段\n${lines.join('\n')}`;
});

const { copy } = useCopy({ text: '空闲时段已复制到剪贴板' });
</script>

<template>
  <div>
    <c-card title="第一步：粘贴课表">
      <c-input-text
        v-model:value="rawInput"
        multiline
        rows="6"
        label="从教务系统或同学处复制的课表文本"
        placeholder="每行一门课，如：高等数学 周一 1-2节 1-16周；支持 星期一、第3周、1-16周(单)、双周 等"
        mb-3
      />
      <div class="flex flex-wrap gap-2">
        <c-button @click="parseFromInput()">解析课表</c-button>
        <n-button @click="loadSample()">填入示例</n-button>
        <n-button quaternary @click="clearAll()">清空</n-button>
      </div>
      <n-alert v-if="failedLines.length" type="warning" class="mt-3" title="部分行未能识别，可在下方手动补录">
        <div v-for="line in failedLines" :key="line" class="text-xs">
          {{ line }}
        </div>
      </n-alert>
    </c-card>

    <c-card title="课程时段（可手动修改）" class="mt-4">
      <div v-if="slots.length === 0" class="py-4 text-center text-sm opacity-60">
        暂无课程，请先解析课表或点击「添加一行」。
      </div>
      <div v-for="slot in slots" :key="slot.id" class="mb-2 flex flex-wrap items-center gap-2">
        <c-input-text v-model:value="slot.name" placeholder="课程名" class="w-40 min-w-36" />
        <n-select v-model:value="slot.weekday" :options="weekdayOptions" class="w-28" />
        <n-input-number v-model:value="slot.startSection" :min="1" :max="20" class="w-28" placeholder="开始节" />
        <span class="opacity-60">-</span>
        <n-input-number v-model:value="slot.endSection" :min="1" :max="20" class="w-28" placeholder="结束节" />
        <span class="text-xs opacity-60">第</span>
        <n-input-number v-model:value="slot.startWeek" :min="1" :max="30" class="w-28" />
        <span class="text-xs opacity-60">-</span>
        <n-input-number v-model:value="slot.endWeek" :min="1" :max="30" class="w-28" />
        <span class="text-xs opacity-60">周</span>
        <n-select v-model:value="slot.parity" :options="parityOptions" class="w-24" />
        <n-button quaternary type="error" size="small" @click="removeSlot(slot.id)">删除</n-button>
      </div>
      <n-button dashed class="mt-2" @click="addSlot()">+ 添加一行</n-button>
    </c-card>

    <c-card title="每周课表总览" class="mt-4">
      <div class="mb-3 flex flex-wrap items-center gap-3">
        <span class="text-sm opacity-70">查看周次：</span>
        <n-input-number v-model:value="currentWeek" :min="1" :max="30" class="w-32" />
        <span class="text-sm opacity-70">每天节次数：</span>
        <n-input-number v-model:value="maxSection" :min="1" :max="20" class="w-32" />
      </div>
      <n-table :bordered="false" :single-line="false" size="small">
        <thead>
          <tr>
            <th class="w-12 text-center">
              节
            </th>
            <th v-for="name in weekdayNames" :key="name" class="text-center">
              {{ name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in gridRows" :key="row.section">
            <td class="text-center text-xs opacity-60">
              {{ row.section }}
            </td>
            <td v-for="(cell, dayIndex) in row.cells" :key="dayIndex" class="p-1 text-center text-xs">
              <div
                v-if="cell"
                class="rounded px-1 py-2 leading-tight text-white"
                :class="cell.conflicted ? 'ring-2 ring-red-600' : ''"
                :style="{ backgroundColor: cell.color }"
              >
                {{ cell.name }}
              </div>
              <span v-else class="opacity-20">·</span>
            </td>
          </tr>
        </tbody>
      </n-table>
      <p class="mt-2 text-xs opacity-60">
        红框标记的课程存在时间冲突；单双周课程只在对应周次显示。
      </p>
    </c-card>

    <c-card title="冲突与空闲时段" class="mt-4">
      <n-alert v-if="conflicts.length" type="error" class="mb-3" :title="`发现 ${conflicts.length} 处时间冲突`">
        <div v-for="(conflict, index) in conflicts" :key="index" class="text-sm">
          「{{ conflict.a.name }}」与「{{ conflict.b.name }}」在{{ weekdayNames[conflict.weekday - 1] }}{{ sectionText(conflict.a) }}重叠（第 {{ formatWeeks(conflict.weeks) }} 周）
        </div>
      </n-alert>
      <n-alert v-else type="success" class="mb-3" title="无冲突">
        所选课程之间没有时间冲突。
      </n-alert>

      <div class="flex flex-wrap items-center gap-3">
        <c-button @click="copy(freeBlocksText)">复制空闲时段</c-button>
        <span class="text-xs opacity-60">按当前选择的周次（第 {{ currentWeek }} 周）计算。</span>
      </div>
      <pre class="mt-3 whitespace-pre-wrap rounded bg-gray-100 p-3 text-xs leading-6">{{ freeBlocksText }}</pre>
    </c-card>

    <c-card title="使用说明" class="mt-4">
      <ul class="ml-4 list-disc text-sm leading-6 opacity-80">
        <li>每行一门课，示例：高等数学 周一 1-2节 1-16周；同一行可写多个星期（如「周一周三」）。</li>
        <li>支持「星期一/周一」、单节「第3节」、节次范围「1-2节/第1-2节」、周次「第3周/1-16周」以及「单周/双周/(单)/(双)」。</li>
        <li>冲突判定：同一天、节次重叠、且周次（含单双周）有交集；空闲时段按当前所选周次实时计算并合并连续节次。</li>
        <li>教务系统复制格式千差万别，识别失败的行会列在上方提示里，可直接在课程时段表中手动修改。</li>
      </ul>
    </c-card>
  </div>
</template>
