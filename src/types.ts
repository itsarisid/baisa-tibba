// AUTO-GENERATED — do not edit manually
// Generated from: Alphabet API v1

export interface AddJobDependencyRequest {
  dependsOnJobIds?: Array<string> | null;
  condition?: string | null;
}

export interface AddJobExclusionRequest {
  excludedDates?: Array<string> | null;
  excludedDaysOfWeek?: Array<DayOfWeek> | null;
  timeRange?: TimeRangeDto;
}

export interface AddTimeEntryRequest {
  startTime?: string;
  endTime?: string;
  description?: string | null;
}

export interface Address {
  street?: string | null;
  city?: string | null;
  state?: string | null;
  postalCode?: string | null;
  country?: string | null;
}

export interface AdjustLeaveBalanceRequest {
  userId?: string;
  leaveTypeId?: string;
  year?: number;
  adjustment?: number;
  reason?: string | null;
}

export interface AdminCreateUserRequest {
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  role?: string | null;
}

export interface AdminLockUserRequest {
  durationMinutes?: number;
}

export interface AdminResetPasswordRequest {
  newPassword?: string | null;
}

export interface AdminUserDetailDto {
  userId?: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailConfirmed?: boolean;
  isLockedOut?: boolean;
  lockoutEnd?: string | null;
  isTwoFactorEnabled?: boolean;
  lastLoginAt?: string | null;
  createdAt?: string;
  roles?: Array<string> | null;
}

export interface ApprovalChainApplicability {
  leaveTypeIds?: Array<string> | null;
  departmentIds?: Array<string> | null;
  employeeLevels?: Array<string> | null;
  geographyIds?: Array<string> | null;
  minDays?: number;
  maxDays?: number | null;
}

export interface ApprovalDecisionRequest {
  comment?: string | null;
  attachments?: Array<string> | null;
  level?: number | null;
  notifyApplicant?: boolean;
  applyPartialApproval?: boolean;
  approvedDays?: number | null;
}

export interface ApprovalLevelDefinition {
  level?: number;
  name?: string | null;
  approverType?: LeaveApproverType;
  approverValue?: string | null;
  requiredApprovers?: number;
  timeoutHours?: number;
  escalationEnabled?: boolean;
  escalationAfterHours?: number | null;
  escalationToRole?: string | null;
  autoApproveOnTimeout?: boolean;
  canDelegate?: boolean;
  conditions?: Record<string, string> | null;
}

export type AssetAssignmentType = 1 | 2 | 3 | 4;

export type AssetCondition = 1 | 2 | 3 | 4 | 5;

export type AssetLocationType = 1 | 2 | 3 | 4 | 5;

export type AssetMaintenancePriority = 1 | 2 | 3 | 4;

export type AssetMaintenanceType = 1 | 2 | 3;

export type AssetStatus = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface AssignAssetRequest {
  assignedToUserId?: string;
  expectedReturnDate?: string | null;
  assignmentType?: AssetAssignmentType;
  purpose?: string | null;
  conditionAtAssignment?: AssetCondition;
  notes?: string | null;
}

export interface AssignPolicyRequest {
  policyId?: string;
  expiresAt?: string | null;
}

export interface AssignRolePrivilegesRequest {
  privilegeIds?: Array<string> | null;
  expiresAt?: string | null;
}

export interface AssignUserPrivilegeRequest {
  privilegeId?: string | null;
  effect?: PrivilegeEffect;
  expiresAt?: string | null;
  reason?: string | null;
}

export interface AuditLogDto {
  id?: string;
  userId?: string | null;
  action?: string | null;
  success?: boolean;
  message?: string | null;
  ipAddress?: string | null;
  userAgent?: string | null;
  timestamp?: string;
}

export interface AuthResponseDto {
  accessToken?: string | null;
  refreshToken?: string | null;
  expiresIn?: number;
  tokenType?: string | null;
  requiresTwoFactor?: boolean;
  mfaToken?: string | null;
  message?: string | null;
}

export interface AuthenticatorSetupDto {
  sharedKey?: string | null;
  authenticatorUri?: string | null;
  manualEntryKey?: string | null;
}

export interface AvailabilityDateRange {
  start?: string;
  end?: string;
}

export interface BatchApprovalRequest {
  requestIds?: Array<string> | null;
  action?: string | null;
  comment?: string | null;
}

export interface BatchPrivilegeCheckRequest {
  privileges?: Array<string> | null;
}

export interface BulkRolePrivilegeRequest {
  roleIds?: Array<string> | null;
  privilegeIds?: Array<string> | null;
  operation?: string | null;
  expiresAt?: string | null;
}

export interface CancelLeaveRequest {
  reason?: string | null;
}

export interface ChangePasswordCommand {
  currentPassword?: string | null;
  newPassword?: string | null;
  confirmPassword?: string | null;
}

export interface CheckAvailabilityRequest {
  userIds?: Array<string> | null;
  dateRange?: AvailabilityDateRange;
  durationMinutes?: number;
}

export interface ClearExecutionLogsRequest {
  olderThanDays?: number;
}

export interface CommunicationBatchResponseDto {
  subject?: string | null;
  totalChannelsRequested?: number;
  successfulChannels?: number;
  failedChannels?: number;
  results?: Array<CommunicationDeliveryResultDto> | null;
}

export interface CommunicationConfigurationDto {
  enabledChannels?: Array<string> | null;
  defaultChannel?: string | null;
  detailedLoggingEnabled?: boolean;
}

export interface CommunicationDeliveryResultDto {
  channel?: string | null;
  isSuccess?: boolean;
  message?: string | null;
  processedAt?: string;
}

export interface CompleteMaintenanceRequest {
  completionDate?: string;
  actualCost?: number;
  notes?: string | null;
  nextMaintenanceDueDate?: string | null;
}

export interface ConfirmEmailCommand {
  userId?: string;
  token?: string | null;
}

export interface Coordinates {
  latitude?: number;
  longitude?: number;
}

export interface CreateAccrualRuleRequest {
  leaveTypeId?: string;
  accrualMethod?: LeaveAccrualMethod;
  accrualRate?: number;
  maxAccrual?: number;
  tenureRulesJson?: string | null;
}

export interface CreateApprovalChainRequest {
  name?: string | null;
  code?: string | null;
  description?: string | null;
  applicableTo?: ApprovalChainApplicability;
  approvalLevels?: Array<ApprovalLevelDefinition> | null;
  finalApprovalLevel?: number;
  allowSkipLevels?: boolean;
  parallelApproval?: boolean;
  isActive?: boolean;
}

export interface CreateAssetCategoryRequest {
  name?: string | null;
  description?: string | null;
  parentCategoryId?: string | null;
  customFieldsSchema?: Record<string, string> | null;
  depreciationRate?: number | null;
  defaultLocationId?: string | null;
}

export interface CreateAssetRequest {
  assetTag?: string | null;
  name?: string | null;
  description?: string | null;
  categoryId?: string;
  subcategory?: string | null;
  manufacturer?: string | null;
  model?: string | null;
  serialNumber?: string | null;
  purchaseDate?: string | null;
  warrantyExpiry?: string | null;
  cost?: number;
  currency?: string | null;
  status?: AssetStatus;
  condition?: AssetCondition;
  locationId?: string;
  supplierId?: string | null;
  customFields?: Record<string, string> | null;
  images?: Array<string> | null;
  documents?: Array<string> | null;
}

export interface CreateBlackoutPeriodRequest {
  startDate?: string;
  endDate?: string;
  reason?: string | null;
  applicableTo?: Array<string> | null;
}

export interface CreateDelegationRequest {
  delegatorUserId?: string;
  delegateToUserId?: string;
  delegationType?: LeaveDelegationType;
  permission?: LeaveDelegationPermission;
  applicableLeaveTypes?: Array<string> | null;
  applicableApprovalLevels?: Array<number> | null;
  applicableDepartments?: Array<string> | null;
  applicableEmployees?: Array<string> | null;
  startDate?: string;
  endDate?: string | null;
  reason?: string | null;
  isActive?: boolean;
}

export interface CreateEventRequest {
  title?: string | null;
  description?: string | null;
  location?: string | null;
  isAllDay?: boolean;
  startTime?: string;
  endTime?: string;
  timezone?: string | null;
  recurrence?: RecurrencePattern;
  attendees?: Array<string> | null;
  visibility?: EventVisibility;
  color?: string | null;
  reminderMinutesBefore?: Array<number> | null;
  conferenceLink?: string | null;
}

export interface CreateLeaveTypeRequest {
  name?: string | null;
  code?: string | null;
  description?: string | null;
  color?: string | null;
  icon?: string | null;
  isPaid?: boolean;
  defaultDaysPerYear?: number;
  maxConsecutiveDays?: number | null;
  minDaysPerRequest?: number;
  maxDaysPerRequest?: number | null;
  requiresApproval?: boolean;
  approvalChainId?: string | null;
  carryForwardEnabled?: boolean;
  maxCarryForwardDays?: number;
  carryForwardExpiryMonths?: number;
  encashmentEnabled?: boolean;
  encashmentRate?: number | null;
  prorationEnabled?: boolean;
  eligibilityRules?: LeaveEligibilityRules;
  blackoutDates?: Array<LeaveBlackoutDate> | null;
  requiresAttachment?: boolean;
  allowedAttachmentTypes?: Array<string> | null;
  autoApproveRules?: LeaveAutoApproveRules;
  isActive?: boolean;
}

export interface CreateLocationRequest {
  name?: string | null;
  code?: string | null;
  type?: AssetLocationType;
  address?: Address;
  parentLocationId?: string | null;
  isActive?: boolean;
  coordinates?: Coordinates;
  contactPerson?: string | null;
  contactPhone?: string | null;
}

export interface CreateNoteRequest {
  title?: string | null;
  content?: string | null;
  format?: NoteFormat;
  category?: string | null;
  tags?: Array<string> | null;
  color?: string | null;
  isPinned?: boolean;
  isFavorite?: boolean;
  notebookId?: string | null;
  collaborators?: Array<string> | null;
}

export interface CreateNotebookRequest {
  name?: string | null;
  description?: string | null;
  color?: string | null;
  parentNotebookId?: string | null;
}

export interface CreatePrivilegeAccessRequest {
  privilegeId?: string | null;
  reason?: string | null;
  requestedDurationDays?: number;
  approverEmail?: string | null;
}

export interface CreatePrivilegeCategoryRequest {
  name?: string | null;
  description?: string | null;
  parentCategoryId?: string | null;
  sortOrder?: number;
}

export interface CreatePrivilegePolicyRequest {
  name?: string | null;
  description?: string | null;
  privileges?: Array<string> | null;
  condition?: PrivilegePolicyCondition;
}

export interface CreatePrivilegeRequest {
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  category?: string | null;
  resourceType?: string | null;
  actions?: Array<string> | null;
  isGlobal?: boolean;
  dependsOn?: Array<string> | null;
  attributes?: Record<string, string> | null;
}

export interface CreateProductRequest {
  name?: string | null;
  description?: string | null;
  price?: number;
  currency?: string | null;
}

export interface CreatePublicHolidayRequest {
  name?: string | null;
  date?: string;
  country?: string | null;
  state?: string | null;
  isPaid?: boolean;
  recurring?: boolean;
}

export interface CreateReminderFromEntityRequest {
  title?: string | null;
  description?: string | null;
  reminderTime?: string;
}

export interface CreateReminderRequest {
  title?: string | null;
  description?: string | null;
  reminderTime?: string;
  reminderType?: ReminderType;
  repeatInterval?: number | null;
  repeatCount?: number | null;
  endDate?: string | null;
  soundEnabled?: boolean;
  vibrationEnabled?: boolean;
  snoozeEnabled?: boolean;
  snoozeMinutes?: number | null;
  linkedEntityType?: string | null;
  linkedEntityId?: string | null;
  notificationMethods?: Array<string> | null;
  recurrencePattern?: RecurrencePattern;
}

export interface CreateSchedulerJobRequest {
  name?: string | null;
  description?: string | null;
  jobType?: JobType;
  scheduleType?: ScheduleType;
  scheduleExpression?: string | null;
  intervalSeconds?: number | null;
  runAt?: string | null;
  jobConfiguration?: JobConfigurationDto;
  retryPolicy?: RetryPolicyDto;
  timeoutSeconds?: number | null;
  timezone?: string | null;
  isEnabled?: boolean;
  tags?: Array<string> | null;
  createdBy?: string | null;
}

export interface CreateSmartListRequest {
  name?: string | null;
  entityType?: string | null;
  criteria?: unknown | null;
  isShared?: boolean;
}

export interface CreateTaskRequest {
  title?: string | null;
  description?: string | null;
  priority?: Priority;
  status?: TaskStatus;
  dueDate?: string | null;
  estimatedHours?: number | null;
  assigneeId?: string | null;
  reviewerId?: string | null;
  parentTaskId?: string | null;
  projectId?: string | null;
  dependencies?: Array<string> | null;
  checklist?: Array<TodoChecklistItem> | null;
}

export interface CreateTemplateRequest {
  name?: string | null;
  entityType?: string | null;
  description?: string | null;
  template?: unknown | null;
}

export interface CreateTodoRequest {
  title?: string | null;
  description?: string | null;
  priority?: Priority;
  dueDate?: string | null;
  reminderMinutesBefore?: number | null;
  category?: string | null;
  tags?: Array<string> | null;
  isRecurring?: boolean;
  recurrencePattern?: RecurrencePattern;
  assignedTo?: string | null;
}

export interface CreateWorkflowDefinitionRequest {
  name?: string | null;
  description?: string | null;
  version?: number;
  steps?: Array<CreateWorkflowDefinitionStepRequest> | null;
}

export interface CreateWorkflowDefinitionStepRequest {
  name?: string | null;
  order?: number;
  assignedToRole?: string | null;
  requiredApprovals?: number;
  timeoutHours?: number;
  actions?: Array<string> | null;
}

export interface CreateWorkflowJobRequest {
  jobId?: string;
  dependsOn?: Array<string> | null;
  onFailure?: string | null;
}

export interface CreateWorkflowRequest {
  name?: string | null;
  jobs?: Array<CreateWorkflowJobRequest> | null;
}

export interface CurrentUserDto {
  userId?: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailConfirmed?: boolean;
  isAuthenticated?: boolean;
  authenticationType?: string | null;
  roles?: Array<string> | null;
}

export interface DashboardStatsDto {
  totalJobs?: number;
  activeJobs?: number;
  pausedJobs?: number;
  failedJobs?: number;
  executionsToday?: number;
  successRate?: number;
  averageDurationSeconds?: number;
  upcomingExecutions?: Array<UpcomingExecutionDto> | null;
}

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface DecidePrivilegeRequest {
  notes?: string | null;
}

export interface EnableOtpCommand {
  deliveryMethod?: TwoFactorMethod;
  destination?: string | null;
}

export type EventVisibility = 0 | 1 | 2;

export type ExecutionStatus = 1 | 2 | 3 | 4 | 5 | 6;

export interface ForgotPasswordCommand {
  email?: string | null;
}

export interface GenerateAuditReportRequest {
  start?: string;
  end?: string;
  format?: string | null;
  includeDeleted?: boolean;
}

export interface ImportSchedulerJobsRequest {
  jsonPayload?: string | null;
}

export interface InitializeLeaveBalanceRequest {
  userId?: string;
  year?: number;
  balances?: Array<InitializeLeaveBalanceRequestItem> | null;
}

export interface InitializeLeaveBalanceRequestItem {
  leaveTypeId?: string;
  allocated?: number;
  remaining?: number;
  carryForward?: number;
}

export interface JobConfigurationDto {
  url?: string | null;
  method?: string | null;
  headers?: Record<string, string> | null;
  body?: string | null;
  timeoutSeconds?: number | null;
  retryOnStatusCodes?: Array<number> | null;
  successStatusCodes?: Array<number> | null;
  storedProcedureName?: string | null;
  parameters?: Record<string, string> | null;
  commandTimeoutSeconds?: number | null;
  databaseConnectionStringName?: string | null;
  handlerType?: string | null;
  methodName?: string | null;
  operation?: string | null;
  sourcePath?: string | null;
  destinationPath?: string | null;
  deleteAfterDays?: number | null;
  olderThanHours?: number | null;
  deleteEmptyDirectories?: boolean | null;
  archivePath?: string | null;
  compression?: string | null;
}

export interface JobDto {
  id?: string;
  name?: string | null;
  description?: string | null;
  jobType?: JobType;
  scheduleType?: ScheduleType;
  scheduleExpression?: string | null;
  intervalSeconds?: number | null;
  runAt?: string | null;
  jobConfiguration?: JobConfigurationDto;
  retryPolicy?: RetryPolicyDto;
  timezone?: string | null;
  isEnabled?: boolean;
  isPaused?: boolean;
  isDeleted?: boolean;
  createdBy?: string | null;
  lastModifiedBy?: string | null;
  tags?: Array<string> | null;
  schedulerJobId?: string | null;
  currentStatus?: string | null;
  createdAt?: string;
  updatedAt?: string;
  lastExecutedAt?: string | null;
  lastExecutionStatus?: ExecutionStatus;
  consecutiveFailures?: number;
}

export interface JobDtoPagedResponseDto {
  items?: Array<JobDto> | null;
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
}

export interface JobExecutionDto {
  id?: string;
  jobId?: string;
  triggeredBy?: string | null;
  startedAt?: string;
  endedAt?: string | null;
  status?: ExecutionStatus;
  durationMs?: number | null;
  output?: string | null;
  errorMessage?: string | null;
  retryCount?: number;
  retryParentId?: string | null;
  createdAt?: string;
}

export interface JobExecutionDtoPagedResponseDto {
  items?: Array<JobExecutionDto> | null;
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
}

export type JobType = 1 | 2 | 3 | 4;

export type LeaveAccrualMethod = 1 | 2 | 3 | 4;

export type LeaveApproverType = 1 | 2 | 3 | 4 | 5 | 6;

export interface LeaveAutoApproveRules {
  enabled?: boolean;
  maxDays?: number;
  leadTimeDays?: number;
}

export interface LeaveBlackoutDate {
  start?: string;
  end?: string;
  reason?: string | null;
}

export type LeaveDayPart = 1 | 2 | 3;

export type LeaveDelegationPermission = 1 | 2 | 3;

export type LeaveDelegationType = 1 | 2 | 3;

export interface LeaveEligibilityRules {
  minEmploymentDays?: number;
  probationPassed?: boolean;
  applicableRoles?: Array<string> | null;
  excludedRoles?: Array<string> | null;
}

export interface LeavePartialDays {
  startDatePart?: LeaveDayPart;
  endDatePart?: LeaveDayPart;
}

export interface LeaveSuggestedDateRange {
  start?: string;
  end?: string;
}

export interface LoginRequest {
  email?: string | null;
  password?: string | null;
  useCookies?: boolean;
}

export interface LogoutRequest {
  refreshToken?: string | null;
}

export interface MfaLoginRequest {
  mfaToken?: string | null;
  verificationCode?: string | null;
  useCookies?: boolean;
}

export interface ModifyLeaveRequest {
  startDate?: string;
  endDate?: string;
  partialDays?: LeavePartialDays;
  reason?: string | null;
  attachmentIds?: Array<string> | null;
  contactNumber?: string | null;
  alternateArrangements?: string | null;
}

export interface MoveAssetRequest {
  newLocationId?: string;
  reason?: string | null;
}

export interface MovePrivilegeCategoryRequest {
  categoryId?: string;
}

export type NoteFormat = 0 | 1 | 2;

export type Priority = 1 | 2 | 3 | 4;

export type PrivilegeAction = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface PrivilegeAnalyticsDto {
  mostUsedPrivileges?: Array<PrivilegeUsageMetricDto> | null;
  unusedPrivileges?: Array<string> | null;
  privilegeAssignmentTrend?: Array<PrivilegeAssignmentTrendDto> | null;
}

export interface PrivilegeAssignmentDto {
  privilegeId?: string;
  privilegeName?: string | null;
  displayName?: string | null;
  assignmentSource?: string | null;
  grantedAt?: string;
  grantedBy?: string | null;
  expiresAt?: string | null;
  isActive?: boolean;
}

export interface PrivilegeAssignmentTrendDto {
  date?: string;
  assignments?: number;
}

export interface PrivilegeAuditLogDto {
  id?: string;
  userId?: string | null;
  privilegeId?: string | null;
  action?: string | null;
  source?: string | null;
  performedBy?: string | null;
  performedAt?: string;
  ipAddress?: string | null;
  metadata?: Record<string, string> | null;
}

export interface PrivilegeCategoryDto {
  id?: string;
  name?: string | null;
  description?: string | null;
  parentCategoryId?: string | null;
  sortOrder?: number;
  children?: Array<PrivilegeCategoryDto> | null;
}

export interface PrivilegeCheckResultDto {
  hasPrivilege?: boolean;
  source?: string | null;
  expiresAt?: string | null;
  reason?: string | null;
}

export interface PrivilegeDto {
  id?: string;
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  categoryId?: string | null;
  categoryName?: string | null;
  resourceType?: string | null;
  actions?: Array<string> | null;
  isGlobal?: boolean;
  isDeprecated?: boolean;
  dependsOn?: Array<string> | null;
  attributes?: Record<string, string> | null;
  createdAt?: string;
  createdBy?: string | null;
  updatedAt?: string;
}

export interface PrivilegeDtoPagedResponseDto {
  items?: Array<PrivilegeDto> | null;
  totalCount?: number;
  pageNumber?: number;
  pageSize?: number;
}

export type PrivilegeEffect = 1 | 2;

export type PrivilegePolicyCondition = 1 | 2;

export interface PrivilegeUsageMetricDto {
  privilege?: string | null;
  usageCount?: number;
  uniqueUsers?: number;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
}

export interface ProductResponseDto {
  id?: string;
  name?: string | null;
  description?: string | null;
  price?: number;
  currency?: string | null;
  status?: string | null;
  createdAt?: string;
}

export interface RecoveryCodesDto {
  codes?: Array<string> | null;
}

export interface RecurrencePattern {
  pattern?: string | null;
  interval?: number;
  daysOfWeek?: Array<string> | null;
  endDate?: string | null;
  maxOccurrences?: number | null;
  customExpression?: string | null;
}

export interface RefreshTokenRequest {
  refreshToken?: string | null;
  useCookies?: boolean;
}

export interface RegisterCommand {
  email?: string | null;
  password?: string | null;
  confirmPassword?: string | null;
  firstName?: string | null;
  lastName?: string | null;
}

export interface RejectLeaveRequest {
  reason?: string | null;
  suggestedDates?: Array<LeaveSuggestedDateRange> | null;
}

export type ReminderStatus = 0 | 1 | 2 | 3 | 4;

export type ReminderType = 0 | 1 | 2 | 3 | 4 | 5;

export interface RequestChangesRequest {
  comment?: string | null;
}

export interface RescheduleSchedulerJobRequest {
  scheduleType?: ScheduleType;
  scheduleExpression?: string | null;
  intervalSeconds?: number | null;
  runAt?: string | null;
  effectiveFrom?: string | null;
}

export interface ResetPasswordCommand {
  email?: string | null;
  token?: string | null;
  newPassword?: string | null;
  confirmPassword?: string | null;
}

export interface RespondToEventRequest {
  response?: string | null;
}

export interface RetireAssetRequest {
  status?: AssetStatus;
  reason?: string | null;
}

export type RetryBackoffType = 1 | 2 | 3;

export interface RetryPolicyDto {
  maxRetryAttempts?: number;
  retryDelaySeconds?: number;
  retryBackoffType?: RetryBackoffType;
  retryOnExceptions?: Array<string> | null;
  shouldRetryHttpStatusCodes?: Array<number> | null;
}

export interface ScheduleMaintenanceRequest {
  maintenanceType?: AssetMaintenanceType;
  scheduledDate?: string;
  description?: string | null;
  assignedToVendor?: string | null;
  estimatedCost?: number;
  priority?: AssetMaintenancePriority;
}

export type ScheduleType = 1 | 2 | 3;

export interface SendCommunicationCommand {
  subject?: string | null;
  body?: string | null;
  channels?: Array<string> | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  userId?: string | null;
  pushToken?: string | null;
  webhookUrl?: string | null;
  isHtml?: boolean;
}

export interface ShareNoteRequest {
  email?: string | null;
  permission?: string | null;
}

export interface SnoozeReminderRequest {
  minutes?: number;
}

export interface StartWorkflowRequest {
  workflowDefinitionId?: string;
  context?: Record<string, string> | null;
}

export interface StockAdjustmentRequest {
  assetId?: string;
  locationId?: string;
  adjustmentType?: StockAdjustmentType;
  quantity?: number;
  reason?: string | null;
  referenceNumber?: string | null;
  minimumThreshold?: number;
}

export type StockAdjustmentType = 1 | 2 | 3;

export interface StockTakeCountedItemRequest {
  assetId?: string;
  countedQuantity?: number;
  expectedQuantity?: number;
  discrepancy?: number;
}

export interface StockTakeRequest {
  locationId?: string;
  countedItems?: Array<StockTakeCountedItemRequest> | null;
}

export interface SubmitLeaveRequest {
  leaveTypeId?: string;
  startDate?: string;
  endDate?: string;
  partialDays?: LeavePartialDays;
  reason?: string | null;
  attachmentIds?: Array<string> | null;
  contactNumber?: string | null;
  alternateArrangements?: string | null;
  applyToAllDays?: boolean;
  isHalfDay?: boolean;
}

export interface SuggestMeetingTimesRequest {
  attendees?: Array<string> | null;
  durationMinutes?: number;
  dateRange?: AvailabilityDateRange;
  workingHours?: WorkingHoursRequest;
}

export type TaskStatus = 0 | 1 | 2 | 3 | 4;

export interface TimeRangeDto {
  start?: string | null;
  end?: string | null;
}

export interface TimelinePointDto {
  bucket?: string;
  successCount?: number;
  failedCount?: number;
  runningCount?: number;
}

export interface TodoChecklistItem {
  text?: string | null;
  completed?: boolean;
}

export type TodoStatus = 0 | 1 | 2 | 3 | 4;

export interface TransferAssetRequest {
  fromUserId?: string;
  toUserId?: string;
  reason?: string | null;
  transferDate?: string;
  expectedReturnDate?: string | null;
}

export type TwoFactorMethod = 0 | 1 | 2 | 3;

export interface UnassignAssetRequest {
  returnedByUserId?: string;
  receivedByUserId?: string;
  conditionOnReturn?: AssetCondition;
  damageNotes?: string | null;
  missingItems?: Array<string> | null;
  actualReturnDate?: string;
}

export interface UpcomingExecutionDto {
  jobId?: string;
  jobName?: string | null;
  nextRun?: string | null;
}

export interface UpdateAssetRequest {
  name?: string | null;
  description?: string | null;
  categoryId?: string;
  subcategory?: string | null;
  manufacturer?: string | null;
  model?: string | null;
  serialNumber?: string | null;
  purchaseDate?: string | null;
  warrantyExpiry?: string | null;
  cost?: number;
  currency?: string | null;
  condition?: AssetCondition;
  locationId?: string;
  supplierId?: string | null;
  customFields?: Record<string, string> | null;
  images?: Array<string> | null;
  documents?: Array<string> | null;
}

export interface UpdateLeaveTypeRequest {
  name?: string | null;
  description?: string | null;
  color?: string | null;
  icon?: string | null;
  isPaid?: boolean;
  defaultDaysPerYear?: number;
  maxConsecutiveDays?: number | null;
  minDaysPerRequest?: number;
  maxDaysPerRequest?: number | null;
  requiresApproval?: boolean;
  approvalChainId?: string | null;
  carryForwardEnabled?: boolean;
  maxCarryForwardDays?: number;
  carryForwardExpiryMonths?: number;
  encashmentEnabled?: boolean;
  encashmentRate?: number | null;
  prorationEnabled?: boolean;
  eligibilityRules?: LeaveEligibilityRules;
  blackoutDates?: Array<LeaveBlackoutDate> | null;
  requiresAttachment?: boolean;
  allowedAttachmentTypes?: Array<string> | null;
  autoApproveRules?: LeaveAutoApproveRules;
  isActive?: boolean;
}

export interface UpdateNoteRequest {
  title?: string | null;
  content?: string | null;
  format?: NoteFormat;
  category?: string | null;
  color?: string | null;
  isPinned?: boolean;
  isFavorite?: boolean;
  notebookId?: string | null;
}

export interface UpdatePrivilegeRequest {
  displayName?: string | null;
  description?: string | null;
  category?: string | null;
  resourceType?: string | null;
  actions?: Array<string> | null;
  dependsOn?: Array<string> | null;
  attributes?: Record<string, string> | null;
}

export interface UpdateSchedulerJobRequest {
  name?: string | null;
  description?: string | null;
  jobType?: JobType;
  scheduleType?: ScheduleType;
  scheduleExpression?: string | null;
  intervalSeconds?: number | null;
  runAt?: string | null;
  jobConfiguration?: JobConfigurationDto;
  retryPolicy?: RetryPolicyDto;
  timeoutSeconds?: number | null;
  timezone?: string | null;
  isEnabled?: boolean | null;
  tags?: Array<string> | null;
}

export interface UpdateTaskStatusRequest {
  status?: TaskStatus;
  comment?: string | null;
}

export interface UpdateTodoRequest {
  title?: string | null;
  description?: string | null;
  priority?: Priority;
  dueDate?: string | null;
  reminderMinutesBefore?: number | null;
  category?: string | null;
  tags?: Array<string> | null;
  isRecurring?: boolean;
  recurrencePattern?: RecurrencePattern;
  assignedTo?: string | null;
}

export interface UserDto {
  userId?: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  emailConfirmed?: boolean;
}

export interface UserEffectivePrivilegeDto {
  privilegeName?: string | null;
  isGranted?: boolean;
  source?: string | null;
  expiresAt?: string | null;
  reason?: string | null;
}

export interface VerifyAuthenticatorCommand {
  verificationCode?: string | null;
}

export interface VerifyOtpCommand {
  verificationCode?: string | null;
  destination?: string | null;
}

export interface WorkflowStepActionRequest {
  action?: string | null;
  comment?: string | null;
}

export interface WorkingHoursRequest {
  start?: string | null;
  end?: string | null;
  timezone?: string | null;
}
