# Alibaba Cloud Agent Skills

This repository contains 10 agent skills for managing Alibaba Cloud infrastructure through TypeScript SDKs, covering 2,065 APIs across compute, networking, storage, database, DNS, CDN, container, serverless, caching, and identity management services.

## Skills Overview

| Skill | Service | When to Use |
|-------|---------|-------------|
| `alicloud-ecs` | Elastic Compute Service | Cloud server instances, disks, images, security groups |
| `alicloud-rds` | Relational Database Service | MySQL, PostgreSQL, SQL Server, MariaDB databases |
| `alicloud-vpc` | Virtual Private Cloud | VPC, VSwitch, EIP, NAT, VPN, Express Connect |
| `alicloud-alidns` | DNS Resolution | DNS records, domains, GTM, DNSSEC |
| `alicloud-cdn` | Content Delivery Network | CDN domains, cache, monitoring, certificates |
| `alicloud-redis` | Redis / Tair | Redis/Tair instances, clusters, backups |
| `alicloud-cr` | Container Registry | Container images, builds, scanning, Helm charts |
| `alicloud-oss` | Object Storage Service | Buckets, objects, multipart uploads |
| `alicloud-fc` | Function Compute 3.0 | Serverless functions, triggers, layers |
| `alicloud-ram` | Resource Access Management | RAM users, groups, roles, policies, AccessKeys, MFA |

## How to Use

1. Read the relevant skill's `SKILL.md` for instructions
2. Read `references/quickstart.md` for setup and authentication
3. Read the domain-specific reference file for API details
4. Read `references/workflows.md` for common operation patterns

## Common Prerequisites

All skills require Alibaba Cloud credentials:

```bash
export ALIBABA_CLOUD_ACCESS_KEY_ID="your-access-key-id"
export ALIBABA_CLOUD_ACCESS_KEY_SECRET="your-access-key-secret"
```
