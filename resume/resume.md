---
vars:
  tagline: "Systems Engineer · Distributed Architectures · High-Performance Product Development"
---

# Nathnael Wondisha

<center>
Software Engineer
</center>

[nathnaelwonisha@gmail.com](mailto:nathnaelwonisha@gmail.com) | [linkedin.com/in/nathnael-wondisha-67b048227](https://linkedin.com/in/nathnael-wondisha-67b048227) | [github.com/ghost2023](https://github.com/ghost2023) | [My Website](https://www.nathnaelwondisha.et/)

{{ tagline }}

<hr  style="margin-top: 1rem; margin-bottom: 1rem;" />

## Summary

Full-stack engineer who builds business systems that handle real money: a logistics platform and an ERP for Ethio-Djibouti Railway, a restaurant ERP running in production, and payment, marketplace and fintech products before that. Most of my work is in TypeScript (Node.js, NestJS, React) on PostgreSQL. I care about correct numbers, safe concurrency, and software that people on the floor can use under pressure.

---

## Education

**Computer Science**  
St. Mary University — Expected Graduation: Winter 2027

---

## Work Experience and Projects

**Tria - Software Engineer, Ethio-Djibouti Railway (EDR) Platform**

_EDR ILMS: national rail freight and passenger platform. Live, processing hundreds of millions of ETB per month_

- One of a small core team that took Ethio-Djibouti Railway's freight and passenger operations from manual processes to a live digital platform in about 5 months. It spans 11 services, 1,500+ API endpoints and 7 payment gateways
- Core engineer on the freight subsystem (NestJS, TypeORM, PostgreSQL, RabbitMQ, React), covering the whole cargo lifecycle from customer booking and pricing through invoicing, payment, dispatch and delivery
- Built the payment and billing path that the platform's monthly revenue runs through: booking payments over Telebirr, CBE Birr, D-Money, Waafi and card gateways, invoice settlement, and manual payment reconciliation
- Added multi-currency support (ETB, USD, DJF) across billing, payments and reporting for cross-border Ethiopia–Djibouti traffic
- Integrated invoicing with the Ethiopian Ministry of Revenue e-invoicing system (EIMS) to keep it compliant with tax rules
- Built the reporting module of 50+ financial and operational reports with exports, used by management and finance. Also built CRM, complaint and case management with SLA escalation, customer surveys and support chat
- Supported production operations alongside development: fixed live issues, helped operations and finance staff, and handled data corrections on a system that moves real money every day

_EDR ERP: finance, procurement and HR for the railway (live)_

- Core developer in a team of about six. I owned the procurement module end to end, from the API and UI through to testing
- Digitized the railway's whole procurement process: demand planning, annual and consolidated plans, requisitions, RFQs and tenders with committee scoring and lot-by-lot awards, contracts and purchase orders, and goods receipt with inspection
- Built budget control (per line and cost center, with warn, block or hold) and configurable multi-step approval workflows with delegation, so spending follows public-procurement rules
- Built warehouse inventory by site, store and bin, with transfers, counts and replenishment. Capital items flow into the asset register, and supplier bills and payment terms flow into finance
- Wrote the Playwright end-to-end test suite covering the critical procurement and approval flows

**NegedOS - CTO / Lead Engineer**

_Restaurant operating system and ERP for multi-branch restaurant groups in Ethiopia. Live since 2025_

- Designed and built the product from scratch, wrote ~95% of the codebase, and ran it in production for 15+ months. It handles hundreds of orders and payments every day
- Runs the whole restaurant in one system: floor ordering, kitchen and bar, cashier, inventory, accounting, and owner reporting. The stack is React, Hono, oRPC (about 200 endpoints), PostgreSQL and Drizzle
- Built automatic payment verification: Telebirr and CBE transfer receipts are checked against each branch's bank accounts and suspicious payments are flagged. This reduces fraud risk and replaces manual checking at the till
- Built FIFO batch inventory costing across a central warehouse and per-branch stores, with recipes, transfers, requisitions, counts and waste tracking. Stock shortfalls never block a sale; they are reconciled afterwards
- Built double-entry accounting posted automatically from every sale, purchase and stock movement, producing a live trial balance, general ledger and financial statements
- Built a real-time floor app (PWA) for waiters, cashiers and kitchen staff that works on low-end Android phones over poor networks
- Built for correctness: 80+ integration test files run against real PostgreSQL, and Playwright tests for race conditions and sustained load (soak tests) check financial invariants. I also wrote custom lint rules that stop deadlocks before they ship, and migrated the whole platform from Next.js to Vite + Hono
- Owner Telegram bot with daily sales, stock and order summaries

**Efoyy Ride - Software Engineer (Full-stack / Mobile)**

- Rebuilt core parts of rider and driver apps, improving overall UX and onboarding speed (~30–50% faster)
- Reduced application startup time by ~50%, significantly improving first-time user experience
- Redesigned payment flow, leading to a noticeable increase in successful transactions and payment volume
- Established monitoring and observability systems, greatly improving system visibility and debugging speed
- Built internal tools including marketing site and sales portal
- Worked across mobile (Flutter), frontend, and backend in a distributed international team

**Cicada - Full-Stack Developer**

- Built responsive, user-focused UI for a Web3 security platform
- Improved backend stability through stronger validation and error handling
- Designed and implemented a real-time chat feature independently

**Algrab - Full-Stack Developer**

- Designed full marketplace system including listings, search, and admin moderation
- Built scalable backend with caching (Redis) and role-based permissions
- Designed advanced access control systems for different user roles

**AICTI - Developer**

- Built and maintained a course platform and student management system
- Supported a user base of 3,000+ students
- Developed core features for course delivery, enrollment, and user management

**Debbol - Lead Engineer**

- Led engineering over a year in a fast-changing startup with multiple pivots
- Designed multi-tenant architecture with isolated portals via subdomains
- Built subscription-based payment systems and role-based access control
- Contributed across web and mobile platforms, adapting quickly to product changes

**Debolmarket - Full-Stack Developer**

- Built an ecommerce platform serving Ethiopian diaspora users
- Handled hundreds of requests and real transactions in production
- Integrated Stripe payments and Firebase backend
- Delivered the platform end-to-end within tight deadlines

**Ghost API - Open-Source**

- Built high-performance mock API generator in Go
- Dynamically generates structured test data for APIs
- Designed for flexibility across multiple data types and schemas

**Fluttree - Open-Source**

- Built a CLI tool to analyze and visualize Flutter project dependency graphs
- Supports JSON, DOT, and Mermaid outputs for developer tooling workflows
- Detects unused files and improves codebase maintainability

---

## Skills

**Languages:** JavaScript, TypeScript, Python, Go, Rust, SQL, HTML, CSS, Dart, Lua
**Frontend:** React, Next.js, Angular, Svelte  
**Backend:** Node.js, NestJS, Express, Hono, oRPC, TypeORM, Drizzle, RabbitMQ  
**Mobile:** Flutter, React Native  
**Databases & Tools:** Linux, Firebase, Redis, Stripe, PostgresQL, MongoDB, MySQL, Docker, Playwright, Vitest, GitLab CI, Grafana/Loki, AWS, GCP, Digital Ocean.
