# RAM User Management


## createUser

Creates a Resource Access Management (RAM) user.

**Request**: `CreateUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| comments | string | No | The description of the RAM user. The description must be 1 to 128 characters in  |  |
| displayName | string | No | The display name of the RAM user. The name must be 1 to 128 characters in length |  |
| email | string | No | The email address of the RAM user. >  This parameter applies only to the China s | alice.com |
| mobilePhone | string | No | The mobile phone number of the RAM user. Format: \\<Country code>-\\<Mobile phon |  |
| userName | string | No | The name of the RAM user. The name must be 1 to 64 characters in length, and can |  |


## getUser

Queries information about a Resource Access Management (RAM) user.

**Request**: `GetUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The username of the RAM user. The username must be 1 to 64 characters in length, |  |


## updateUser

Modifies information about a Resource Access Management (RAM) user.

**Request**: `UpdateUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| newComments | string | No | The new description of the RAM user. The description must be 1 to 128 characters |  |
| newDisplayName | string | No | The new display name of the RAM user. The name must be 1 to 128 characters in le |  |
| newEmail | string | No | The new email address of the RAM user. >  This parameter applies only to the Chi | xiaoq****.com |
| newMobilePhone | string | No | The new mobile phone number of the RAM user. Format: \\<Country code>-\\<Mobile  |  |
| newUserName | string | No | The new username of the RAM user. The username must be 1 to 64 characters in len |  |
| userName | string | No | The username of the RAM user. zhangq**** |  |


## deleteUser

Deletes a Resource Access Management (RAM) user.

**Request**: `DeleteUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. The name must be 1 to 64 characters in length, and can |  |


## listUsers

Queries the information about all RAM users.

**Request**: `ListUsersRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| marker | string | No | The `marker`. If part of a previous response is truncated, you can use this para |  |
| maxItems | number | No | The number of entries per page. If a response is truncated because it reaches th |  |


## attachPolicyToUser

Attaches a policy to a Resource Access Management (RAM) user.

**Request**: `AttachPolicyToUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## detachPolicyFromUser

Detaches a policy from a Resource Access Management (RAM) user.

**Request**: `DetachPolicyFromUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## listPoliciesForUser

Queries the policies that are attached to a RAM user.

**Request**: `ListPoliciesForUserRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. zhangq**** |  |


## getUserMFAInfo

Queries the multi-factor authentication (MFA) device that is bound to a Resource Access Management (RAM) user.

**Request**: `GetUserMFAInfoRequest`


