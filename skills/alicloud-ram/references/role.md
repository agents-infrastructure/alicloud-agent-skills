# RAM Role Management


## createRole

Creates a Resource Access Management (RAM) role.

**Request**: `CreateRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| assumeRolePolicyDocument | string | No | The trust policy that specifies one or more trusted entities to assume the RAM r |  |
| description | string | No | The description of the RAM role. The description must be 1 to 1,024 characters i |  |
| maxSessionDuration | number | No | The maximum session time of the RAM role. Valid values: 3600 to 43200. Unit: sec |  |
| roleName | string | No | The name of the RAM role. The name must be 1 to 64 characters in length, and can |  |
| tag | CreateRoleRequestTag | No | The tags. |  |


## getRole

Queries information about a Resource Access Management (RAM) role.

**Request**: `GetRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| roleName | string | No | The name of the RAM role. The name must be 1 to 64 characters in length, and can |  |


## updateRole

Modifies information about a Resource Access Management (RAM) role.

**Request**: `UpdateRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| newAssumeRolePolicyDocument | string | No | The trust policy that specifies the trusted entity to assume the RAM role. { "St |  |
| newDescription | string | No | The new description of the RAM role. The description must be 1 to 1,024 characte |  |
| newMaxSessionDuration | number | No | The maximum session time of the RAM role. Valid values: 3600 to 43200. Unit: sec |  |
| roleName | string | No | The name of the RAM role. The name must be 1 to 64 characters in length, and can |  |


## deleteRole

Deletes a Resource Access Management (RAM) role.

**Request**: `DeleteRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| roleName | string | No | The name of the RAM role. ECSAdmin |  |


## listRoles

Queries all Resource Access Management (RAM) roles.

**Request**: `ListRolesRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| marker | string | No | The `marker`. If part of a previous response is truncated, you can use this para |  |
| maxItems | number | No | The number of entries to return. If a response is truncated because it reaches t |  |
| tag | ListRolesRequestTag | No | The tags. |  |


## attachPolicyToRole

Attaches a policy to a Resource Access Management (RAM) role.

**Request**: `AttachPolicyToRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |
| roleName | string | No | The name of the RAM role. OSSAdminRole |  |


## detachPolicyFromRole

Detaches a policy from a Resource Access Management (RAM) role.

**Request**: `DetachPolicyFromRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |
| roleName | string | No | The name of the RAM role. OSSAdminRole |  |


## listPoliciesForRole

Queries the policies that are attached to a Resource Access Management (RAM) role.

**Request**: `ListPoliciesForRoleRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| roleName | string | No | The name of the RAM role. AdminRole |  |

