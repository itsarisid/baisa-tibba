// AUTO-GENERATED — Privilege Module
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class PrivilegeModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** Creates a new privilege definition. */
  async createPrivilege(data: T.CreatePrivilegeRequest): Promise<string> {
    const res = await this.client.post<string>(`/api/v1/privileges`, data);
    return res.data;
  }

  /** Gets a paginated list of privileges. */
  async getPrivileges(params?: { pageNumber?: number; pageSize?: number; category?: string; search?: string; includeDeprecated?: boolean }): Promise<T.PrivilegeDtoPagedResponseDto> {
    const res = await this.client.get<T.PrivilegeDtoPagedResponseDto>(`/api/v1/privileges`, { params });
    return res.data;
  }

  /** Gets a single privilege definition. */
  async getPrivilegeById(privilegeId: string): Promise<T.PrivilegeDto> {
    const res = await this.client.get<T.PrivilegeDto>(`/api/v1/privileges/${privilegeId}`);
    return res.data;
  }

  /** Updates privilege metadata. */
  async updatePrivilege(privilegeId: string, data: T.UpdatePrivilegeRequest): Promise<void> {
    const res = await this.client.put<void>(`/api/v1/privileges/${privilegeId}`, data);
    return res.data;
  }

  /** Deprecates or hard-deletes a privilege. */
  async deletePrivilege(privilegeId: string, params?: { hardDelete?: boolean }): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/privileges/${privilegeId}`, { params });
    return res.data;
  }

  /** Creates a privilege category. */
  async createPrivilegeCategory(data: T.CreatePrivilegeCategoryRequest): Promise<string> {
    const res = await this.client.post<string>(`/api/v1/privileges/categories`, data);
    return res.data;
  }

  /** Gets all privilege categories. */
  async getPrivilegeCategories(): Promise<Array<T.PrivilegeCategoryDto>> {
    const res = await this.client.get<Array<T.PrivilegeCategoryDto>>(`/api/v1/privileges/categories`);
    return res.data;
  }

  /** Moves a privilege to a different category. */
  async movePrivilegeCategory(privilegeId: string, data: T.MovePrivilegeCategoryRequest): Promise<void> {
    const res = await this.client.patch<void>(`/api/v1/privileges/${privilegeId}/category`, data);
    return res.data;
  }

  /** Creates a composite privilege policy. */
  async createPrivilegePolicy(data: T.CreatePrivilegePolicyRequest): Promise<string> {
    const res = await this.client.post<string>(`/api/v1/privileges/policies`, data);
    return res.data;
  }

  /** Assigns privileges to a role. */
  async assignPrivilegeToRole(roleId: string, data: T.AssignRolePrivilegesRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/roles/${roleId}/privileges`, data);
    return res.data;
  }

  /** Gets privileges assigned to a role. */
  async getRolePrivileges(roleId: string): Promise<Array<T.PrivilegeAssignmentDto>> {
    const res = await this.client.get<Array<T.PrivilegeAssignmentDto>>(`/api/v1/roles/${roleId}/privileges`);
    return res.data;
  }

  /** Revokes a privilege from a role. */
  async revokePrivilegeFromRole(roleId: string, privilegeId: string): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/roles/${roleId}/privileges/${privilegeId}`);
    return res.data;
  }

  /** Bulk assigns or revokes privileges for roles. */
  async bulkAssignPrivilegesToRoles(data: T.BulkRolePrivilegeRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/roles/bulk/assign-privileges`, data);
    return res.data;
  }

  /** Assigns a privilege policy to a role. */
  async assignPolicyToRole(roleId: string, data: T.AssignPolicyRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/roles/${roleId}/policies`, data);
    return res.data;
  }

  /** Assigns a direct privilege to a user. */
  async assignPrivilegeToUser(userId: string, data: T.AssignUserPrivilegeRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/users/${userId}/privileges`, data);
    return res.data;
  }

  /** Gets the user's effective privileges. */
  async getUserEffectivePrivileges(userId: string): Promise<Array<T.UserEffectivePrivilegeDto>> {
    const res = await this.client.get<Array<T.UserEffectivePrivilegeDto>>(`/api/v1/users/${userId}/privileges/effective`);
    return res.data;
  }

  /** Revokes a direct privilege from a user. */
  async revokePrivilegeFromUser(userId: string, privilegeId: string): Promise<void> {
    const res = await this.client.delete<void>(`/api/v1/users/${userId}/privileges/${privilegeId}`);
    return res.data;
  }

  /** Gets privilege audit history for a user. */
  async getUserPrivilegeAudit(userId: string, params?: { take?: number; skip?: number }): Promise<Array<T.PrivilegeAuditLogDto>> {
    const res = await this.client.get<Array<T.PrivilegeAuditLogDto>>(`/api/v1/users/${userId}/privileges/audit`, { params });
    return res.data;
  }

  /** Assigns a privilege policy directly to a user. */
  async assignPolicyToUser(userId: string, data: T.AssignPolicyRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/users/${userId}/policies`, data);
    return res.data;
  }

  /** Checks whether the current user has a privilege. */
  async checkCurrentUserPrivilege(privilegeName: string): Promise<T.PrivilegeCheckResultDto> {
    const res = await this.client.get<T.PrivilegeCheckResultDto>(`/api/v1/auth/check-privilege/${privilegeName}`);
    return res.data;
  }

  /** Checks multiple privileges for the current user. */
  async batchCheckCurrentUserPrivileges(data: T.BatchPrivilegeCheckRequest): Promise<Record<string, boolean>> {
    const res = await this.client.post<Record<string, boolean>>(`/api/v1/auth/check-privileges`, data);
    return res.data;
  }

  /** Gets privilege usage analytics. */
  async getPrivilegeAnalytics(): Promise<T.PrivilegeAnalyticsDto> {
    const res = await this.client.get<T.PrivilegeAnalyticsDto>(`/api/v1/admin/privileges/analytics`);
    return res.data;
  }

  /** Gets privilege audit logs. */
  async getPrivilegeAuditLogs(params?: { userId?: string; privilegeId?: string; action?: T.PrivilegeAction; from?: string; to?: string; take?: number; skip?: number }): Promise<Array<T.PrivilegeAuditLogDto>> {
    const res = await this.client.get<Array<T.PrivilegeAuditLogDto>>(`/api/v1/admin/audit/privileges`, { params });
    return res.data;
  }

  /** Exports the privilege catalog. */
  async exportPrivilegeMatrix(params?: { format?: string }): Promise<void> {
    const res = await this.client.get<void>(`/api/v1/admin/privileges/export`, { params });
    return res.data;
  }

  /** Approves a self-service privilege request. */
  async approvePrivilegeRequest(requestId: string, data: T.DecidePrivilegeRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/privilege-requests/${requestId}/approve`, data);
    return res.data;
  }

  /** Denies a self-service privilege request. */
  async denyPrivilegeRequest(requestId: string, data: T.DecidePrivilegeRequest): Promise<void> {
    const res = await this.client.post<void>(`/api/v1/admin/privilege-requests/${requestId}/deny`, data);
    return res.data;
  }

  /** Requests temporary additional privilege access. */
  async createPrivilegeRequest(data: T.CreatePrivilegeAccessRequest): Promise<string> {
    const res = await this.client.post<string>(`/api/v1/users/me/privilege-requests`, data);
    return res.data;
  }

  /** Gets the authenticated user's current privileges. */
  async getMyPrivileges(): Promise<Array<T.UserEffectivePrivilegeDto>> {
    const res = await this.client.get<Array<T.UserEffectivePrivilegeDto>>(`/api/v1/users/me/privileges`);
    return res.data;
  }
}
