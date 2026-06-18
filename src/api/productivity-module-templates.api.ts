// AUTO-GENERATED — Productivity Module - Templates
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleTemplatesApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a reusable productivity template. */
  async createTemplate(data: T.CreateTemplateRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/templates`, data);
    return res.data;
  }

  /** Instantiates a template. */
  async instantiateTemplate(templateId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/templates/${templateId}/instantiate`);
    return res.data;
  }
}
