// AUTO-GENERATED — Productivity Module - Todos
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleTodosApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a todo. */
  async createTodo(data: T.CreateTodoRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/todos`, data);
    return res.data;
  }

  /** Gets todos with advanced filtering. */
  async getTodos(params?: { Status?: T.TodoStatus; Priority?: T.Priority; Category?: string; Tag?: string; DueDateFrom?: string; DueDateTo?: string; AssignedTo?: string; Search?: string; SortBy?: string; SortDirection?: string; Page?: number; PageSize?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/todos`, { params });
    return res.data;
  }

  /** Gets a todo by id. */
  async getTodoById(todoId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/todos/${todoId}`);
    return res.data;
  }

  /** Updates a todo. */
  async updateTodo(todoId: string, data: T.UpdateTodoRequest): Promise<void> {
    const res = await this.client.put<void>(`/api/v1/todos/${todoId}`, data);
    return res.data;
  }

  /** Soft deletes or restores a todo. */
  async deleteOrRestoreTodo(todoId: string, params?: { restore?: boolean }): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/todos/${todoId}`, { params });
    return res.data;
  }

  /** Marks a todo as complete. */
  async completeTodo(todoId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/todos/${todoId}/complete`);
    return res.data;
  }

  /** Reopens a completed todo. */
  async uncompleteTodo(todoId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/todos/${todoId}/uncomplete`);
    return res.data;
  }

  /** Converts a todo to a task. */
  async convertTodoToTask(todoId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/todos/${todoId}/convert-to-task`);
    return res.data;
  }

  /** Creates a reminder from a todo. */
  async createReminderFromTodo(todoId: string, data: T.CreateReminderFromEntityRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/todos/${todoId}/create-reminder`, data);
    return res.data;
  }
}
