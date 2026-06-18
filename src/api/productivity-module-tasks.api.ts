// AUTO-GENERATED — Productivity Module - Tasks
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleTasksApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a task. */
  async createTask(data: T.CreateTaskRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/tasks`, data);
    return res.data;
  }

  /** Gets the task board. */
  async getTaskBoard(params?: { projectId?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/tasks/board`, { params });
    return res.data;
  }

  /** Updates task status. */
  async updateTaskStatus(taskId: string, data: T.UpdateTaskStatusRequest): Promise<void> {
    const res = await this.client.patch<void>(`/api/v1/tasks/${taskId}/status`, data);
    return res.data;
  }

  /** Adds a task time entry. */
  async addTimeEntry(taskId: string, data: T.AddTimeEntryRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/tasks/${taskId}/time-entries`, data);
    return res.data;
  }

  /** Gets task dependencies. */
  async getTaskDependencyGraph(taskId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/tasks/${taskId}/dependencies/graph`);
    return res.data;
  }
}
