# Security & Login Management


## createLoginProfile

Enables console logon for a Resource Access Management (RAM) user.

**Request**: `CreateLoginProfileRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| MFABindRequired | boolean | No | Specifies whether the RAM user must bind a multi-factor authentication (MFA) dev |  |
| password | string | No | The logon password of the RAM user. The password must meet the password strength |  |
| passwordResetRequired | boolean | No | Specifies whether the RAM user has to change the password upon logon. Default va |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## getLoginProfile

Queries the logon configurations of a Resource Access Management (RAM) user.

**Request**: `GetLoginProfileRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. zhangq**** |  |


## updateLoginProfile

Modifies the logon configurations of a Resource Access Management (RAM) user.

**Request**: `UpdateLoginProfileRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| MFABindRequired | boolean | No | Specifies whether a multi-factor authentication (MFA) device must be bound to th |  |
| password | string | No | The logon password of the RAM user. The password must meet the password strength |  |
| passwordResetRequired | boolean | No | Specifies whether the RAM user has to change the password upon logon. true |  |
| userName | string | No | The name of the RAM user. zhangq**** |  |


## deleteLoginProfile

Disables console logon for a Resource Access Management (RAM) user.

**Request**: `DeleteLoginProfileRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| userName | string | No | The name of the RAM user. zhangq**** |  |


## changePassword

Changes the password that is used to log on to the console for a Resource Access Management (RAM) user.

**Request**: `ChangePasswordRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| newPassword | string | No | The new password that is used to log on to the console. The password must meet t |  |
| oldPassword | string | No | The old password that is used to log on to the console. 12**** |  |


## getSecurityPreference

Queries the security preferences.

**Request**: `GetSecurityPreferenceRequest`



## setSecurityPreference

Configures the security preferences.

**Request**: `SetSecurityPreferenceRequest`


| Parameter | Type | Required | Description | Example |
|-----------|------|----------|-------------|---------|
| allowUserToChangePassword | boolean | No | Specifies whether RAM users can change their passwords. Valid values: *   true ( |  |
| allowUserToManageAccessKeys | boolean | No | Specifies whether RAM users can manage their AccessKey pairs. Valid values: *    |  |
| allowUserToManageMFADevices | boolean | No | Specifies whether RAM users can manage their MFA devices. Valid values: *   true |  |
| allowUserToManagePublicKeys | boolean | No | Specifies whether RAM users can manage their public keys. Valid values: *   true |  |
| enableSaveMFATicket | boolean | No | Specifies whether to remember the multi-factor authentication (MFA) devices of R |  |
| loginNetworkMasks | string | No | The subnet mask that specifies the IP addresses from which you can log on to the |  |
| loginSessionDuration | number | No | The validity period of the logon session of RAM users. Valid values: 1 to 24. De |  |


## bindMFADevice

Binds a multi-factor authentication (MFA) device to a Resource Access Management (RAM) user.

**Request**: `BindMFADeviceRequest`



## unbindMFADevice

Unbinds a multi-factor authentication (MFA) device from a Resource Access Management (RAM) user.

**Request**: `UnbindMFADeviceRequest`



## createVirtualMFADevice

Creates a multi-factor authentication (MFA) device.

**Request**: `CreateVirtualMFADeviceRequest`



## deleteVirtualMFADevice

Deletes a multi-factor authentication (MFA) device.

**Request**: `DeleteVirtualMFADeviceRequest`



## listVirtualMFADevices

Queries all multi-factor authentication (MFA) devices.

**Request**: `ListVirtualMFADevicesRequest`


