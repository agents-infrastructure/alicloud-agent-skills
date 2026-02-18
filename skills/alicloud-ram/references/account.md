# Account & Tag Management


## setAccountAlias

Configures an alias for an Alibaba Cloud account.

**Request**: `SetAccountAliasRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| accountAlias | string | No | The alias of the Alibaba Cloud account. The alias must be 3 to 32 characters in  |  |


## getAccountAlias

Queries the alias of an Alibaba Cloud account.

**Request**: `GetAccountAliasRequest`



## clearAccountAlias

Clears the alias of an Alibaba Cloud account.

**Request**: `ClearAccountAliasRequest`



## tagResources

Adds tags to resources.

**Request**: `TagResourcesRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| resourceNames | string | No | The names of the resources. You can specify up to 50 resource names. |  |
| resourceType | string | No | The resource type. Enumerated values: *   role *   policy role |  |
| tag | TagResourcesRequestTag | No | The tags. You can specify up to 20 tags. |  |


## untagResources

Removes tags from resources.

**Request**: `UntagResourcesRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| all | boolean | No | Specifies whether to remove all tags from the resources. Enumerated values: *    |  |
| resourceNames | string | No | The names of the resources. You can specify up to 50 resource names. |  |
| resourceType | string | No | The resource type. Enumerated values: *   role *   policy role |  |
| tagKeys | string | No | The keys of the tags. You can specify up to 20 tag keys. |  |


## listTagResources

Queries the tags that are added to resources.

**Request**: `ListTagResourcesRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| nextToken | string | No | The pagination token that is used in the next request to retrieve a new page of  |  |
| pageSize | number | No | The number of entries per page. Valid values: 1 to 100. 100 |  |
| resourceNames | string | No | The names of the resources. You can specify up to 50 resource names. |  |
| resourceType | string | No | The resource type. Enumerated values: *   role *   policy role |  |
| tag | ListTagResourcesRequestTag | No | The tags. You can specify up to 20 tags. |  |


## decodeDiagnosticMessage

Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.

**Request**: `DecodeDiagnosticMessageRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| encodedDiagnosticMessage | string | No | The encoded diagnostic information in the response that contains an access denie |  |

