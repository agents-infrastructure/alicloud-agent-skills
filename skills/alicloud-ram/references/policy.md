# Policy Management


## createPolicy

Creates a custom policy.

**Request**: `CreatePolicyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| description | string | No | The description of the policy. The description must be 1 to 1,024 characters in  |  |
| policyDocument | string | No | The document of the policy. The document must be 1 to 6,144 characters in length |  |
| policyName | string | No | The name of the policy. The name must be 1 to 128 characters in length and can c |  |
| tag | CreatePolicyRequestTag | No | The tags. |  |


## getPolicy

Queries information about a policy.

**Request**: `GetPolicyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |


## deletePolicy

Deletes a policy.

**Request**: `DeletePolicyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| cascadingDelete | boolean | No | Specifies whether to delete all versions of the policy. Valid values: *   true:  |  |
| policyName | string | No | The name of the policy. OSS-Administrator |  |


## listPolicies

Queries a list of policies.

**Request**: `ListPoliciesRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| marker | string | No | The `marker`. If part of a previous response is truncated, you can use this para |  |
| maxItems | number | No | The number of entries to return. If a response is truncated because it reaches t |  |
| policyType | string | No | The type of the policies. Valid values: `System` and `Custom`. If you do not spe |  |
| tag | ListPoliciesRequestTag | No | The tags. |  |


## updatePolicyDescription

Modifies the description of a custom policy.

**Request**: `UpdatePolicyDescriptionRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| newDescription | string | No | The description of the policy. The description must be 1 to 1,024 characters in  |  |
| policyName | string | No | The name of the policy. TestPolicy |  |


## createPolicyVersion

Creates a version for a policy.

**Request**: `CreatePolicyVersionRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyDocument | string | No | The document of the policy. The document can be up to 6,144 bytes in length. {"S |  |
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| rotateStrategy | string | No | The rotation strategy of the policy. The rotation strategy can be used to delete |  |
| setAsDefault | boolean | No | Specifies whether to set this policy as the default policy. Default value: `fals |  |


## getPolicyVersion

Queries the information about a policy version.

**Request**: `GetPolicyVersionRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |
| versionId | string | No | The ID of the policy version. v3 |  |


## deletePolicyVersion

Deletes a policy version.

**Request**: `DeletePolicyVersionRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| versionId | string | No | The ID of the policy version that you want to delete. v3 |  |


## listPolicyVersions

Queries the versions of a policy.

**Request**: `ListPolicyVersionsRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |


## setDefaultPolicyVersion

Specifies a version for a policy as the default version.

**Request**: `SetDefaultPolicyVersionRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| versionId | string | No | The ID of the policy version that you want to set as the default version. v2 |  |


## listEntitiesForPolicy

Queries the entities to which a policy is attached.

**Request**: `ListEntitiesForPolicyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| policyName | string | No | The name of the policy. OSS-Administrator |  |
| policyType | string | No | The type of the policy. Valid values: `System` and `Custom`. Custom |  |


## getPasswordPolicy

Queries the password policy of RAM users.

**Request**: `GetPasswordPolicyRequest`



## setPasswordPolicy

Configures the password policy for Resource Access Management (RAM) users, including the password strength.

**Request**: `SetPasswordPolicyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| hardExpiry | boolean | No | Specifies whether a password will expire. Valid values: `true` and `false`. Defa |  |
| maxLoginAttemps | number | No | The maximum number of permitted logon attempts within one hour. The number of lo |  |
| maxPasswordAge | number | No | The number of days for which a password is valid. If you reset a password, the p |  |
| minimumPasswordLength | number | No | The minimum number of characters in a password. Valid values: 8 to 32. Default v |  |
| passwordReusePrevention | number | No | The number of previous passwords that a RAM user is prevented from reusing. Defa |  |
| requireLowercaseCharacters | boolean | No | Specifies whether a password must contain one or more lowercase letters. true |  |
| requireNumbers | boolean | No | Specifies whether a password must contain one or more digits. true |  |
| requireSymbols | boolean | No | Specifies whether a password must contain one or more special characters. true |  |
| requireUppercaseCharacters | boolean | No | Specifies whether a password must contain one or more uppercase letters. true |  |

