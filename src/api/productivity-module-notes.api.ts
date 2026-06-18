// AUTO-GENERATED — Productivity Module - Notes
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class ProductivityModuleNotesApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a note. */
  async createNote(data: T.CreateNoteRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/notes`, data);
    return res.data;
  }

  /** Gets notes. */
  async getNotes(params?: { category?: string; tag?: string; notebookId?: string; isPinned?: boolean; isFavorite?: boolean; search?: string; page?: number; pageSize?: number }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/notes`, { params });
    return res.data;
  }

  /** Searches notes. */
  async searchNotes(params?: { q?: string; in?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/notes/search`, { params });
    return res.data;
  }

  /** Updates a note. */
  async updateNote(noteId: string, data: T.UpdateNoteRequest): Promise<void> {
    const res = await this.client.put<void>(`/api/v1/notes/${noteId}`, data);
    return res.data;
  }

  /** Shares a note. */
  async shareNote(noteId: string, data: T.ShareNoteRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/notes/${noteId}/share`, data);
    return res.data;
  }

  /** Gets note versions. */
  async getNoteVersions(noteId: string): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/notes/${noteId}/versions`);
    return res.data;
  }

  /** Exports a note. */
  async exportNote(noteId: string, params?: { format?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/notes/${noteId}/export`, { params });
    return res.data;
  }

  /** Converts a note to a todo. */
  async convertNoteToTodo(noteId: string): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/notes/${noteId}/convert-to-todo`);
    return res.data;
  }

  /** Creates a notebook. */
  async createNotebook(data: T.CreateNotebookRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/notes/notebooks`, data);
    return res.data;
  }
}
