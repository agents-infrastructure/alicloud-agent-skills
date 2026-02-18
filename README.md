# Alibaba Cloud Agent Skills

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)
[![AgentSkills.io](https://img.shields.io/badge/AgentSkills.io-Compatible-green.svg)](https://agentskills.io/)
[![Skills](https://img.shields.io/badge/Skills-10-orange.svg)](#available-skills)
[![APIs](https://img.shields.io/badge/Total%20APIs-2%2C065-blue.svg)](#available-skills)

A collection of [Agent Skills](https://agentskills.io/) for managing Alibaba Cloud infrastructure through TypeScript SDKs. These skills provide AI agents with structured knowledge to programmatically interact with **2,065 APIs** across **10 cloud services**.

Skills follow the [Agent Skills](https://agentskills.io/) format and are compatible with Claude Code, Cursor, Codex, OpenCode, and [35+ more agents](https://github.com/vercel-labs/skills#supported-agents).

## Installation

Install all skills at once:

```bash
npx skills add dafang/alicloud-agent-skills
```

Install a specific skill:

```bash
npx skills add dafang/alicloud-agent-skills --skill alicloud-ecs
```

Install multiple skills:

```bash
npx skills add dafang/alicloud-agent-skills --skill alicloud-ecs --skill alicloud-vpc --skill alicloud-ram
```

List available skills:

```bash
npx skills add dafang/alicloud-agent-skills --list
```

Install to a specific agent:

```bash
npx skills add dafang/alicloud-agent-skills --agent claude-code
```

Install all skills to all agents without prompts:

```bash
npx skills add dafang/alicloud-agent-skills --all
```

## Available Skills

| Skill | Service | APIs | Domains | SDK Package |
|-------|---------|------|---------|-------------|
| [alicloud-ecs](skills/alicloud-ecs) | Elastic Compute Service | 374 | 14 | `@alicloud/ecs20140526` |
| [alicloud-rds](skills/alicloud-rds) | Relational Database Service | 398 | 12 | `@alicloud/rds20140815` |
| [alicloud-vpc](skills/alicloud-vpc) | Virtual Private Cloud | 396 | 13 | `@alicloud/vpc20160428` |
| [alicloud-alidns](skills/alicloud-alidns) | DNS Resolution | 234 | 13 | `@alicloud/alidns20150109` |
| [alicloud-cdn](skills/alicloud-cdn) | Content Delivery Network | 168 | 11 | `@alicloud/cdn20180510` |
| [alicloud-redis](skills/alicloud-redis) | Redis / Tair (KVStore) | 157 | 8 | `@alicloud/r-kvstore20150101` |
| [alicloud-cr](skills/alicloud-cr) | Container Registry | 115 | 12 | `@alicloud/cr20181201` |
| [alicloud-oss](skills/alicloud-oss) | Object Storage Service | 90 | 6 | `@alicloud/oss20190517` |
| [alicloud-fc](skills/alicloud-fc) | Function Compute 3.0 | 67 | 10 | `@alicloud/fc20230330` |
| [alicloud-ram](skills/alicloud-ram) | Resource Access Management | 66 | 7 | `@alicloud/ram20150501` |
| **Total** | **10 Services** | **2,065** | **106** | |

## Skill Details

### alicloud-ecs

Manage Alibaba Cloud Elastic Compute Service (ECS) — cloud server instance lifecycle (create, start, stop, reboot, delete), disks and snapshots, images, security groups, VPC networking, EIP, ENI, SSH key pairs, dedicated hosts, auto provisioning, launch templates, Cloud Assistant commands, tags, system events, and diagnostics.

**Use when:** Creating, managing, or troubleshooting cloud server instances and related compute resources.

### alicloud-rds

Manage Alibaba Cloud RDS — relational database instances (MySQL, PostgreSQL, SQL Server, MariaDB), accounts, databases, backups, security, monitoring, parameters, read-only instances, database proxy, migration, cross-region DR, PostgreSQL extensions, and RDS Custom instances.

**Use when:** Provisioning, configuring, or operating relational databases on Alibaba Cloud.

### alicloud-vpc

Manage Alibaba Cloud VPC networking — virtual private clouds, VSwitches, route tables, EIPs, NAT gateways, VPN gateways, Express Connect, BGP routing, network ACLs, flow logs, traffic mirroring, IPv6, HAVIP, and gateway endpoints.

**Use when:** Setting up or managing network infrastructure, connectivity, and routing on Alibaba Cloud.

### alicloud-alidns

Manage Alibaba Cloud DNS (Alidns) — domain management, DNS record CRUD (A, AAAA, CNAME, MX, TXT, SRV, CAA, etc.), DNS load balancing, custom resolution lines, DNSSEC, Cloud GTM, DNS GTM, GTM Classic, recursive DNS, DNS cache, Public DNS, DNS over HTTPS, and ISP cache flush.

**Use when:** Managing DNS resolution, domain records, or global traffic management.

### alicloud-cdn

Manage Alibaba Cloud CDN — domain acceleration, domain configuration, SSL certificates, cache refresh/prefetch, real-time monitoring, traffic analysis, log management, usage/billing, IP tools, Function Compute triggers, and delivery tasks.

**Use when:** Configuring content delivery, managing CDN domains, or analyzing CDN performance.

### alicloud-redis

Manage Alibaba Cloud Redis (Tair / R-KVStore) — Redis or Tair instances, accounts, backups, security (whitelist/SSL/TDE/audit), parameters, monitoring, cluster scaling, direct connection, and Tair Custom instances.

**Use when:** Provisioning, configuring, or operating Redis/Tair cache and in-memory database instances.

### alicloud-cr

Manage Alibaba Cloud Container Registry (ACR) Enterprise Edition — instance management, namespaces, image repositories, image tags, build rules, image synchronization, security scanning, delivery chains, Helm charts, artifact lifecycle, and event notifications.

**Use when:** Managing container images, build pipelines, or artifact distribution on Alibaba Cloud.

### alicloud-oss

Manage Alibaba Cloud OSS — object storage buckets, objects, multipart uploads, bucket configurations (lifecycle, versioning, CORS, encryption, replication, WORM), live streaming channels, and static website hosting.

**Use when:** Storing, retrieving, or managing objects and files in cloud storage.

### alicloud-fc

Manage Alibaba Cloud Function Compute (FC) 3.0 — serverless functions, invocation, versions, aliases, triggers (HTTP/Timer/OSS/CDN/MNS), async invocation, concurrency and scaling configs, provisioned instances, custom domains, layers, VPC bindings, and sessions.

**Use when:** Building, deploying, or managing serverless functions and event-driven architectures.

### alicloud-ram

Manage Alibaba Cloud Resource Access Management (RAM) — RAM users, user groups, roles, policies, AccessKeys, MFA devices, login profiles, password policies, security preferences, account aliases, and resource tagging.

**Use when:** Managing identity and access control, creating users/roles, or configuring security policies on Alibaba Cloud.

## Skill Structure

Each skill follows the same consistent structure:

```
skills/<skill-name>/
├── SKILL.md                    # Core instructions for the agent
├── README.md                   # Human-readable documentation
├── scripts/
│   ├── setup_client.ts         # Reusable client factory
│   └── examples.ts             # Ready-to-use code examples
└── references/
    ├── quickstart.md            # Installation, auth, endpoints, pagination
    ├── workflows.md             # Step-by-step workflows with full code
    └── <domain>.md              # API reference per functional domain
```

**Progressive disclosure design:**
- `SKILL.md` metadata (~100 tokens) is used for skill matching
- `SKILL.md` body (~200 lines) loads on activation
- Reference files load on-demand per functional domain

## Prerequisites

All skills require:

1. **Node.js** 16+ and **TypeScript** 5.x
2. **Alibaba Cloud credentials** set as environment variables:

```bash
export ALIBABA_CLOUD_ACCESS_KEY_ID="your-access-key-id"
export ALIBABA_CLOUD_ACCESS_KEY_SECRET="your-access-key-secret"
```

3. **SDK packages** installed per skill (see each skill's `quickstart.md`)

## Usage

Skills are automatically available once installed. The agent will use them when relevant tasks are detected.

**Example prompts:**

- "Create an ECS instance in cn-hangzhou with 2 vCPUs and 4GB RAM"
- "Set up a VPC with two VSwitches and a NAT gateway"
- "Add a CNAME record for cdn.example.com pointing to my CDN domain"
- "Create a MySQL RDS instance with automated backups"
- "Deploy a serverless function triggered by HTTP requests"
- "Create an OSS bucket with versioning and lifecycle rules"
- "Set up a Redis cluster with 4 shards"
- "Build a container image from my GitHub repo and push to ACR"
- "Configure CDN cache refresh for my website"
- "Create a RAM user with read-only access to ECS and attach MFA"

## Related Links

| Resource | URL |
|----------|-----|
| Alibaba Cloud OpenAPI | [api.aliyun.com](https://api.aliyun.com/) |
| TypeScript SDK Source | [alibabacloud-typescript-sdk](https://github.com/aliyun/alibabacloud-typescript-sdk) |
| Agent Skills Specification | [agentskills.io](https://agentskills.io/) |
| Skills CLI | [vercel-labs/skills](https://github.com/vercel-labs/skills) |

## Contributing

Contributions are welcome! To add or improve a skill:

1. Fork this repository
2. Create a feature branch
3. Follow the [Agent Skills](https://agentskills.io/) specification
4. Submit a pull request

## License

This project is licensed under the Apache License 2.0 — see the [LICENSE](LICENSE) file for details.
