/**
 * Alibaba Cloud RAM SDK Client Factory
 *
 * Usage:
 *   import { createRamClient } from './setup_client';
 *   const client = createRamClient();
 */

import Ram20150501 from '@alicloud/ram20150501';
import * as $OpenApi from '@alicloud/openapi-client';
import Credential from '@alicloud/credentials';

/**
 * Create a RAM client using default credentials (environment variables).
 * RAM is a global service — always uses ram.aliyuncs.com.
 */
export function createRamClient(): Ram20150501 {
  const cred = new Credential();
  const config = new $OpenApi.Config({ credential: cred });
  config.endpoint = 'ram.aliyuncs.com';
  return new Ram20150501(config);
}

/**
 * Create a RAM client using explicit AccessKey credentials.
 */
export function createRamClientWithAK(
  accessKeyId: string,
  accessKeySecret: string,
): Ram20150501 {
  const config = new $OpenApi.Config({
    accessKeyId,
    accessKeySecret,
  });
  config.endpoint = 'ram.aliyuncs.com';
  return new Ram20150501(config);
}

/**
 * Create a RAM client using STS temporary credentials.
 */
export function createRamClientWithSTS(
  accessKeyId: string,
  accessKeySecret: string,
  securityToken: string,
): Ram20150501 {
  const config = new $OpenApi.Config({
    accessKeyId,
    accessKeySecret,
    securityToken,
  });
  config.endpoint = 'ram.aliyuncs.com';
  return new Ram20150501(config);
}
