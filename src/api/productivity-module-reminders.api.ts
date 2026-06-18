// AUTO-GENERATED — Productivity Module - Reminders
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleRemindersApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a reminder. */
  async createReminder(data: T.CreateReminderRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/reminders`, data);
    return res.data;
  }

  /** Gets reminders. */
  async getReminders(params?: { from?: string; to?: string; type?: T.ReminderType; status?: T.ReminderStatus }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/reminders`, { params });
    return res.data;
  }

  /** Snoozes a reminder. */
  async snoozeReminder(reminderId: string, data: T.SnoozeReminderRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/reminders/${reminderId}/snooze`, data);
    return res.data;
  }

  /** Dismisses a reminder. */
  async dismissReminder(reminderId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/reminders/${reminderId}/dismiss`);
    return res.data;
  }

  /** Triggers a reminder immediately for testing. */
  async testReminder(reminderId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/reminders/${reminderId}/test`);
    return res.data;
  }
}
