# Quickstart

## Installation

```bash
npm install @alicloud/ram20150501 @alicloud/openapi-client @alicloud/credentials
```

## Authentication

Set environment variables:

```bash
export ALIBABA_CLOUD_ACCESS_KEY_ID="your-access-key-id"
export ALIBABA_CLOUD_ACCESS_KEY_SECRET="your-access-key-secret"
```

## Client Initialization

```typescript
import Ram20150501, * as $_model from '@alicloud/ram20150501';
import * as $OpenApi from '@alicloud/openapi-client';
import Credential from '@alicloud/credentials';

const cred = new Credential();
const config = new $OpenApi.Config({ credential: cred });
config.endpoint = 'ram.aliyuncs.com';
const client = new Ram20150501(config);
```

## Endpoint

RAM is a **global service**. Always use the single endpoint:

| Endpoint | Region |
|----------|--------|
| `ram.aliyuncs.com` | Global (no regionId needed) |

## Key Concepts

| Concept | Description |
|---------|-------------|
| **RAM User** | An identity with long-term credentials (AccessKey, password) for accessing Alibaba Cloud resources |
| **RAM User Group** | A collection of RAM users; policies attached to a group apply to all users in it |
| **RAM Role** | An identity with temporary credentials (STS token); can be assumed by users, services, or external IdPs |
| **Policy** | A JSON document defining permissions; can be System (predefined) or Custom (user-created) |
| **Policy Version** | Policies support up to 5 versions; one is the default (active) version |
| **AccessKey** | A key pair (ID + Secret) for programmatic API access; each user can have up to 2 |
| **MFA Device** | A virtual multi-factor authentication device for enhanced login security |
| **Login Profile** | Console logon configuration for a RAM user (password, MFA requirement, etc.) |
| **Security Preference** | Account-level security settings (login mask, session duration, etc.) |

## Policy Types

| Type | Value | Description |
|------|-------|-------------|
| System Policy | `System` | Predefined by Alibaba Cloud, read-only (e.g., `AliyunECSFullAccess`) |
| Custom Policy | `Custom` | User-created, supports up to 5 versions |

## Common Policy Document Structure

```json
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ecs:*",
      "Resource": "*",
      "Condition": {}
    }
  ]
}
```

## Pagination

RAM uses **Marker-based pagination** for list operations:

```typescript
// ListUsers uses PageNumber/PageSize
const result = await client.listUsers(new $_model.ListUsersRequest({}));
// result.body.users.user contains the array
```

## Error Handling

Common error codes:

| Code | Description |
|------|-------------|
| `EntityAlreadyExists.User` | RAM user already exists |
| `EntityAlreadyExists.Group` | RAM user group already exists |
| `EntityAlreadyExists.Role` | RAM role already exists |
| `EntityNotExist.User` | RAM user does not exist |
| `EntityNotExist.Group` | RAM user group does not exist |
| `EntityNotExist.Role` | RAM role does not exist |
| `EntityNotExist.Policy` | Policy does not exist |
| `LimitExceeded.User` | Maximum number of RAM users exceeded (default 5000) |
| `LimitExceeded.Group` | Maximum number of RAM user groups exceeded (default 50) |
| `LimitExceeded.Role` | Maximum number of RAM roles exceeded (default 1000) |
| `LimitExceeded.Policy` | Maximum number of custom policies exceeded (default 1500) |
| `DeleteConflict.User.Policy` | Cannot delete user with attached policies |
| `DeleteConflict.User.Group` | Cannot delete user who belongs to groups |
| `DeleteConflict.User.AccessKey` | Cannot delete user with active AccessKeys |
| `DeleteConflict.Role.Policy` | Cannot delete role with attached policies |
