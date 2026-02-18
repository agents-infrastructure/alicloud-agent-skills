/**
 * Alibaba Cloud RAM SDK - Common Operation Examples
 *
 * Prerequisites:
 *   npm install @alicloud/ram20150501 @alicloud/openapi-client @alicloud/credentials
 *   export ALIBABA_CLOUD_ACCESS_KEY_ID="..."
 *   export ALIBABA_CLOUD_ACCESS_KEY_SECRET="..."
 */

import Ram20150501, * as $_model from '@alicloud/ram20150501';
import { createRamClient } from './setup_client';

const client = createRamClient();

// ─── User Management ───────────────────────────────────────────────

export async function createUser(userName: string, displayName: string) {
  return await client.createUser(new $_model.CreateUserRequest({
    userName,
    displayName,
  }));
}

export async function getUser(userName: string) {
  return await client.getUser(new $_model.GetUserRequest({ userName }));
}

export async function listAllUsers() {
  return await client.listUsers(new $_model.ListUsersRequest({}));
}

export async function deleteUser(userName: string) {
  return await client.deleteUser(new $_model.DeleteUserRequest({ userName }));
}

// ─── Group Management ──────────────────────────────────────────────

export async function createGroup(groupName: string, comments?: string) {
  return await client.createGroup(new $_model.CreateGroupRequest({
    groupName,
    comments,
  }));
}

export async function addUserToGroup(userName: string, groupName: string) {
  return await client.addUserToGroup(new $_model.AddUserToGroupRequest({
    userName,
    groupName,
  }));
}

export async function listGroupMembers(groupName: string) {
  return await client.listUsersForGroup(new $_model.ListUsersForGroupRequest({
    groupName,
  }));
}

// ─── Role Management ───────────────────────────────────────────────

export async function createServiceRole(roleName: string, servicePrincipal: string) {
  const assumeRolePolicyDocument = JSON.stringify({
    Statement: [{
      Action: 'sts:AssumeRole',
      Effect: 'Allow',
      Principal: { Service: [servicePrincipal] },
    }],
    Version: '1',
  });
  return await client.createRole(new $_model.CreateRoleRequest({
    roleName,
    assumeRolePolicyDocument,
  }));
}

export async function listAllRoles() {
  return await client.listRoles(new $_model.ListRolesRequest({}));
}

// ─── Policy Management ─────────────────────────────────────────────

export async function createCustomPolicy(policyName: string, policyDocument: object) {
  return await client.createPolicy(new $_model.CreatePolicyRequest({
    policyName,
    policyDocument: JSON.stringify(policyDocument),
  }));
}

export async function attachPolicyToUser(userName: string, policyName: string, policyType: string = 'System') {
  return await client.attachPolicyToUser(new $_model.AttachPolicyToUserRequest({
    userName,
    policyName,
    policyType,
  }));
}

export async function attachPolicyToRole(roleName: string, policyName: string, policyType: string = 'System') {
  return await client.attachPolicyToRole(new $_model.AttachPolicyToRoleRequest({
    roleName,
    policyName,
    policyType,
  }));
}

export async function listUserPolicies(userName: string) {
  return await client.listPoliciesForUser(new $_model.ListPoliciesForUserRequest({
    userName,
  }));
}

// ─── AccessKey Management ──────────────────────────────────────────

export async function createAccessKey(userName: string) {
  return await client.createAccessKey(new $_model.CreateAccessKeyRequest({
    userName,
  }));
}

export async function listAccessKeys(userName: string) {
  return await client.listAccessKeys(new $_model.ListAccessKeysRequest({
    userName,
  }));
}

export async function disableAccessKey(userName: string, accessKeyId: string) {
  return await client.updateAccessKey(new $_model.UpdateAccessKeyRequest({
    userName,
    userAccessKeyId: accessKeyId,
    status: 'Inactive',
  }));
}

// ─── Security Management ───────────────────────────────────────────

export async function enableConsoleLogin(userName: string, password: string) {
  return await client.createLoginProfile(new $_model.CreateLoginProfileRequest({
    userName,
    password,
    passwordResetRequired: true,
  }));
}

export async function setPasswordPolicy() {
  return await client.setPasswordPolicy(new $_model.SetPasswordPolicyRequest({
    minimumPasswordLength: 12,
    requireLowercaseCharacters: true,
    requireUppercaseCharacters: true,
    requireNumbers: true,
    requireSymbols: true,
    maxPasswordAge: 90,
    passwordReusePrevention: 5,
    maxLoginAttemps: 5,
  }));
}

export async function getSecurityPreference() {
  return await client.getSecurityPreference(new $_model.GetSecurityPreferenceRequest({}));
}
