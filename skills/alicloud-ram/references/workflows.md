# Common Workflows

## 1. Create RAM User with Console Access

```typescript
import Ram20150501, * as $_model from '@alicloud/ram20150501';

// Step 1: Create user
const userResult = await client.createUser(new $_model.CreateUserRequest({
  userName: 'alice',
  displayName: 'Alice',
  email: 'alice@example.com',
  mobilePhone: '86-13800000000',
}));
console.log('User created:', userResult.body.user.userName);

// Step 2: Enable console login
await client.createLoginProfile(new $_model.CreateLoginProfileRequest({
  userName: 'alice',
  password: 'InitialP@ssw0rd!',
  passwordResetRequired: true,
  MFABindRequired: false,
}));

// Step 3: Attach policy
await client.attachPolicyToUser(new $_model.AttachPolicyToUserRequest({
  userName: 'alice',
  policyName: 'AliyunECSReadOnlyAccess',
  policyType: 'System',
}));
```

## 2. Create RAM User with Programmatic Access

```typescript
// Step 1: Create user
await client.createUser(new $_model.CreateUserRequest({
  userName: 'ci-bot',
  displayName: 'CI Bot',
}));

// Step 2: Create AccessKey
const akResult = await client.createAccessKey(new $_model.CreateAccessKeyRequest({
  userName: 'ci-bot',
}));
console.log('AccessKeyId:', akResult.body.accessKey.accessKeyId);
console.log('AccessKeySecret:', akResult.body.accessKey.accessKeySecret);

// Step 3: Attach policy
await client.attachPolicyToUser(new $_model.AttachPolicyToUserRequest({
  userName: 'ci-bot',
  policyName: 'AliyunOSSFullAccess',
  policyType: 'System',
}));
```

## 3. Manage RAM User Groups

```typescript
// Create group
await client.createGroup(new $_model.CreateGroupRequest({
  groupName: 'Developers',
  comments: 'Development team',
}));

// Add users to group
for (const userName of ['alice', 'bob', 'charlie']) {
  await client.addUserToGroup(new $_model.AddUserToGroupRequest({
    groupName: 'Developers',
    userName,
  }));
}

// Attach policy to group (applies to all members)
await client.attachPolicyToGroup(new $_model.AttachPolicyToGroupRequest({
  groupName: 'Developers',
  policyName: 'AliyunECSFullAccess',
  policyType: 'System',
}));

// List group members
const members = await client.listUsersForGroup(new $_model.ListUsersForGroupRequest({
  groupName: 'Developers',
}));
```

## 4. Create and Manage Custom Policy

```typescript
// Create custom policy
const policyDocument = JSON.stringify({
  Version: '1',
  Statement: [
    {
      Effect: 'Allow',
      Action: ['oss:GetObject', 'oss:PutObject'],
      Resource: 'acs:oss:*:*:my-bucket/*',
    },
    {
      Effect: 'Allow',
      Action: 'oss:ListObjects',
      Resource: 'acs:oss:*:*:my-bucket',
    },
  ],
});

await client.createPolicy(new $_model.CreatePolicyRequest({
  policyName: 'MyBucketAccess',
  policyDocument,
  description: 'Read/write access to my-bucket',
}));

// Create a new version (update policy)
await client.createPolicyVersion(new $_model.CreatePolicyVersionRequest({
  policyName: 'MyBucketAccess',
  policyDocument: JSON.stringify({
    Version: '1',
    Statement: [
      { Effect: 'Allow', Action: 'oss:*', Resource: 'acs:oss:*:*:my-bucket/*' },
      { Effect: 'Allow', Action: 'oss:*', Resource: 'acs:oss:*:*:my-bucket' },
    ],
  }),
  setAsDefault: true,
}));
```

## 5. Create RAM Role for Cross-Account Access

```typescript
const assumeRolePolicyDocument = JSON.stringify({
  Statement: [
    {
      Action: 'sts:AssumeRole',
      Effect: 'Allow',
      Principal: {
        RAM: ['acs:ram::123456789012****:root'],  // Trusted account
      },
    },
  ],
  Version: '1',
});

await client.createRole(new $_model.CreateRoleRequest({
  roleName: 'CrossAccountECSAdmin',
  assumeRolePolicyDocument,
  description: 'Allow trusted account to manage ECS',
}));

// Attach policy to role
await client.attachPolicyToRole(new $_model.AttachPolicyToRoleRequest({
  roleName: 'CrossAccountECSAdmin',
  policyName: 'AliyunECSFullAccess',
  policyType: 'System',
}));
```

## 6. Create RAM Role for Alibaba Cloud Service

```typescript
const serviceRolePolicy = JSON.stringify({
  Statement: [
    {
      Action: 'sts:AssumeRole',
      Effect: 'Allow',
      Principal: {
        Service: ['fc.aliyuncs.com'],  // Function Compute service
      },
    },
  ],
  Version: '1',
});

await client.createRole(new $_model.CreateRoleRequest({
  roleName: 'FCAccessOSSRole',
  assumeRolePolicyDocument: serviceRolePolicy,
  description: 'Allow Function Compute to access OSS',
}));

await client.attachPolicyToRole(new $_model.AttachPolicyToRoleRequest({
  roleName: 'FCAccessOSSRole',
  policyName: 'AliyunOSSFullAccess',
  policyType: 'System',
}));
```

## 7. Setup MFA for RAM User

```typescript
// Create virtual MFA device
const mfaResult = await client.createVirtualMFADevice(new $_model.CreateVirtualMFADeviceRequest({
  virtualMFADeviceName: 'alice-mfa',
}));
const serialNumber = mfaResult.body.virtualMFADevice.serialNumber;

// Bind MFA to user (requires two consecutive TOTP codes)
await client.bindMFADevice(new $_model.BindMFADeviceRequest({
  userName: 'alice',
  serialNumber,
  authenticationCode1: '123456',
  authenticationCode2: '654321',
}));

// Query user MFA info
const mfaInfo = await client.getUserMFAInfo(new $_model.GetUserMFAInfoRequest({
  userName: 'alice',
}));
```

## 8. Safely Delete RAM User (Clean Dependencies)

```typescript
const userName = 'alice';

// Step 1: Detach all policies
const policies = await client.listPoliciesForUser(new $_model.ListPoliciesForUserRequest({ userName }));
for (const p of policies.body.policies?.policy || []) {
  await client.detachPolicyFromUser(new $_model.DetachPolicyFromUserRequest({
    userName,
    policyName: p.policyName!,
    policyType: p.policyType!,
  }));
}

// Step 2: Remove from all groups
const groups = await client.listGroupsForUser(new $_model.ListGroupsForUserRequest({ userName }));
for (const g of groups.body.groups?.group || []) {
  await client.removeUserFromGroup(new $_model.RemoveUserFromGroupRequest({
    userName,
    groupName: g.groupName!,
  }));
}

// Step 3: Delete all AccessKeys
const keys = await client.listAccessKeys(new $_model.ListAccessKeysRequest({ userName }));
for (const k of keys.body.accessKeys?.accessKey || []) {
  await client.deleteAccessKey(new $_model.DeleteAccessKeyRequest({
    userName,
    userAccessKeyId: k.accessKeyId!,
  }));
}

// Step 4: Unbind MFA if bound
try {
  const mfa = await client.getUserMFAInfo(new $_model.GetUserMFAInfoRequest({ userName }));
  if (mfa.body.MFADevice?.serialNumber) {
    await client.unbindMFADevice(new $_model.UnbindMFADeviceRequest({ userName }));
  }
} catch (e) { /* No MFA bound */ }

// Step 5: Delete login profile if exists
try {
  await client.deleteLoginProfile(new $_model.DeleteLoginProfileRequest({ userName }));
} catch (e) { /* No login profile */ }

// Step 6: Delete user
await client.deleteUser(new $_model.DeleteUserRequest({ userName }));
```

## 9. Configure Account Security Settings

```typescript
// Set password policy
await client.setPasswordPolicy(new $_model.SetPasswordPolicyRequest({
  minimumPasswordLength: 12,
  requireLowercaseCharacters: true,
  requireUppercaseCharacters: true,
  requireNumbers: true,
  requireSymbols: true,
  maxPasswordAge: 90,
  passwordReusePrevention: 5,
  maxLoginAttemps: 5,
}));

// Set security preferences
await client.setSecurityPreference(new $_model.SetSecurityPreferenceRequest({
  enableSaveMFATicket: false,
  allowUserToChangePassword: true,
  allowUserToManageAccessKeys: false,
  allowUserToManageMFADevices: true,
  loginSessionDuration: 6,
  loginNetworkMasks: '10.0.0.0/8',
}));

// Set account alias (for console login URL)
await client.setAccountAlias(new $_model.SetAccountAliasRequest({
  accountAlias: 'my-company',
}));
// Login URL: https://my-company.signin.aliyun.com
```
