import { request } from '@umijs/max';
import type { AnalysisData } from './data';
import { waitTime } from '@/utils';

export async function fakeChartData(): Promise<{ data: AnalysisData }> {
  await waitTime(2000)
  return request('/api/fake_analysis_chart_data');
}
