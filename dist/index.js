"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AlphabetClient: () => AlphabetClient
});
module.exports = __toCommonJS(index_exports);

// src/AlphabetClient.ts
var import_axios = __toESM(require("axios"));

// src/api/admin.api.ts
var AdminApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a new user account. */
  async adminCreateUser(data) {
    const res = await this.client.post(`/api/v1/admin/users`, data);
    return res.data;
  }
  /** Lists all users. */
  async adminGetUsers() {
    const res = await this.client.get(`/api/v1/admin/users`);
    return res.data;
  }
  /** Gets detailed information for a single user. */
  async adminGetUserById(userId) {
    const res = await this.client.get(`/api/v1/admin/users/${userId}`);
    return res.data;
  }
  /** Locks a user account. */
  async adminLockUser(userId, data) {
    const res = await this.client.post(`/api/v1/admin/users/${userId}/lock`, data);
    return res.data;
  }
  /** Unlocks a previously locked account. */
  async adminUnlockUser(userId) {
    const res = await this.client.post(`/api/v1/admin/users/${userId}/unlock`);
    return res.data;
  }
  /** Resets a user's password without the old password. */
  async adminResetPassword(userId, data) {
    const res = await this.client.post(`/api/v1/admin/users/${userId}/reset-password`, data);
    return res.data;
  }
  /** Sends a password reset link to the user. */
  async adminSendResetLink(userId) {
    const res = await this.client.post(`/api/v1/admin/users/${userId}/send-reset-link`);
    return res.data;
  }
  /** Forces a user to sign out everywhere. */
  async adminForceLogout(userId) {
    const res = await this.client.post(`/api/v1/admin/users/${userId}/force-logout`);
    return res.data;
  }
  /** Gets the user's activity and audit history. */
  async adminGetUserAuditLogs(userId, params) {
    const res = await this.client.get(`/api/v1/admin/users/${userId}/audit-logs`, { params });
    return res.data;
  }
};

// src/api/asset-management-module.api.ts
var AssetManagementModuleApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a new asset. */
  async createAsset(data) {
    const res = await this.client.post(`/api/v1/assets`, data);
    return res.data;
  }
  /** Gets a filtered and paginated asset list. */
  async getAssets(params) {
    const res = await this.client.get(`/api/v1/assets`, { params });
    return res.data;
  }
  /** Gets a single asset with full details. */
  async getAssetById(assetId) {
    const res = await this.client.get(`/api/v1/assets/${assetId}`);
    return res.data;
  }
  /** Updates an existing asset. */
  async updateAsset(assetId, data) {
    const res = await this.client.put(`/api/v1/assets/${assetId}`, data);
    return res.data;
  }
  /** Soft deletes an asset by retiring or disposing it. */
  async retireAsset(assetId, data) {
    const res = await this.client.delete(`/api/v1/assets/${assetId}`);
    return res.data;
  }
  /** Moves an asset to a new location. */
  async moveAsset(assetId, data) {
    const res = await this.client.post(`/api/v1/assets/${assetId}/move`, data);
    return res.data;
  }
  /** Assigns an asset to a user. */
  async assignAsset(assetId, data) {
    const res = await this.client.post(`/api/v1/assets/${assetId}/assign`, data);
    return res.data;
  }
  /** Returns an assigned asset. */
  async unassignAsset(assetId, data) {
    const res = await this.client.post(`/api/v1/assets/${assetId}/unassign`, data);
    return res.data;
  }
  /** Transfers an assignment between users. */
  async transferAsset(assetId, data) {
    const res = await this.client.post(`/api/v1/assets/${assetId}/transfer`, data);
    return res.data;
  }
  /** Gets assignment history for an asset. */
  async getAssetAssignments(assetId) {
    const res = await this.client.get(`/api/v1/assets/${assetId}/assignments`);
    return res.data;
  }
  /** Schedules maintenance for an asset. */
  async scheduleAssetMaintenance(assetId, data) {
    const res = await this.client.post(`/api/v1/assets/${assetId}/maintenance`, data);
    return res.data;
  }
  /** Gets maintenance history for an asset. */
  async getAssetMaintenanceHistory(assetId) {
    const res = await this.client.get(`/api/v1/assets/${assetId}/maintenance`);
    return res.data;
  }
  /** Completes a maintenance record. */
  async completeAssetMaintenance(assetId, maintenanceId, data) {
    const res = await this.client.post(`/api/v1/assets/${assetId}/maintenance/${maintenanceId}/complete`, data);
    return res.data;
  }
  /** Calculates depreciation for an asset. */
  async getAssetDepreciation(assetId, params) {
    const res = await this.client.get(`/api/v1/assets/${assetId}/depreciation`, { params });
    return res.data;
  }
  /** Gets the activity timeline for an asset. */
  async getAssetActivity(assetId, params) {
    const res = await this.client.get(`/api/v1/assets/${assetId}/activity`, { params });
    return res.data;
  }
  /** Scans an asset by barcode or QR payload. */
  async scanAsset(params) {
    const res = await this.client.get(`/api/v1/assets/scan`, { params });
    return res.data;
  }
  /** Creates a category in the asset hierarchy. */
  async createAssetCategory(data) {
    const res = await this.client.post(`/api/v1/asset-categories`, data);
    return res.data;
  }
  /** Gets the asset category hierarchy. */
  async getAssetCategoryTree() {
    const res = await this.client.get(`/api/v1/asset-categories/tree`);
    return res.data;
  }
  /** Creates a location used by the asset module. */
  async createAssetLocation(data) {
    const res = await this.client.post(`/api/v1/locations`, data);
    return res.data;
  }
  /** Creates an asset workflow definition. */
  async createAssetWorkflowDefinition(data) {
    const res = await this.client.post(`/api/v1/workflows`, data);
    return res.data;
  }
  /** Starts a workflow for an asset. */
  async startAssetWorkflow(assetId, data) {
    const res = await this.client.post(`/api/v1/workflows/assets/${assetId}/start`, data);
    return res.data;
  }
  /** Gets a workflow instance. */
  async getAssetWorkflowInstance(instanceId) {
    const res = await this.client.get(`/api/v1/workflows/instances/${instanceId}`);
    return res.data;
  }
  /** Applies an action to the current workflow step. */
  async actOnAssetWorkflowStep(instanceId, stepId, data) {
    const res = await this.client.post(`/api/v1/workflows/instances/${instanceId}/steps/${stepId}/action`, data);
    return res.data;
  }
  /** Gets pending workflow work for the current user. */
  async getPendingAssetWorkflows() {
    const res = await this.client.get(`/api/v1/workflows/pending`);
    return res.data;
  }
  /** Applies a stock adjustment. */
  async adjustAssetInventory(data) {
    const res = await this.client.post(`/api/v1/inventory/stock-adjustments`, data);
    return res.data;
  }
  /** Performs a physical stock take. */
  async performAssetStockTake(data) {
    const res = await this.client.post(`/api/v1/inventory/stock-take`, data);
    return res.data;
  }
  /** Gets low stock items. */
  async getLowStockAssets() {
    const res = await this.client.get(`/api/v1/inventory/low-stock`);
    return res.data;
  }
  /** Gets the current stock report. */
  async getCurrentStockReport() {
    const res = await this.client.get(`/api/v1/inventory/reports/current-stock`);
    return res.data;
  }
  /** Gets asset utilization metrics. */
  async getAssetUtilizationReport() {
    const res = await this.client.get(`/api/v1/reports/utilization`);
    return res.data;
  }
  /** Gets asset lifecycle metrics. */
  async getAssetLifecycleReport() {
    const res = await this.client.get(`/api/v1/reports/lifecycle`);
    return res.data;
  }
  /** Gets asset compliance metrics. */
  async getAssetComplianceReport() {
    const res = await this.client.get(`/api/v1/reports/compliance`);
    return res.data;
  }
  /** Gets the global asset activity feed. */
  async getGlobalAssetActivity(params) {
    const res = await this.client.get(`/api/v1/admin/activity`, { params });
    return res.data;
  }
  /** Queues an audit report for generation. */
  async generateAssetAuditReport(data) {
    const res = await this.client.post(`/api/v1/admin/audit/generate`, data);
    return res.data;
  }
  /** Gets assets assigned to the current user. */
  async getMyAssignedAssets() {
    const res = await this.client.get(`/api/v1/users/me/assets`);
    return res.data;
  }
};

// src/api/communication-module.api.ts
var CommunicationModuleApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Sends a message through one or more configured channels. */
  async sendCommunication(data) {
    const res = await this.client.post(`/api/v1/communications/send`, data);
    return res.data;
  }
  /** Gets the active communication module configuration. */
  async getCommunicationConfiguration() {
    const res = await this.client.get(`/api/v1/communications/configuration`);
    return res.data;
  }
};

// src/api/identity-module.api.ts
var IdentityModuleApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Registers a new user account. */
  async registerUser(data) {
    const res = await this.client.post(`/api/v1/auth/register`, data);
    return res.data;
  }
  /** Confirms a user's email address. */
  async confirmEmail(data) {
    const res = await this.client.post(`/api/v1/auth/confirm-email`, data);
    return res.data;
  }
  /** Authenticates a user. */
  async login(data) {
    const res = await this.client.post(`/api/v1/auth/login`, data);
    return res.data;
  }
  /** Starts the forgot-password flow. */
  async forgotPassword(data) {
    const res = await this.client.post(`/api/v1/auth/forgot-password`, data);
    return res.data;
  }
  /** Completes the password reset flow. */
  async resetPassword(data) {
    const res = await this.client.post(`/api/v1/auth/reset-password`, data);
    return res.data;
  }
  /** Refreshes an expired or expiring access token. */
  async refreshToken(data) {
    const res = await this.client.post(`/api/v1/auth/refresh-token`, data);
    return res.data;
  }
  /** Signs the current user out. */
  async logout(data) {
    const res = await this.client.post(`/api/v1/auth/logout`, data);
    return res.data;
  }
  /** Changes the current user's password. */
  async changePassword(data) {
    const res = await this.client.post(`/api/v1/auth/change-password`, data);
    return res.data;
  }
  /** Starts authenticator-app MFA enrollment. */
  async enableAuthenticator() {
    const res = await this.client.post(`/api/v1/auth/mfa/enable-authenticator`);
    return res.data;
  }
  /** Completes authenticator-app MFA enrollment. */
  async verifyAuthenticator(data) {
    const res = await this.client.post(`/api/v1/auth/mfa/verify-authenticator`, data);
    return res.data;
  }
  /** Enables OTP-based MFA delivery. */
  async enableOtp(data) {
    const res = await this.client.post(`/api/v1/auth/mfa/enable-otp`, data);
    return res.data;
  }
  /** Verifies an OTP code. */
  async verifyOtp(data) {
    const res = await this.client.post(`/api/v1/auth/mfa/verify-otp`, data);
    return res.data;
  }
  /** Completes sign-in after MFA challenge. */
  async mfaLogin(data) {
    const res = await this.client.post(`/api/v1/auth/mfa/login`, data);
    return res.data;
  }
  /** Gets the currently authenticated user. */
  async getCurrentUser() {
    const res = await this.client.get(`/api/v1/auth/me`);
    return res.data;
  }
  /** Gets current MFA recovery codes. */
  async getRecoveryCodes() {
    const res = await this.client.get(`/api/v1/auth/mfa/recovery-codes`);
    return res.data;
  }
  /** Regenerates MFA recovery codes. */
  async regenerateRecoveryCodes() {
    const res = await this.client.post(`/api/v1/auth/mfa/recovery-codes/regenerate`);
    return res.data;
  }
};

// src/api/leave-management-module-administration.api.ts
var LeaveManagementModuleAdministrationApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets approval chains. */
  async getLeaveApprovalChains() {
    const res = await this.client.get(`/api/v1/leave/admin/approval-chains`);
    return res.data;
  }
  /** Creates an approval chain. */
  async createLeaveApprovalChain(data) {
    const res = await this.client.post(`/api/v1/leave/admin/approval-chains`, data);
    return res.data;
  }
  /** Creates a public holiday. */
  async createPublicHoliday(data) {
    const res = await this.client.post(`/api/v1/leave/admin/holidays`, data);
    return res.data;
  }
  /** Creates a blackout period. */
  async createLeaveBlackoutPeriod(data) {
    const res = await this.client.post(`/api/v1/leave/admin/blackout-periods`, data);
    return res.data;
  }
  /** Creates an accrual rule. */
  async createLeaveAccrualRule(data) {
    const res = await this.client.post(`/api/v1/leave/admin/accrual-rules`, data);
    return res.data;
  }
  /** Runs leave accrual. */
  async runLeaveAccrual(params) {
    const res = await this.client.post(`/api/v1/leave/admin/accrual/run`, void 0, { params });
    return res.data;
  }
  /** Gets leave audit logs. */
  async getLeaveAuditLogs(params) {
    const res = await this.client.get(`/api/v1/leave/admin/audit`, { params });
    return res.data;
  }
  /** Gets leave report summary. */
  async getLeaveReportSummary(params) {
    const res = await this.client.get(`/api/v1/leave/admin/reports/summary`, { params });
    return res.data;
  }
};

// src/api/leave-management-module-approvals.api.ts
var LeaveManagementModuleApprovalsApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets pending approvals. */
  async getPendingLeaveApprovals() {
    const res = await this.client.get(`/api/v1/leave/approvals/pending`);
    return res.data;
  }
  /** Approves a leave request. */
  async approveLeaveRequest(requestId, data) {
    const res = await this.client.post(`/api/v1/leave/approvals/${requestId}/approve`, data);
    return res.data;
  }
  /** Rejects a leave request. */
  async rejectLeaveRequest(requestId, data) {
    const res = await this.client.post(`/api/v1/leave/approvals/${requestId}/reject`, data);
    return res.data;
  }
  /** Requests leave request changes. */
  async requestLeaveChanges(requestId, data) {
    const res = await this.client.post(`/api/v1/leave/approvals/${requestId}/changes`, data);
    return res.data;
  }
  /** Processes approvals in batch. */
  async batchLeaveApproval(data) {
    const res = await this.client.post(`/api/v1/leave/approvals/batch`, data);
    return res.data;
  }
  /** Gets approval history. */
  async getLeaveApprovalHistory(requestId) {
    const res = await this.client.get(`/api/v1/leave/approvals/${requestId}/history`);
    return res.data;
  }
};

// src/api/leave-management-module-balances.api.ts
var LeaveManagementModuleBalancesApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets my leave balances. */
  async getMyLeaveBalances(params) {
    const res = await this.client.get(`/api/v1/leave/balances/me`, { params });
    return res.data;
  }
  /** Gets another user's leave balances. */
  async getUserLeaveBalances(userId, params) {
    const res = await this.client.get(`/api/v1/leave/balances/users/${userId}`, { params });
    return res.data;
  }
  /** Initializes leave balances. */
  async initializeLeaveBalances(data) {
    const res = await this.client.post(`/api/v1/leave/balances/initialize`, data);
    return res.data;
  }
  /** Adjusts a leave balance. */
  async adjustLeaveBalance(data) {
    const res = await this.client.post(`/api/v1/leave/balances/adjust`, data);
    return res.data;
  }
};

// src/api/leave-management-module-calendar.api.ts
var LeaveManagementModuleCalendarApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets leave calendar data. */
  async getLeaveCalendar(params) {
    const res = await this.client.get(`/api/v1/leave/calendar`, { params });
    return res.data;
  }
  /** Gets public holidays. */
  async getPublicHolidays(params) {
    const res = await this.client.get(`/api/v1/leave/calendar/holidays`, { params });
    return res.data;
  }
};

// src/api/leave-management-module-delegations.api.ts
var LeaveManagementModuleDelegationsApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets leave delegations. */
  async getLeaveDelegations(userId) {
    const res = await this.client.get(`/api/v1/leave/delegations/users/${userId}`);
    return res.data;
  }
  /** Creates approval delegation. */
  async createLeaveDelegation(data) {
    const res = await this.client.post(`/api/v1/leave/delegations`, data);
    return res.data;
  }
  /** Revokes approval delegation. */
  async revokeLeaveDelegation(delegationId) {
    const res = await this.client.post(`/api/v1/leave/delegations/${delegationId}/revoke`);
    return res.data;
  }
};

// src/api/leave-management-module-leave-types.api.ts
var LeaveManagementModuleLeaveTypesApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets configured leave types. */
  async getLeaveTypes(params) {
    const res = await this.client.get(`/api/v1/leave/types`, { params });
    return res.data;
  }
  /** Creates a leave type. */
  async createLeaveType(data) {
    const res = await this.client.post(`/api/v1/leave/types`, data);
    return res.data;
  }
  /** Updates a leave type. */
  async updateLeaveType(leaveTypeId, data) {
    const res = await this.client.put(`/api/v1/leave/types/${leaveTypeId}`, data);
    return res.data;
  }
  /** Deactivates a leave type. */
  async deactivateLeaveType(leaveTypeId) {
    const res = await this.client.delete(`/api/v1/leave/types/${leaveTypeId}`);
    return res.data;
  }
};

// src/api/leave-management-module-requests.api.ts
var LeaveManagementModuleRequestsApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Submits a leave request. */
  async submitLeaveRequest(data) {
    const res = await this.client.post(`/api/v1/leave/requests`, data);
    return res.data;
  }
  /** Searches leave requests. */
  async searchLeaveRequests(params) {
    const res = await this.client.get(`/api/v1/leave/requests`, { params });
    return res.data;
  }
  /** Gets a leave request. */
  async getLeaveRequestById(requestId) {
    const res = await this.client.get(`/api/v1/leave/requests/${requestId}`);
    return res.data;
  }
  /** Modifies a leave request. */
  async modifyLeaveRequest(requestId, data) {
    const res = await this.client.put(`/api/v1/leave/requests/${requestId}`, data);
    return res.data;
  }
  /** Cancels a leave request. */
  async cancelLeaveRequest(requestId, data) {
    const res = await this.client.post(`/api/v1/leave/requests/${requestId}/cancel`, data);
    return res.data;
  }
  /** Withdraws a pending leave request. */
  async withdrawLeaveRequest(requestId) {
    const res = await this.client.post(`/api/v1/leave/requests/${requestId}/withdraw`);
    return res.data;
  }
};

// src/api/privilege-module.api.ts
var PrivilegeModuleApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a new privilege definition. */
  async createPrivilege(data) {
    const res = await this.client.post(`/api/v1/privileges`, data);
    return res.data;
  }
  /** Gets a paginated list of privileges. */
  async getPrivileges(params) {
    const res = await this.client.get(`/api/v1/privileges`, { params });
    return res.data;
  }
  /** Gets a single privilege definition. */
  async getPrivilegeById(privilegeId) {
    const res = await this.client.get(`/api/v1/privileges/${privilegeId}`);
    return res.data;
  }
  /** Updates privilege metadata. */
  async updatePrivilege(privilegeId, data) {
    const res = await this.client.put(`/api/v1/privileges/${privilegeId}`, data);
    return res.data;
  }
  /** Deprecates or hard-deletes a privilege. */
  async deletePrivilege(privilegeId, params) {
    const res = await this.client.delete(`/api/v1/privileges/${privilegeId}`, { params });
    return res.data;
  }
  /** Creates a privilege category. */
  async createPrivilegeCategory(data) {
    const res = await this.client.post(`/api/v1/privileges/categories`, data);
    return res.data;
  }
  /** Gets all privilege categories. */
  async getPrivilegeCategories() {
    const res = await this.client.get(`/api/v1/privileges/categories`);
    return res.data;
  }
  /** Moves a privilege to a different category. */
  async movePrivilegeCategory(privilegeId, data) {
    const res = await this.client.patch(`/api/v1/privileges/${privilegeId}/category`, data);
    return res.data;
  }
  /** Creates a composite privilege policy. */
  async createPrivilegePolicy(data) {
    const res = await this.client.post(`/api/v1/privileges/policies`, data);
    return res.data;
  }
  /** Assigns privileges to a role. */
  async assignPrivilegeToRole(roleId, data) {
    const res = await this.client.post(`/api/v1/roles/${roleId}/privileges`, data);
    return res.data;
  }
  /** Gets privileges assigned to a role. */
  async getRolePrivileges(roleId) {
    const res = await this.client.get(`/api/v1/roles/${roleId}/privileges`);
    return res.data;
  }
  /** Revokes a privilege from a role. */
  async revokePrivilegeFromRole(roleId, privilegeId) {
    const res = await this.client.delete(`/api/v1/roles/${roleId}/privileges/${privilegeId}`);
    return res.data;
  }
  /** Bulk assigns or revokes privileges for roles. */
  async bulkAssignPrivilegesToRoles(data) {
    const res = await this.client.post(`/api/v1/roles/bulk/assign-privileges`, data);
    return res.data;
  }
  /** Assigns a privilege policy to a role. */
  async assignPolicyToRole(roleId, data) {
    const res = await this.client.post(`/api/v1/roles/${roleId}/policies`, data);
    return res.data;
  }
  /** Assigns a direct privilege to a user. */
  async assignPrivilegeToUser(userId, data) {
    const res = await this.client.post(`/api/v1/users/${userId}/privileges`, data);
    return res.data;
  }
  /** Gets the user's effective privileges. */
  async getUserEffectivePrivileges(userId) {
    const res = await this.client.get(`/api/v1/users/${userId}/privileges/effective`);
    return res.data;
  }
  /** Revokes a direct privilege from a user. */
  async revokePrivilegeFromUser(userId, privilegeId) {
    const res = await this.client.delete(`/api/v1/users/${userId}/privileges/${privilegeId}`);
    return res.data;
  }
  /** Gets privilege audit history for a user. */
  async getUserPrivilegeAudit(userId, params) {
    const res = await this.client.get(`/api/v1/users/${userId}/privileges/audit`, { params });
    return res.data;
  }
  /** Assigns a privilege policy directly to a user. */
  async assignPolicyToUser(userId, data) {
    const res = await this.client.post(`/api/v1/users/${userId}/policies`, data);
    return res.data;
  }
  /** Checks whether the current user has a privilege. */
  async checkCurrentUserPrivilege(privilegeName) {
    const res = await this.client.get(`/api/v1/auth/check-privilege/${privilegeName}`);
    return res.data;
  }
  /** Checks multiple privileges for the current user. */
  async batchCheckCurrentUserPrivileges(data) {
    const res = await this.client.post(`/api/v1/auth/check-privileges`, data);
    return res.data;
  }
  /** Gets privilege usage analytics. */
  async getPrivilegeAnalytics() {
    const res = await this.client.get(`/api/v1/admin/privileges/analytics`);
    return res.data;
  }
  /** Gets privilege audit logs. */
  async getPrivilegeAuditLogs(params) {
    const res = await this.client.get(`/api/v1/admin/audit/privileges`, { params });
    return res.data;
  }
  /** Exports the privilege catalog. */
  async exportPrivilegeMatrix(params) {
    const res = await this.client.get(`/api/v1/admin/privileges/export`, { params });
    return res.data;
  }
  /** Approves a self-service privilege request. */
  async approvePrivilegeRequest(requestId, data) {
    const res = await this.client.post(`/api/v1/admin/privilege-requests/${requestId}/approve`, data);
    return res.data;
  }
  /** Denies a self-service privilege request. */
  async denyPrivilegeRequest(requestId, data) {
    const res = await this.client.post(`/api/v1/admin/privilege-requests/${requestId}/deny`, data);
    return res.data;
  }
  /** Requests temporary additional privilege access. */
  async createPrivilegeRequest(data) {
    const res = await this.client.post(`/api/v1/users/me/privilege-requests`, data);
    return res.data;
  }
  /** Gets the authenticated user's current privileges. */
  async getMyPrivileges() {
    const res = await this.client.get(`/api/v1/users/me/privileges`);
    return res.data;
  }
};

// src/api/product-module.api.ts
var ProductModuleApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a new product. */
  async createProduct(data) {
    const res = await this.client.post(`/api/v1/products`, data);
    return res.data;
  }
  /** Gets a product by identifier. */
  async getProductById(id) {
    const res = await this.client.get(`/api/v1/products/${id}`);
    return res.data;
  }
};

// src/api/productivity-module-events.api.ts
var ProductivityModuleEventsApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a calendar event. */
  async createEvent(data) {
    const res = await this.client.post(`/api/v1/events`, data);
    return res.data;
  }
  /** Gets a calendar view. */
  async getCalendarView(params) {
    const res = await this.client.get(`/api/v1/events/calendar`, { params });
    return res.data;
  }
  /** Checks attendee availability. */
  async checkAvailability(data) {
    const res = await this.client.post(`/api/v1/events/availability`, data);
    return res.data;
  }
  /** Responds to an invitation. */
  async respondToEvent(eventId, data) {
    const res = await this.client.post(`/api/v1/events/${eventId}/respond`, data);
    return res.data;
  }
  /** Exports calendar data to iCal. */
  async exportCalendarIcal() {
    const res = await this.client.get(`/api/v1/events/export/ical`);
    return res.data;
  }
  /** Suggests meeting times. */
  async suggestMeetingTimes(data) {
    const res = await this.client.post(`/api/v1/events/suggest-times`, data);
    return res.data;
  }
};

// src/api/productivity-module-notes.api.ts
var ProductivityModuleNotesApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a note. */
  async createNote(data) {
    const res = await this.client.post(`/api/v1/notes`, data);
    return res.data;
  }
  /** Gets notes. */
  async getNotes(params) {
    const res = await this.client.get(`/api/v1/notes`, { params });
    return res.data;
  }
  /** Searches notes. */
  async searchNotes(params) {
    const res = await this.client.get(`/api/v1/notes/search`, { params });
    return res.data;
  }
  /** Updates a note. */
  async updateNote(noteId, data) {
    const res = await this.client.put(`/api/v1/notes/${noteId}`, data);
    return res.data;
  }
  /** Shares a note. */
  async shareNote(noteId, data) {
    const res = await this.client.post(`/api/v1/notes/${noteId}/share`, data);
    return res.data;
  }
  /** Gets note versions. */
  async getNoteVersions(noteId) {
    const res = await this.client.get(`/api/v1/notes/${noteId}/versions`);
    return res.data;
  }
  /** Exports a note. */
  async exportNote(noteId, params) {
    const res = await this.client.get(`/api/v1/notes/${noteId}/export`, { params });
    return res.data;
  }
  /** Converts a note to a todo. */
  async convertNoteToTodo(noteId) {
    const res = await this.client.post(`/api/v1/notes/${noteId}/convert-to-todo`);
    return res.data;
  }
  /** Creates a notebook. */
  async createNotebook(data) {
    const res = await this.client.post(`/api/v1/notes/notebooks`, data);
    return res.data;
  }
};

// src/api/productivity-module-reminders.api.ts
var ProductivityModuleRemindersApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a reminder. */
  async createReminder(data) {
    const res = await this.client.post(`/api/v1/reminders`, data);
    return res.data;
  }
  /** Gets reminders. */
  async getReminders(params) {
    const res = await this.client.get(`/api/v1/reminders`, { params });
    return res.data;
  }
  /** Snoozes a reminder. */
  async snoozeReminder(reminderId, data) {
    const res = await this.client.post(`/api/v1/reminders/${reminderId}/snooze`, data);
    return res.data;
  }
  /** Dismisses a reminder. */
  async dismissReminder(reminderId) {
    const res = await this.client.post(`/api/v1/reminders/${reminderId}/dismiss`);
    return res.data;
  }
  /** Triggers a reminder immediately for testing. */
  async testReminder(reminderId) {
    const res = await this.client.post(`/api/v1/reminders/${reminderId}/test`);
    return res.data;
  }
};

// src/api/productivity-module-reports.api.ts
var ProductivityModuleReportsApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Gets a productivity report. */
  async getProductivityReport(params) {
    const res = await this.client.get(`/api/v1/reports/productivity`, { params });
    return res.data;
  }
};

// src/api/productivity-module-smart-views.api.ts
var ProductivityModuleSmartViewsApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Performs global productivity search. */
  async globalProductivitySearch(params) {
    const res = await this.client.get(`/api/v1/search`, { params });
    return res.data;
  }
  /** Gets the productivity dashboard. */
  async getProductivityDashboardToday() {
    const res = await this.client.get(`/api/v1/dashboard/today`);
    return res.data;
  }
  /** Creates a smart list. */
  async createSmartList(data) {
    const res = await this.client.post(`/api/v1/smart-lists`, data);
    return res.data;
  }
};

// src/api/productivity-module-tasks.api.ts
var ProductivityModuleTasksApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a task. */
  async createTask(data) {
    const res = await this.client.post(`/api/v1/tasks`, data);
    return res.data;
  }
  /** Gets the task board. */
  async getTaskBoard(params) {
    const res = await this.client.get(`/api/v1/tasks/board`, { params });
    return res.data;
  }
  /** Updates task status. */
  async updateTaskStatus(taskId, data) {
    const res = await this.client.patch(`/api/v1/tasks/${taskId}/status`, data);
    return res.data;
  }
  /** Adds a task time entry. */
  async addTimeEntry(taskId, data) {
    const res = await this.client.post(`/api/v1/tasks/${taskId}/time-entries`, data);
    return res.data;
  }
  /** Gets task dependencies. */
  async getTaskDependencyGraph(taskId) {
    const res = await this.client.get(`/api/v1/tasks/${taskId}/dependencies/graph`);
    return res.data;
  }
};

// src/api/productivity-module-templates.api.ts
var ProductivityModuleTemplatesApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a reusable productivity template. */
  async createTemplate(data) {
    const res = await this.client.post(`/api/v1/templates`, data);
    return res.data;
  }
  /** Instantiates a template. */
  async instantiateTemplate(templateId) {
    const res = await this.client.post(`/api/v1/templates/${templateId}/instantiate`);
    return res.data;
  }
};

// src/api/productivity-module-todos.api.ts
var ProductivityModuleTodosApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a todo. */
  async createTodo(data) {
    const res = await this.client.post(`/api/v1/todos`, data);
    return res.data;
  }
  /** Gets todos with advanced filtering. */
  async getTodos(params) {
    const res = await this.client.get(`/api/v1/todos`, { params });
    return res.data;
  }
  /** Gets a todo by id. */
  async getTodoById(todoId) {
    const res = await this.client.get(`/api/v1/todos/${todoId}`);
    return res.data;
  }
  /** Updates a todo. */
  async updateTodo(todoId, data) {
    const res = await this.client.put(`/api/v1/todos/${todoId}`, data);
    return res.data;
  }
  /** Soft deletes or restores a todo. */
  async deleteOrRestoreTodo(todoId, params) {
    const res = await this.client.delete(`/api/v1/todos/${todoId}`, { params });
    return res.data;
  }
  /** Marks a todo as complete. */
  async completeTodo(todoId) {
    const res = await this.client.post(`/api/v1/todos/${todoId}/complete`);
    return res.data;
  }
  /** Reopens a completed todo. */
  async uncompleteTodo(todoId) {
    const res = await this.client.post(`/api/v1/todos/${todoId}/uncomplete`);
    return res.data;
  }
  /** Converts a todo to a task. */
  async convertTodoToTask(todoId) {
    const res = await this.client.post(`/api/v1/todos/${todoId}/convert-to-task`);
    return res.data;
  }
  /** Creates a reminder from a todo. */
  async createReminderFromTodo(todoId, data) {
    const res = await this.client.post(`/api/v1/todos/${todoId}/create-reminder`, data);
    return res.data;
  }
};

// src/api/scheduler-module.api.ts
var SchedulerModuleApi = class {
  constructor(client) {
    this.client = client;
  }
  /** Creates a scheduler job. */
  async createSchedulerJob(data) {
    const res = await this.client.post(`/api/v1/scheduler/jobs`, data);
    return res.data;
  }
  /** Gets scheduler jobs. */
  async getSchedulerJobs(params) {
    const res = await this.client.get(`/api/v1/scheduler/jobs`, { params });
    return res.data;
  }
  /** Gets a scheduler job by id. */
  async getSchedulerJobById(jobId) {
    const res = await this.client.get(`/api/v1/scheduler/jobs/${jobId}`);
    return res.data;
  }
  /** Updates a scheduler job. */
  async updateSchedulerJob(jobId, data) {
    const res = await this.client.put(`/api/v1/scheduler/jobs/${jobId}`, data);
    return res.data;
  }
  /** Deletes a scheduler job. */
  async deleteSchedulerJob(jobId, params) {
    const res = await this.client.delete(`/api/v1/scheduler/jobs/${jobId}`, { params });
    return res.data;
  }
  /** Reschedules a scheduler job. */
  async rescheduleSchedulerJob(jobId, data) {
    const res = await this.client.patch(`/api/v1/scheduler/jobs/${jobId}/reschedule`, data);
    return res.data;
  }
  /** Pauses a scheduler job. */
  async pauseSchedulerJob(jobId) {
    const res = await this.client.post(`/api/v1/scheduler/jobs/${jobId}/pause`);
    return res.data;
  }
  /** Resumes a scheduler job. */
  async resumeSchedulerJob(jobId) {
    const res = await this.client.post(`/api/v1/scheduler/jobs/${jobId}/resume`);
    return res.data;
  }
  /** Triggers a job immediately. */
  async triggerSchedulerJob(jobId) {
    const res = await this.client.post(`/api/v1/scheduler/jobs/${jobId}/trigger`);
    return res.data;
  }
  /** Gets executions for a job. */
  async getSchedulerJobExecutions(jobId, params) {
    const res = await this.client.get(`/api/v1/scheduler/jobs/${jobId}/executions`, { params });
    return res.data;
  }
  /** Gets execution details. */
  async getSchedulerExecutionDetails(executionId) {
    const res = await this.client.get(`/api/v1/scheduler/executions/${executionId}`);
    return res.data;
  }
  /** Cancels a running execution. */
  async cancelSchedulerExecution(executionId) {
    const res = await this.client.post(`/api/v1/scheduler/executions/${executionId}/cancel`);
    return res.data;
  }
  /** Retries a failed execution. */
  async retrySchedulerExecution(executionId) {
    const res = await this.client.post(`/api/v1/scheduler/executions/${executionId}/retry`);
    return res.data;
  }
  /** Adds exclusion rules to a job. */
  async addSchedulerJobExclusions(jobId, data) {
    const res = await this.client.post(`/api/v1/scheduler/jobs/${jobId}/exclusions`, data);
    return res.data;
  }
  /** Adds dependency rules to a job. */
  async addSchedulerJobDependencies(jobId, data) {
    const res = await this.client.post(`/api/v1/scheduler/jobs/${jobId}/dependencies`, data);
    return res.data;
  }
  /** Creates a scheduler workflow definition. */
  async createSchedulerWorkflow(data) {
    const res = await this.client.post(`/api/v1/scheduler/workflows`, data);
    return res.data;
  }
  /** Gets dashboard statistics. */
  async getSchedulerDashboardStats() {
    const res = await this.client.get(`/api/v1/scheduler/dashboard/stats`);
    return res.data;
  }
  /** Gets jobs with repeated failures. */
  async getSchedulerFailedJobs(params) {
    const res = await this.client.get(`/api/v1/scheduler/jobs/failed`, { params });
    return res.data;
  }
  /** Gets execution timeline data. */
  async getSchedulerExecutionTimeline(params) {
    const res = await this.client.get(`/api/v1/scheduler/executions/timeline`, { params });
    return res.data;
  }
  /** Pauses all jobs. */
  async pauseAllSchedulerJobs() {
    const res = await this.client.post(`/api/v1/scheduler/admin/pause-all`);
    return res.data;
  }
  /** Resumes all jobs. */
  async resumeAllSchedulerJobs() {
    const res = await this.client.post(`/api/v1/scheduler/admin/resume-all`);
    return res.data;
  }
  /** Clears old execution logs. */
  async clearSchedulerExecutionLogs(data) {
    const res = await this.client.delete(`/api/v1/scheduler/admin/clear-logs`);
    return res.data;
  }
  /** Exports job configurations. */
  async exportSchedulerJobs() {
    const res = await this.client.get(`/api/v1/scheduler/admin/export`);
    return res.data;
  }
  /** Imports job configurations. */
  async importSchedulerJobs(data) {
    const res = await this.client.post(`/api/v1/scheduler/admin/import`, data);
    return res.data;
  }
};

// src/AlphabetClient.ts
var AlphabetClient = class {
  constructor(config) {
    this.config = config;
    this.axiosInstance = import_axios.default.create({
      baseURL: config.baseURL,
      headers: { "Content-Type": "application/json" },
      ...config.axiosConfig
    });
    this.axiosInstance.interceptors.request.use(
      (req) => {
        if (this.config.accessToken) {
          req.headers = req.headers ?? {};
          req.headers["Authorization"] = `Bearer ${this.config.accessToken}`;
        }
        return req;
      }
    );
    this.axiosInstance.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error?.response?.status === 401 && this.config.onUnauthorized) {
          this.config.onUnauthorized();
        }
        return Promise.reject(error);
      }
    );
    this.adminApi = new AdminApi(this.axiosInstance);
    this.assetManagementModuleApi = new AssetManagementModuleApi(this.axiosInstance);
    this.communicationModuleApi = new CommunicationModuleApi(this.axiosInstance);
    this.identityModuleApi = new IdentityModuleApi(this.axiosInstance);
    this.leaveManagementModuleAdministrationApi = new LeaveManagementModuleAdministrationApi(this.axiosInstance);
    this.leaveManagementModuleApprovalsApi = new LeaveManagementModuleApprovalsApi(this.axiosInstance);
    this.leaveManagementModuleBalancesApi = new LeaveManagementModuleBalancesApi(this.axiosInstance);
    this.leaveManagementModuleCalendarApi = new LeaveManagementModuleCalendarApi(this.axiosInstance);
    this.leaveManagementModuleDelegationsApi = new LeaveManagementModuleDelegationsApi(this.axiosInstance);
    this.leaveManagementModuleLeaveTypesApi = new LeaveManagementModuleLeaveTypesApi(this.axiosInstance);
    this.leaveManagementModuleRequestsApi = new LeaveManagementModuleRequestsApi(this.axiosInstance);
    this.privilegeModuleApi = new PrivilegeModuleApi(this.axiosInstance);
    this.productModuleApi = new ProductModuleApi(this.axiosInstance);
    this.productivityModuleEventsApi = new ProductivityModuleEventsApi(this.axiosInstance);
    this.productivityModuleNotesApi = new ProductivityModuleNotesApi(this.axiosInstance);
    this.productivityModuleRemindersApi = new ProductivityModuleRemindersApi(this.axiosInstance);
    this.productivityModuleReportsApi = new ProductivityModuleReportsApi(this.axiosInstance);
    this.productivityModuleSmartViewsApi = new ProductivityModuleSmartViewsApi(this.axiosInstance);
    this.productivityModuleTasksApi = new ProductivityModuleTasksApi(this.axiosInstance);
    this.productivityModuleTemplatesApi = new ProductivityModuleTemplatesApi(this.axiosInstance);
    this.productivityModuleTodosApi = new ProductivityModuleTodosApi(this.axiosInstance);
    this.schedulerModuleApi = new SchedulerModuleApi(this.axiosInstance);
  }
  /** Update the bearer token (e.g. after login or token refresh) */
  setAccessToken(token) {
    this.config.accessToken = token;
  }
  /** Remove the bearer token (e.g. on logout) */
  clearAccessToken() {
    this.config.accessToken = void 0;
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlphabetClient
});
