// AUTO-GENERATED — Productivity Module - Smart Views
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleSmartViewsApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Performs global productivity search. */
  async globalProductivitySearch(params?: { q?: string; types?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/search`, { params });
    return res.data;
  }

  /** Gets the productivity dashboard. */
  async getProductivityDashboardToday(): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/dashboard/today`);
    return res.data;
  }

  /** Creates a smart list. */
  async createSmartList(data: T.CreateSmartListRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/smart-lists`, data);
    return res.data;
  }
}
