import { CalendarEvent } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.timetable-conflict.title'),
  path: '/timetable-conflict',
  description: translate('tools.timetable-conflict.description'),
  keywords: ['课表', '课程表', '冲突', '空闲', '单双周', 'timetable', 'schedule', 'conflict', 'free', 'slot'],
  component: () => import('./timetable-conflict.vue'),
  icon: CalendarEvent,
  createdAt: new Date('2026-09-29'),
});
