# Alphabet API SDK

Auto-generated TypeScript SDK for **Alphabet API v1** — wraps all 188 endpoints across 22 modules with full type safety and a single axios-based client.

---

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Available Modules](#available-modules)
- [Usage Examples](#usage-examples)
- [Extending the SDK](#extending-the-sdk)
  - [Adding an endpoint to an existing module](#adding-an-endpoint-to-an-existing-module)
  - [Adding a brand-new module](#adding-a-brand-new-module)
  - [Adding new types](#adding-new-types)
- [Publishing to npm](#publishing-to-npm)
- [Project Structure](#project-structure)
- [Building from Source](#building-from-source)

---

## Installation

```bash
npm install alphabet-sdk axios
# or
yarn add alphabet-sdk axios
```

---

## Quick Start

```typescript
import { AlphabetClient } from 'alphabet-sdk';

const client = new AlphabetClient({
  baseURL: 'https://your-api.example.com',
});

// 1. Login
const auth = await client.identityModuleApi.login({
  email: 'user@example.com',
  password: 'secret',
});
client.setAccessToken(auth.accessToken!);

// 2. Call any module — fully typed
const users  = await client.adminApi.adminGetUsers();
const assets = await client.assetManagementModuleApi.getAssets();
```

---

## Configuration

```typescript
const client = new AlphabetClient({
  // Required: your API base URL
  baseURL: 'https://your-api.example.com',

  // Optional: pre-load a stored token on app start
  accessToken: localStorage.getItem('token') ?? undefined,

  // Optional: called automatically on any 401 response
  onUnauthorized: () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  },

  // Optional: any extra axios config (timeout, headers, etc.)
  axiosConfig: {
    timeout: 10_000,
  },
});

// Update token after login / token refresh
client.setAccessToken(token);

// Remove token on logout
client.clearAccessToken();
```

---

## Available Modules

| Client property | API tag | # Methods |
|---|---|---|
| `client.adminApi` | Admin | 9 |
| `client.assetManagementModuleApi` | Asset Management Module | 34 |
| `client.communicationModuleApi` | Communication Module | 2 |
| `client.identityModuleApi` | Identity Module | 16 |
| `client.leaveManagementModuleAdministrationApi` | Leave Management – Administration | 8 |
| `client.leaveManagementModuleApprovalsApi` | Leave Management – Approvals | 6 |
| `client.leaveManagementModuleBalancesApi` | Leave Management – Balances | 4 |
| `client.leaveManagementModuleCalendarApi` | Leave Management – Calendar | 2 |
| `client.leaveManagementModuleDelegationsApi` | Leave Management – Delegations | 3 |
| `client.leaveManagementModuleLeaveTypesApi` | Leave Management – Leave Types | 4 |
| `client.leaveManagementModuleRequestsApi` | Leave Management – Requests | 6 |
| `client.privilegeModuleApi` | Privilege Module | 28 |
| `client.productModuleApi` | Product Module | 2 |
| `client.productivityModuleEventsApi` | Productivity – Events | 6 |
| `client.productivityModuleNotesApi` | Productivity – Notes | 9 |
| `client.productivityModuleRemindersApi` | Productivity – Reminders | 5 |
| `client.productivityModuleReportsApi` | Productivity – Reports | 1 |
| `client.productivityModuleSmartViewsApi` | Productivity – Smart Views | 3 |
| `client.productivityModuleTasksApi` | Productivity – Tasks | 5 |
| `client.productivityModuleTemplatesApi` | Productivity – Templates | 2 |
| `client.productivityModuleTodosApi` | Productivity – Todos | 9 |
| `client.schedulerModuleApi` | Scheduler Module | 24 |

---

## Usage Examples

### Identity / Auth

```typescript
// Register
await client.identityModuleApi.register({ email, password, firstName, lastName });

// Login
const auth = await client.identityModuleApi.login({ email, password });
client.setAccessToken(auth.accessToken!);

// Refresh token
const refreshed = await client.identityModuleApi.refreshToken({
  refreshToken: auth.refreshToken!,
});
client.setAccessToken(refreshed.accessToken!);

// Logout
await client.identityModuleApi.logout();
client.clearAccessToken();
```

### Assets

```typescript
const assets = await client.assetManagementModuleApi.getAssets({ take: '20', skip: '0' });
const asset  = await client.assetManagementModuleApi.getAssetById(assetId);

await client.assetManagementModuleApi.assignAsset(assetId, {
  userId,
  assignmentType: 1,
});
```

### Leave Management

```typescript
// Submit a request
await client.leaveManagementModuleRequestsApi.createLeaveRequest({
  leaveTypeId: 'uuid-here',
  startDate: '2024-07-01',
  endDate: '2024-07-05',
});

// Approve it
await client.leaveManagementModuleApprovalsApi.approveLeaveRequest(requestId, {
  comment: 'Approved',
});
```

### Tasks & Productivity

```typescript
const tasks = await client.productivityModuleTasksApi.getTasks();

await client.productivityModuleTasksApi.createTask({
  title: 'My Task',
  dueDate: '2024-12-31',
});
```

### Scheduler

```typescript
const jobs = await client.schedulerModuleApi.getJobs();
await client.schedulerModuleApi.triggerJob(jobId);
```

---

## Extending the SDK

All source files live in `src/`. After any change, run `npm run build` to regenerate `dist/`.

### Adding an endpoint to an existing module

Open the relevant file in `src/api/`. Each file maps to one API tag. Add a new `async` method following the same pattern as the existing ones.

**Example — adding `getAdminStats` to `src/api/admin.api.ts`:**

```typescript
// src/api/admin.api.ts

/** Get admin dashboard statistics */
async getAdminStats(params?: { from?: string; to?: string }): Promise<T.AdminStatsDto> {
  const res = await this.client.get<T.AdminStatsDto>(`/api/v1/admin/stats`, { params });
  return res.data;
}
```

**Method patterns by HTTP verb:**

```typescript
// GET with optional query params
async listItems(params?: { take?: number; skip?: number }): Promise<T.ItemDto[]> {
  const res = await this.client.get<T.ItemDto[]>(`/api/v1/items`, { params });
  return res.data;
}

// GET with a path param
async getItemById(itemId: string): Promise<T.ItemDto> {
  const res = await this.client.get<T.ItemDto>(`/api/v1/items/${itemId}`);
  return res.data;
}

// POST with a request body
async createItem(data: T.CreateItemRequest): Promise<T.ItemDto> {
  const res = await this.client.post<T.ItemDto>(`/api/v1/items`, data);
  return res.data;
}

// PUT / PATCH
async updateItem(itemId: string, data: T.UpdateItemRequest): Promise<T.ItemDto> {
  const res = await this.client.put<T.ItemDto>(`/api/v1/items/${itemId}`, data);
  return res.data;
}

// DELETE (returns void when no response body)
async deleteItem(itemId: string): Promise<void> {
  await this.client.delete(`/api/v1/items/${itemId}`);
}
```

Then rebuild:

```bash
npm run build
```

---

### Adding a brand-new module

Follow these three steps:

**Step 1 — Create the API class file**

Create `src/api/my-new-module.api.ts`:

```typescript
// src/api/my-new-module.api.ts
import type { AxiosInstance } from 'axios';
import * as T from '../types';

export class MyNewModuleApi {
  constructor(private readonly client: AxiosInstance) {}

  /** List all items */
  async getItems(params?: { take?: number; skip?: number }): Promise<T.MyItemDto[]> {
    const res = await this.client.get<T.MyItemDto[]>(`/api/v1/my-module/items`, { params });
    return res.data;
  }

  /** Get a single item by ID */
  async getItemById(itemId: string): Promise<T.MyItemDto> {
    const res = await this.client.get<T.MyItemDto>(`/api/v1/my-module/items/${itemId}`);
    return res.data;
  }

  /** Create a new item */
  async createItem(data: T.CreateMyItemRequest): Promise<T.MyItemDto> {
    const res = await this.client.post<T.MyItemDto>(`/api/v1/my-module/items`, data);
    return res.data;
  }

  /** Update an existing item */
  async updateItem(itemId: string, data: T.UpdateMyItemRequest): Promise<T.MyItemDto> {
    const res = await this.client.put<T.MyItemDto>(`/api/v1/my-module/items/${itemId}`, data);
    return res.data;
  }

  /** Delete an item */
  async deleteItem(itemId: string): Promise<void> {
    await this.client.delete(`/api/v1/my-module/items/${itemId}`);
  }
}
```

**Step 2 — Register the module in `AlphabetClient`**

Open `src/AlphabetClient.ts` and make three additions:

```typescript
// 1. Add the import at the top
import { MyNewModuleApi } from './api/my-new-module.api';

export class AlphabetClient {
  // 2. Declare the property
  readonly myNewModuleApi: MyNewModuleApi;

  constructor(private config: AlphabetClientConfig) {
    // ... existing code ...

    // 3. Initialise in the constructor
    this.myNewModuleApi = new MyNewModuleApi(this.axiosInstance);
  }
}
```

**Step 3 — Rebuild**

```bash
npm run build
```

The new module is immediately available:

```typescript
const items = await client.myNewModuleApi.getItems({ take: 10 });
```

---

### Adding new types

All request/response shapes live in `src/types.ts`. Add interfaces or types at the bottom of that file.

```typescript
// src/types.ts  (append at the end)

export interface MyItemDto {
  id: string;
  name?: string | null;
  status?: number | null;
  createdAt?: string | null;
}

export interface CreateMyItemRequest {
  name: string;
  categoryId?: string;
}

export interface UpdateMyItemRequest {
  name?: string;
  status?: number;
}

// Enums — use a union type
export type MyItemStatus = 1 | 2 | 3;

// String enums
export type MyItemColor = 'red' | 'green' | 'blue';
```

After adding types, run `npm run typecheck` to verify before building:

```bash
npm run typecheck   # fast check, no output files
npm run build       # compile to dist/
```

---

## Publishing to npm

### 1. Create an npm account

Sign up at [npmjs.com](https://www.npmjs.com) if you haven't already, then log in:

```bash
npm login
```

### 2. Choose a package name

Edit `package.json`. Use a scoped name to guarantee it's available:

```json
{
  "name": "@yourname/alphabet-sdk",
  "version": "1.0.0"
}
```

### 3. Build and publish

```bash
npm run build

# Unscoped package:
npm publish

# Scoped package (required flag for free accounts):
npm publish --access public
```

### 4. Releasing updates

Use the npm version helper — it bumps `package.json` and creates a git tag:

```bash
npm version patch   # 1.0.0 → 1.0.1  bug fixes
npm version minor   # 1.0.0 → 1.1.0  new endpoints / modules
npm version major   # 1.0.0 → 2.0.0  breaking changes

npm run build && npm publish --access public
```

### 5. Automate with GitHub Actions

Store your npm token as a GitHub secret named `NPM_TOKEN`, then add:

```yaml
# .github/workflows/publish.yml
name: Publish to npm
on:
  release:
    types: [created]
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          registry-url: https://registry.npmjs.org
      - run: npm ci
      - run: npm run build
      - run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Every GitHub Release will now automatically publish a new version.

---

## Project Structure

```
alphabet-sdk/
├── src/
│   ├── types.ts                          # All TypeScript interfaces (auto-generated)
│   ├── AlphabetClient.ts                 # Main client — registers all modules
│   ├── index.ts                          # Public exports
│   └── api/
│       ├── admin.api.ts
│       ├── asset-management-module.api.ts
│       ├── communication-module.api.ts
│       ├── identity-module.api.ts
│       ├── leave-management-module-administration.api.ts
│       ├── leave-management-module-approvals.api.ts
│       ├── leave-management-module-balances.api.ts
│       ├── leave-management-module-calendar.api.ts
│       ├── leave-management-module-delegations.api.ts
│       ├── leave-management-module-leave-types.api.ts
│       ├── leave-management-module-requests.api.ts
│       ├── privilege-module.api.ts
│       ├── product-module.api.ts
│       ├── productivity-module-events.api.ts
│       ├── productivity-module-notes.api.ts
│       ├── productivity-module-reminders.api.ts
│       ├── productivity-module-reports.api.ts
│       ├── productivity-module-smart-views.api.ts
│       ├── productivity-module-tasks.api.ts
│       ├── productivity-module-templates.api.ts
│       ├── productivity-module-todos.api.ts
│       └── scheduler-module.api.ts
├── dist/                                 # Compiled output (CJS + ESM + .d.ts)
├── package.json
├── tsconfig.json
└── README.md
```

### Key rules

- **One file per module** in `src/api/` — keeps things easy to find and review.
- **All types in `src/types.ts`** — single source of truth for interfaces.
- **Never edit `dist/`** — always edit `src/` and rebuild.
- **`AlphabetClient.ts` is the glue** — it wires the axios instance to every module class.

---

## Building from Source

```bash
npm install          # install dev dependencies
npm run typecheck    # type-check without emitting files (fast)
npm run build        # compile src/ → dist/ (CJS + ESM + .d.ts)
npm run dev          # watch mode — rebuilds on every save
```

| Command | Output |
|---|---|
| `npm run build` | `dist/index.js` (CJS), `dist/index.mjs` (ESM), `dist/index.d.ts` |
| `npm run typecheck` | No files — errors only |
| `npm run dev` | Same as build, in watch mode |
