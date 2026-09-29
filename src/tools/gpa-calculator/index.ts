import { Calculator } from '@vicons/tabler';
import { defineTool } from '../tool';
import { translate } from '@/plugins/i18n.plugin';

export const tool = defineTool({
  name: translate('tools.gpa-calculator.title'),
  path: '/gpa-calculator',
  description: translate('tools.gpa-calculator.description'),
  keywords: ['gpa', '绩点', '加权平均分', '平均学分绩点', '学分', '成绩', 'weighted', 'average', 'credits', 'score'],
  component: () => import('./gpa-calculator.vue'),
  icon: Calculator,
  createdAt: new Date('2026-09-29'),
});
