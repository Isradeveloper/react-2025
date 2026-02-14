import { heroApi } from '../api/hero.api';
import type { HeroesSummary } from '../types/get-heroes-summary-interface';

export const getSummaryAction = async () => {
  const { data } = await heroApi.get<HeroesSummary>('/summary');
  return data;
};
