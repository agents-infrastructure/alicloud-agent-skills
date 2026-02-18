# RAM User Group Management


## createGroup

Creates a RAM user group.

**Request**: `CreateGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| comments | string | No | The description. The value can be up to 128 characters in length. Dev-Team |  |
| groupName | string | No | The name of the user group. The name must be 1 to 64 characters in length and ca |  |


## getGroup

Queries information about a Resource Access Management (RAM) user group.

**Request**: `GetGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. Dev-Team |  |


## updateGroup

Modifies a Resource Access Management (RAM) user group.

**Request**: `UpdateGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. Dev-Team |  |
| newComments | string | No | The new description of the RAM user group. The new description must be 1 to 128  |  |
| newGroupName | string | No | The new name of the RAM user group. The name must be 1 to 64 characters in lengt |  |


## deleteGroup

Deletes a Resource Access Management (RAM) user group.

**Request**: `DeleteGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. If you want to query the name of a RAM user grou |  |


## listGroups

Queries Resource Access Management (RAM) user groups.

**Request**: `ListGroupsRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| marker | string | No | The pagination token that is used in the next request to retrieve a new page of  |  |
| maxItems | number | No | The number of entries per page. Valid values: 1 to 100. Default value: 100. 100 |  |


## addUserToGroup

Adds a Resource Access Management (RAM) user to a RAM user group.

**Request**: `AddUserToGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. Dev-Team |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## removeUserFromGroup

Removes a Resource Access Management (RAM) user from a RAM user group.

**Request**: `RemoveUserFromGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. Dev-Team |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## listUsersForGroup

Queries Resource Access Management (RAM) users in a RAM user group.

**Request**: `ListUsersForGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. Dev-Team |  |
| marker | string | No | The `marker`. If part of a previous response is truncated, you can use this para |  |
| maxItems | number | No | The number of entries to return. If a response is truncated because it reaches t |  |


## listGroupsForUser

Queries the Resource Access Management (RAM) user groups to which a RAM user belongs.

**Request**: `ListGroupsForUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. Alice |  |


## attachPolicyToGroup

Attaches a policy to a Resource Access Management (RAM) user group.

**Request**: `AttachPolicyToGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. dev |  |
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |


## detachPolicyFromGroup

Detaches a policy from a Resource Access Management (RAM) user group.

**Request**: `DetachPolicyFromGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. dev |  |
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |


## listPoliciesForGroup

Queries the policies that are attached to a Resource Access Management (RAM) user group.

**Request**: `ListPoliciesForGroupRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| groupName | string | No | The name of the RAM user group. dev |  |

