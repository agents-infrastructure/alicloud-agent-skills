# AccessKey Management


## createAccessKey

Creates an AccessKey pair for a Resource Access Management (RAM) user.

**Request**: `CreateAccessKeyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. If a RAM user calls this operation and does not specif |  |


## deleteAccessKey

Deletes an AccessKey pair of a Resource Access Management (RAM) user.

**Request**: `DeleteAccessKeyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userAccessKeyId | string | No | The AccessKey ID in the AccessKey pair that you want to delete.`` 0wNEpMMlzy7s** |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## updateAccessKey

Changes the status of an AccessKey pair that belongs to a Resource Access Management (RAM) user.

**Request**: `UpdateAccessKeyRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| status | string | No | The status of the AccessKey pair. Valid values: `Active` and `Inactive`. Inactiv |  |
| userAccessKeyId | string | No | The AccessKey ID in the AccessKey pair whose status you want to change.`` 0wNEpM |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## listAccessKeys

Queries all AccessKey pairs that belong to a Resource Access Management (RAM) user.

**Request**: `ListAccessKeysRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. If a RAM user calls this operation and does not specif |  |


## getAccessKeyLastUsed

Queries the last time an AccessKey pair was used.

**Request**: `GetAccessKeyLastUsedRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userAccessKeyId | string | No |  |  |
| userName | string | No |  |  |

