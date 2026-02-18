# Alibaba Cloud RAM Agent Skill

[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](../../LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![AgentSkills.io](https://img.shields.io/badge/AgentSkills.io-compatible-green.svg)](https://agentskills.io)
[![npm](https://img.shields.io/npm/v/@alicloud/ram20150501.svg)](https://www.npmjs.com/package/@alicloud/ram20150501)

An Agent Skill for managing Alibaba Cloud Resource Access Management (RAM) — identity and access control for users, groups, roles, policies, AccessKeys, MFA devices, and security settings.

## Key Information

| Property | Value |
|----------|-------|
| **SDK Package** | `@alicloud/ram20150501` |
| **API Version** | `2015-05-01` |
| **Endpoint** | `ram.aliyuncs.com` (global) |
| **Total APIs** | 66 |
| **Functional Domains** | 7 |
| **API Style** | RPC |

## Project Structure

```
alicloud-ram/
├── SKILL.md                          # Core skill instructions
├── README.md                         # This file
├── scripts/
│   ├── setup_client.ts               # Reusable client factory (AK/STS)
│   └── examples.ts                   # Common operation examples
└── references/
    ├── quickstart.md                 # Installation, auth, concepts, errors
    ├── workflows.md                  # 9 end-to-end workflows
    ├── user.md                       # RAM User APIs (9)
    ├── group.md                      # RAM User Group APIs (12)
    ├── role.md                       # RAM Role APIs (8)
    ├── policy.md                     # Policy Management APIs (13)
    ├── accesskey.md                  # AccessKey APIs (5)
    ├── security.md                   # Security & Login APIs (12)
    └── account.md                    # Account & Tag APIs (7)
```

## Quick Start

### Install Dependencies

```bash
npm install @alicloud/ram20150501 @alicloud/openapi-client @alicloud/credentials
```

### Set Credentials

```bash
export ALIBABA_CLOUD_ACCESS_KEY_ID="your-access-key-id"
export ALIBABA_CLOUD_ACCESS_KEY_SECRET="your-access-key-secret"
```

### Initialize Client

```typescript
import Ram20150501, * as $_model from '@alicloud/ram20150501';
import * as $OpenApi from '@alicloud/openapi-client';
import Credential from '@alicloud/credentials';

const cred = new Credential();
const config = new $OpenApi.Config({ credential: cred });
config.endpoint = 'ram.aliyuncs.com';
const client = new Ram20150501(config);
```

### First API Call

```typescript
const result = await client.listUsers(new $_model.ListUsersRequest({}));
for (const user of result.body.users?.user || []) {
  console.log(user.userName, user.displayName);
}
```

## API Functional Domains

| Domain | APIs | Reference | Description |
|--------|------|-----------|-------------|
| RAM User | 9 | [user.md](references/user.md) | Create, query, update, delete RAM users |
| RAM User Group | 12 | [group.md](references/group.md) | Manage groups, add/remove members |
| RAM Role | 8 | [role.md](references/role.md) | Manage roles for cross-account/service access |
| Policy | 13 | [policy.md](references/policy.md) | Custom policies, versions, password policy |
| AccessKey | 5 | [accesskey.md](references/accesskey.md) | Manage programmatic access credentials |
| Security & Login | 12 | [security.md](references/security.md) | Login profiles, MFA, security preferences |
| Account & Tag | 7 | [account.md](references/account.md) | Account alias, resource tagging |

## Workflows

See [workflows.md](references/workflows.md) for complete code examples:

1. Create RAM User with Console Access
2. Create RAM User with Programmatic Access
3. Manage RAM User Groups
4. Create and Manage Custom Policy
5. Create RAM Role for Cross-Account Access
6. Create RAM Role for Alibaba Cloud Service
7. Setup MFA for RAM User
8. Safely Delete RAM User (Clean Dependencies)
9. Configure Account Security Settings

## Usage

### For AI Agents

This skill is designed for AI coding agents (Claude Code, Cursor, Codex, etc.). The agent reads `SKILL.md` for instructions and loads reference files on demand.

### For Developers

Browse the `references/` directory for complete API documentation with parameter tables, or use `scripts/examples.ts` as a starting point.

## Related Links

- [npm: @alicloud/ram20150501](https://www.npmjs.com/package/@alicloud/ram20150501)
- [SDK Source](https://github.com/aliyun/alibabacloud-typescript-sdk/tree/master/ram-20150501)
- [Alibaba Cloud RAM Documentation](https://www.alibabacloud.com/help/en/ram/)
- [AgentSkills.io Specification](https://agentskills.io)

## License

Apache 2.0 — see [LICENSE](../../LICENSE).
