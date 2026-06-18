// AUTO-GENERATED — Productivity Module - Reports
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleReportsApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Gets a productivity report. */
  async getProductivityReport(params?: { period?: string; start?: string; end?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/reports/productivity`, { params });
    return res.data;
  }
}
