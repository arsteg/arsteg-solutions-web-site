/**
 * Hire-by-technology and hire-by-role content.
 *
 * Each entry powers one /hire/[slug] page. Copy is written per role — not
 * templated — and stays inside ARSTEG's demonstrated capability footprint
 * (the technologies already published across services and the Effortless
 * product line). No claim here asserts team size, developer counts, named
 * clients, certifications, screening guarantees, trial periods, replacement
 * promises, rates or onboarding timelines. Practical commitments are framed as
 * "agreed per engagement" rather than invented.
 *
 * `engagement` keys map to src/data/engagement.ts.
 */

export type EngagementKey =
  | "individual"
  | "staff-augmentation"
  | "dedicated-team"
  | "managed-project";

export interface HireRole {
  slug: string;
  /** Hub grouping. */
  group: "Languages & frameworks" | "Frontend & mobile" | "AI, quality & delivery";
  /** Short display name, e.g. ".NET developers". */
  name: string;
  /** Page H1. */
  h1: string;
  /** <title> text. */
  metaTitle: string;
  /** Meta description (<=160 chars). */
  metaDescription: string;
  /** One-line summary used on the hub and in the hero. */
  tagline: string;
  /** 1–2 sentence opening value proposition. */
  intro: string;
  /** Technology chips shown as tags. */
  stack: string[];
  /** Who the offering suits. */
  whoFor: string[];
  /** Problems the specialist helps address. */
  problems: string[];
  /** Concrete examples of work. */
  examples: string[];
  /** Relevant technical capabilities (detail bullets). */
  skills: string[];
  /** How collaboration works day to day (4 steps). */
  collaboration: { title: string; detail: string }[];
  /** Supported engagement options for this role. */
  engagement: EngagementKey[];
  faqs: { q: string; a: string }[];
  /** Related hire slugs. */
  related: string[];
  /** Related service slugs (src/data/services.json). */
  relatedServices: string[];
}

export const hireRoles: HireRole[] = [
  {
    slug: "net-developers",
    group: "Languages & frameworks",
    name: ".NET developers",
    h1: "Hire .NET developers in India",
    metaTitle: "Hire .NET Developers in India (C#, ASP.NET Core)",
    metaDescription:
      "Add experienced C# / .NET developers to your team from India. ASP.NET Core, Web API, SQL Server and legacy modernization — working in your repos and your time zone.",
    tagline: "C#, ASP.NET Core and Web API engineers who fit into your existing team.",
    intro:
      "Engage .NET developers who build and maintain real production systems — from ASP.NET Core services and Web APIs to the SQL Server estates behind them. They work the way your team already works, in your repositories and review process.",
    stack: [
      "C# / .NET 8",
      "ASP.NET Core",
      "Web API / Minimal APIs",
      "Entity Framework Core",
      "SQL Server / PostgreSQL",
      "Azure",
      "Blazor / MVC",
      "xUnit / NUnit",
    ],
    whoFor: [
      "CTOs and engineering managers on a Microsoft-stack platform who need senior .NET capacity without a months-long hire",
      "Teams maintaining an established ASP.NET application while shipping new features in parallel",
      "Product owners modernizing a legacy .NET Framework, WebForms, VB6 or Classic ASP system incrementally",
    ],
    problems: [
      "A .NET hire is taking months and the roadmap is slipping in the meantime",
      "An ageing ASP.NET application is slow to change and risky to touch",
      "APIs and background jobs need building but your senior engineers are already committed",
      "SQL Server queries and stored procedures have become a performance bottleneck",
    ],
    examples: [
      "Design and ship ASP.NET Core Web APIs with authentication, validation and automated tests",
      "Incrementally modernize a .NET Framework or WebForms app behind a running system rather than a risky big-bang rewrite",
      "Build background processing, scheduled jobs and integration endpoints",
      "Profile and tune SQL Server queries, indexes and stored procedures",
    ],
    skills: [
      "ASP.NET Core MVC, Razor Pages, Blazor and Web API / Minimal APIs",
      "Entity Framework Core and Dapper; SQL Server and PostgreSQL schema and query work",
      "Authentication and authorization (JWT, OAuth, Identity)",
      "Azure App Service, Functions and SQL; containerized deployment",
      "Unit and integration testing with xUnit / NUnit and CI pipelines",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree the roadmap area, repositories and definition of done before anyone starts." },
      { title: "Your process", detail: "Developers work in your source control, task board and code review — not a black box." },
      { title: "Overlap hours", detail: "We agree working-hours overlap with your team for stand-ups and reviews, confirmed per engagement." },
      { title: "Visible progress", detail: "Regular demos and an agreed reporting cadence so you always know where things stand." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team", "managed-project"],
    faqs: [
      {
        q: "Can a .NET developer work inside our existing codebase and standards?",
        a: "Yes — that is the usual arrangement. Developers work in your repositories, follow your coding standards and review process, and raise pull requests like any other team member.",
      },
      {
        q: "Can you help modernize a legacy .NET or Classic ASP application?",
        a: "Yes. We favour phased modernization — building alongside and incrementally replacing the old system — rather than a big-bang rewrite that puts your operations at risk. We start by assessing the source, dependencies and deployment environment.",
      },
      {
        q: "Do we keep ownership of the code?",
        a: "Source-code access, IP rights and handover are set out in the written agreement before work starts.",
      },
      {
        q: "Can we start with one developer and scale later?",
        a: "Tell us the skills and time commitment you need. We discuss a suitable arrangement and current availability, and changing capacity is handled with agreed notice.",
      },
    ],
    related: ["full-stack-developers", "devops-engineers", "qa-automation-engineers"],
    relatedServices: ["custom-software-development", "desktop-application-development"],
  },
  {
    slug: "python-developers",
    group: "Languages & frameworks",
    name: "Python developers",
    h1: "Hire Python developers in India",
    metaTitle: "Hire Python Developers in India (Django, FastAPI)",
    metaDescription:
      "Engage Python developers from India for APIs, backends, automation and data work. FastAPI, Django and Flask experience, working in your team and time zone.",
    tagline: "Backend, API and automation engineers fluent in FastAPI, Django and Flask.",
    intro:
      "Add Python developers who build dependable backends, APIs and automation — the kind of work that quietly carries a product. They integrate with your team and your tools rather than working in isolation.",
    stack: [
      "Python 3",
      "FastAPI",
      "Django",
      "Flask",
      "PostgreSQL / MongoDB",
      "Celery / task queues",
      "Pytest",
      "AWS / Azure",
    ],
    whoFor: [
      "Teams that need backend and API capacity on a Python stack without waiting out a full hiring cycle",
      "Founders with a working prototype that now needs a maintainable, tested backend",
      "Data-heavy products needing pipelines, automation and integration work",
    ],
    problems: [
      "A prototype grew into production but was never built to be maintained or tested",
      "Backend and integration work is piling up behind a small core team",
      "Manual data processing and reporting is eating hours that should be automated",
      "APIs need to be reliable, documented and secured before you can expose them",
    ],
    examples: [
      "Build and document REST APIs with FastAPI or Django REST Framework, with auth and automated tests",
      "Turn a notebook or script-based prototype into a tested, deployable service",
      "Build data pipelines, scheduled jobs and automation with task queues",
      "Integrate third-party APIs and webhooks with retries, idempotency and logging",
    ],
    skills: [
      "FastAPI, Django (incl. DRF) and Flask application and API development",
      "PostgreSQL and MongoDB data modelling; migrations and query tuning",
      "Asynchronous work and background processing with Celery / task queues",
      "Testing with pytest and CI pipelines; typed Python where it helps",
      "Containerized deployment to AWS or Azure",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree the backlog area, repositories and acceptance criteria up front." },
      { title: "Your process", detail: "Work happens in your version control and review workflow, with readable, tested commits." },
      { title: "Overlap hours", detail: "A workable overlap with your team for planning and reviews is agreed per engagement." },
      { title: "Visible progress", detail: "Regular demos and reporting so priorities stay aligned as things change." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team", "managed-project"],
    faqs: [
      {
        q: "FastAPI, Django or Flask — can you work with our framework?",
        a: "Yes. We work across FastAPI, Django and Flask and pick up your existing framework and conventions rather than imposing a rewrite.",
      },
      {
        q: "Can you harden a prototype for production?",
        a: "That is a common starting point. We add tests, structure, error handling, security and a deployment pipeline so the code is safe to build on.",
      },
      {
        q: "Do your Python developers also do AI / LLM work?",
        a: "Some do. If your need is specifically building with language models, retrieval or AI automation, see our AI developers page — the same engineering discipline applies.",
      },
      {
        q: "How do you report progress and hours?",
        a: "We agree a task backlog, reporting cadence and an approval process for additional work before starting. Commercial terms are set out in the proposal.",
      },
    ],
    related: ["ai-developers", "full-stack-developers", "devops-engineers"],
    relatedServices: ["integrations-automation", "custom-software-development"],
  },
  {
    slug: "react-developers",
    group: "Frontend & mobile",
    name: "React developers",
    h1: "Hire React & Next.js developers in India",
    metaTitle: "Hire React & Next.js Developers in India",
    metaDescription:
      "Add React and Next.js developers to your team from India. Accessible, performant UIs in TypeScript, working in your codebase and your time zone.",
    tagline: "React, Next.js and TypeScript engineers who build fast, accessible interfaces.",
    intro:
      "Engage React developers who care about the things users feel — performance, accessibility and a UI that behaves. They work in your component library and conventions, not around them.",
    stack: [
      "React 19",
      "Next.js",
      "TypeScript",
      "Redux / TanStack Query",
      "Tailwind / CSS-in-JS",
      "Jest / Testing Library",
      "Playwright",
      "Vite",
    ],
    whoFor: [
      "Product teams that need to ship frontend features faster than their current capacity allows",
      "Companies rebuilding or extending a web app and wanting React / Next.js experience",
      "Teams whose UI has accessibility, performance or consistency debt to pay down",
    ],
    problems: [
      "Frontend work is the bottleneck between a finished design and a shipped feature",
      "The UI is slow, inconsistent, or fails basic accessibility checks",
      "A component library or design system needs building and maintaining",
      "Server-rendering, SEO and Core Web Vitals need real attention, not guesswork",
    ],
    examples: [
      "Build features in an existing React / Next.js app against your design system",
      "Improve rendering performance and Core Web Vitals on a slow web app",
      "Create and document a reusable component library with tests",
      "Add keyboard and screen-reader accessibility to existing interfaces",
    ],
    skills: [
      "React (hooks, context, suspense) and Next.js App Router with server components",
      "TypeScript across the frontend; state and data fetching with Redux or TanStack Query",
      "Accessible, responsive UI and design-system work",
      "Component and end-to-end testing with Testing Library and Playwright",
      "Performance profiling, code-splitting and Core Web Vitals work",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree which surfaces and components are in scope, and the definition of done." },
      { title: "Your process", detail: "Developers work in your repo, design handoff and review flow — matching your conventions." },
      { title: "Overlap hours", detail: "Working-hours overlap for design reviews and demos is agreed per engagement." },
      { title: "Visible progress", detail: "Previews and demos on every iteration so you see the UI, not just a status update." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team", "managed-project"],
    faqs: [
      {
        q: "Will developers follow our existing component library and conventions?",
        a: "Yes. They adopt your design system, linting and patterns, and contribute through your normal review process.",
      },
      {
        q: "Can you work on Next.js server components and SSR?",
        a: "Yes — including the App Router, server components, rendering strategy and the SEO and performance work that goes with them.",
      },
      {
        q: "Do you handle accessibility?",
        a: "We build to recognised accessibility practices — semantic markup, keyboard support and focus management — and can audit and remediate existing interfaces.",
      },
      {
        q: "Can one engineer cover both React and the API?",
        a: "If you need frontend plus backend, a full-stack engagement often fits better — see our full-stack developers page.",
      },
    ],
    related: ["frontend-developers", "full-stack-developers", "qa-automation-engineers"],
    relatedServices: ["custom-software-development", "mobile-app-development"],
  },
  {
    slug: "frontend-developers",
    group: "Frontend & mobile",
    name: "Frontend engineers",
    h1: "Hire frontend engineers in India",
    metaTitle: "Hire Frontend Engineers in India (Angular, Vue)",
    metaDescription:
      "Engage frontend engineers from India across Angular, Vue, React and TypeScript. Accessible, maintainable UIs built in your codebase and time zone.",
    tagline: "Angular, Vue, React and TypeScript engineers for maintainable, accessible UIs.",
    intro:
      "Add frontend engineers whose strength is the whole discipline — not one framework. Whether your app is on Angular, Vue or React, they build interfaces your team can keep maintaining.",
    stack: [
      "TypeScript / JavaScript",
      "Angular",
      "Vue",
      "React",
      "HTML / CSS",
      "Tailwind / SCSS",
      "Vite / Webpack",
      "Cypress / Playwright",
    ],
    whoFor: [
      "Teams on Angular or Vue who need experienced frontend capacity quickly",
      "Companies standardising a sprawling UI onto a consistent, testable foundation",
      "Products that need strong HTML/CSS and accessibility craft, not just framework wiring",
    ],
    problems: [
      "Frontend hiring is slow and framework-specific experience is hard to find",
      "The UI has drifted into inconsistent patterns that slow every new feature",
      "Accessibility and responsive behaviour are an afterthought and now a liability",
      "A migration between frameworks or major versions keeps being deferred",
    ],
    examples: [
      "Build and maintain features in an Angular or Vue application to your standards",
      "Consolidate inconsistent UI into a documented, reusable component set",
      "Improve responsive behaviour and accessibility across an existing product",
      "Support a framework or major-version migration incrementally",
    ],
    skills: [
      "Angular (components, services, RxJS) and Vue (Composition API, Pinia)",
      "Strong TypeScript, HTML and modern CSS / layout fundamentals",
      "Accessible, responsive and internationalised interfaces",
      "Component and end-to-end testing with Cypress or Playwright",
      "Build tooling, bundling and frontend performance",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We confirm the framework, surfaces in scope and acceptance criteria before starting." },
      { title: "Your process", detail: "Engineers work in your repo and review flow and adopt your existing patterns." },
      { title: "Overlap hours", detail: "A workable overlap for reviews and planning is agreed per engagement." },
      { title: "Visible progress", detail: "Iterative previews and demos so the interface is reviewed as it is built." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team"],
    faqs: [
      {
        q: "Which frontend frameworks do you cover?",
        a: "Primarily Angular, Vue and React with TypeScript. Tell us your stack and we confirm the right experience before proposing anyone.",
      },
      {
        q: "Can you help us migrate frameworks or upgrade a major version?",
        a: "Yes, and we favour an incremental path that keeps the product shippable throughout rather than a risky freeze-and-rewrite.",
      },
      {
        q: "Is accessibility part of the work?",
        a: "Yes — semantic markup, keyboard support, focus and contrast are built in, and we can audit and remediate existing UIs.",
      },
      {
        q: "What if we also need backend work?",
        a: "Consider a full-stack engagement, or pair a frontend engineer with a .NET or Python developer — we will advise on the mix.",
      },
    ],
    related: ["react-developers", "full-stack-developers", "qa-automation-engineers"],
    relatedServices: ["custom-software-development", "mobile-app-development"],
  },
  {
    slug: "full-stack-developers",
    group: "Languages & frameworks",
    name: "Full-stack developers",
    h1: "Hire full-stack developers in India",
    metaTitle: "Hire Full-Stack Developers in India",
    metaDescription:
      "Engage full-stack developers from India who own a feature end to end — frontend, API and database. React, Node, .NET and Python, in your team and time zone.",
    tagline: "Engineers who own a feature end to end — UI, API and data.",
    intro:
      "Add full-stack developers who can take a feature from the interface through the API to the database and out to production. Ideal when you need momentum without splitting every task across people.",
    stack: [
      "React / Next.js",
      "Node.js",
      ".NET",
      "Python",
      "TypeScript",
      "PostgreSQL / SQL Server",
      "REST APIs",
      "AWS / Azure",
    ],
    whoFor: [
      "Early-stage and lean teams that need one capable engineer to move a whole feature",
      "Companies with a roadmap that spans frontend and backend but limited headcount",
      "Founders who need delivery pace without coordinating many specialists",
    ],
    problems: [
      "Features stall because frontend and backend work sits with different, busy people",
      "You need someone who can own a slice of the product end to end",
      "Hiring a versatile senior generalist is proving slow and expensive",
      "A small team needs to ship more without the overhead of coordination",
    ],
    examples: [
      "Deliver a complete feature: UI, API endpoints, data model and tests",
      "Stand up a new application with authentication, a database and deployment",
      "Build an internal tool or dashboard end to end against real data",
      "Add an integration that spans the frontend, a backend service and a third-party API",
    ],
    skills: [
      "Frontend with React / Next.js and TypeScript",
      "Backend with Node.js, .NET or Python and REST APIs",
      "Relational and document data modelling (PostgreSQL, SQL Server, MongoDB)",
      "Authentication, authorization and secure handling of secrets",
      "Testing and deployment pipelines to AWS or Azure",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree the feature slices each engineer owns and how they integrate with your team's work." },
      { title: "Your process", detail: "Work flows through your repositories, board and review process end to end." },
      { title: "Overlap hours", detail: "Overlap for planning, pairing and reviews is agreed per engagement." },
      { title: "Visible progress", detail: "Each feature is demoed working, front to back, not reported in the abstract." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team", "managed-project"],
    faqs: [
      {
        q: "What stacks do your full-stack developers cover?",
        a: "React / Next.js on the frontend, with Node.js, .NET or Python on the backend. We match the engineer to your existing stack.",
      },
      {
        q: "Is a full-stack developer the right choice, or specialists?",
        a: "Full-stack suits lean teams and end-to-end feature ownership. If the work is deep on one side — heavy UI or heavy backend — dedicated specialists or a small team may fit better. We will be honest about which suits your work.",
      },
      {
        q: "Can full-stack developers work within our architecture?",
        a: "Yes. They adopt your architecture, conventions and review process rather than introducing a parallel way of working.",
      },
      {
        q: "Can we scale from one developer to a team?",
        a: "Yes — many engagements start with one engineer and grow into a dedicated team. Changing capacity is handled with agreed notice.",
      },
    ],
    related: ["react-developers", "net-developers", "python-developers"],
    relatedServices: ["custom-software-development", "integrations-automation"],
  },
  {
    slug: "ai-developers",
    group: "AI, quality & delivery",
    name: "AI developers",
    h1: "Hire AI developers in India",
    metaTitle: "Hire AI Developers in India (LLM, RAG, Agents)",
    metaDescription:
      "Engage AI developers from India who build with existing language models — chatbots, AI agents, RAG assistants and LLM integrations — with human review and real production integration.",
    tagline: "Engineers who build real products on top of existing AI models.",
    intro:
      "Add AI developers who turn a promising prototype into something your business can actually run — chatbots, AI agents, retrieval assistants and LLM integrations, built with evaluation and a human in the loop. We build on existing models; we do not train foundation models from scratch.",
    stack: [
      "OpenAI / Anthropic / open models",
      "RAG & vector search",
      "LangChain / LlamaIndex",
      "Python / TypeScript",
      "Embeddings",
      "Workflow orchestration",
      "Evaluation & monitoring",
      "FastAPI / Node.js",
    ],
    whoFor: [
      "Teams with an AI prototype that now needs to be integrated into a real workflow",
      "Product owners adding an assistant, chatbot or agent to an existing application",
      "Companies with internal knowledge they want to make searchable and useful",
    ],
    problems: [
      "A demo impressed everyone but there is no path from prototype to production",
      "An assistant needs to answer from your own content, accurately and with sources",
      "AI output needs review, guardrails and monitoring before it can be trusted",
      "LLM features need to connect to real systems, data and approvals — not just chat",
    ],
    examples: [
      "Build a retrieval-augmented (RAG) knowledge assistant over your documents, with citations",
      "Integrate an LLM into an existing product with prompt, context and cost controls",
      "Build an AI agent or workflow that takes actions, with human review at the decisions that matter",
      "Add evaluation, logging and monitoring so quality and cost are measured in production",
    ],
    skills: [
      "LLM integration with hosted and open models; prompt and context design",
      "Retrieval-augmented generation, embeddings and vector search",
      "Agent and workflow orchestration with human-in-the-loop review steps",
      "Evaluation, guardrails, logging and cost/latency monitoring",
      "Backends in Python or Node.js that connect AI to real systems and data",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree the use case, the data involved and what 'good enough to ship' means before building." },
      { title: "Human in the loop", detail: "For anything consequential we design review and fallback steps rather than full autonomy." },
      { title: "Overlap hours", detail: "Overlap for reviews and iteration on prompts and behaviour is agreed per engagement." },
      { title: "Measured quality", detail: "We instrument evaluation, accuracy and cost so decisions rest on evidence, not demos." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team", "managed-project"],
    faqs: [
      {
        q: "Do you train your own AI models?",
        a: "No. We build applications on top of existing hosted and open models — integration, retrieval, agents, evaluation and production engineering. We do not carry out foundation-model research or training, and we will say so plainly rather than imply otherwise.",
      },
      {
        q: "How do you keep AI output reliable?",
        a: "We design for it: grounding answers in your data, adding validation and human review for anything that matters, and instrumenting evaluation and monitoring so quality and cost are measured, not assumed.",
      },
      {
        q: "Can you integrate AI into our existing product?",
        a: "Yes — that is most of the work. We connect models to your data, systems and approval steps and ship behind your existing auth and infrastructure.",
      },
      {
        q: "Our own products use AI — is this real experience?",
        a: "Yes. ARSTEG builds and operates AI-powered products of its own, including an AI GST-compliance platform and an AI outbound-sales platform, both designed around human approval before anything consequential happens.",
      },
    ],
    related: ["python-developers", "full-stack-developers", "devops-engineers"],
    relatedServices: ["integrations-automation", "custom-software-development"],
  },
  {
    slug: "qa-automation-engineers",
    group: "AI, quality & delivery",
    name: "QA automation engineers",
    h1: "Hire QA automation engineers & SDETs in India",
    metaTitle: "Hire QA Automation Engineers & SDETs in India",
    metaDescription:
      "Engage QA automation engineers and SDETs from India. Test strategy, automated UI and API suites, and CI integration — plus manual QA where it fits, in your time zone.",
    tagline: "Test automation and SDET skills to make your releases boring — in a good way.",
    intro:
      "Add QA engineers who treat testing as engineering: a maintainable automation suite wired into CI, sensible coverage, and manual exploratory testing where it genuinely helps. The goal is releases you can trust.",
    stack: [
      "Playwright",
      "Cypress",
      "Selenium",
      "REST API testing",
      "Jest / pytest",
      "CI (GitHub Actions / Azure)",
      "Appium",
      "Test strategy",
    ],
    whoFor: [
      "Teams releasing nervously because regression testing is manual and slow",
      "Products that have grown faster than their test coverage",
      "Engineering managers who want automation wired into CI, not a pile of flaky scripts",
    ],
    problems: [
      "Every release risks breaking something that already worked",
      "Manual regression testing is slow and can't keep up with the release pace",
      "There are automated tests, but they're flaky and nobody trusts them",
      "There's no clear test strategy or view of what is actually covered",
    ],
    examples: [
      "Design a test strategy and build a maintainable UI automation suite in Playwright or Cypress",
      "Add API and contract tests and wire the whole suite into CI with clear reporting",
      "Stabilise a flaky existing suite and bring it back to something the team trusts",
      "Run structured manual and exploratory testing for areas automation can't cover well",
    ],
    skills: [
      "UI automation with Playwright, Cypress or Selenium",
      "API, integration and contract testing",
      "Test strategy, coverage planning and defect reporting",
      "CI integration with reporting and sensible gating",
      "Mobile test automation with Appium where needed; accessibility and performance checks",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree which journeys matter most and what coverage and gating you want before building." },
      { title: "Your process", detail: "Tests live in your repo and CI, reviewed like any other code, not run on the side." },
      { title: "Overlap hours", detail: "Overlap with your developers for triage and release windows is agreed per engagement." },
      { title: "Visible quality", detail: "Clear reporting on coverage, pass rates and defects so release confidence is evidence-based." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team"],
    faqs: [
      {
        q: "Automated or manual QA — which do you provide?",
        a: "Both, with a bias toward maintainable automation for regression and manual exploratory testing where it adds the most value. We agree the balance with you.",
      },
      {
        q: "Which automation tools do you use?",
        a: "Commonly Playwright, Cypress or Selenium for UI, plus API and contract testing, with Appium for mobile where needed. We work within your existing tooling where you already have it.",
      },
      {
        q: "Can you fix our flaky, distrusted test suite?",
        a: "Yes — stabilising an existing suite, removing flakiness and restoring trust is a common engagement, often more valuable than starting over.",
      },
      {
        q: "Will QA engineers work alongside our developers?",
        a: "Yes. They sit in your workflow — triaging with developers, reviewing in the same process and gating releases through your CI.",
      },
    ],
    related: ["devops-engineers", "react-developers", "full-stack-developers"],
    relatedServices: ["custom-software-development", "mobile-app-development"],
  },
  {
    slug: "devops-engineers",
    group: "AI, quality & delivery",
    name: "DevOps & cloud engineers",
    h1: "Hire DevOps & cloud engineers in India",
    metaTitle: "Hire DevOps & Cloud Engineers in India",
    metaDescription:
      "Engage DevOps and cloud engineers from India for CI/CD, infrastructure as code, containers and observability on AWS and Azure — working in your stack and time zone.",
    tagline: "CI/CD, cloud infrastructure and observability done properly.",
    intro:
      "Add DevOps and cloud engineers who make shipping safe and repeatable — pipelines, infrastructure as code, containers and the monitoring that tells you something's wrong before your customers do.",
    stack: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions / Azure Pipelines",
      "Observability",
      "Linux",
    ],
    whoFor: [
      "Teams whose deployments are manual, fragile or understood by only one person",
      "Companies moving to the cloud or to containers and wanting it done right",
      "Engineering managers who need reliable pipelines and real observability",
    ],
    problems: [
      "Deployments are manual, slow and risky — and a bottleneck for the whole team",
      "Infrastructure is configured by hand and can't be reproduced or reviewed",
      "There's no real monitoring, so problems surface as customer complaints",
      "Cloud costs are rising and nobody has clear visibility into why",
    ],
    examples: [
      "Build CI/CD pipelines with automated tests, environments and safe rollbacks",
      "Codify infrastructure with Terraform so it's reviewable and reproducible",
      "Containerize applications and deploy to managed Kubernetes or container services",
      "Set up logging, metrics, alerting and dashboards for real observability",
    ],
    skills: [
      "AWS and Azure core services; networking and IAM fundamentals",
      "CI/CD with GitHub Actions or Azure Pipelines",
      "Infrastructure as code with Terraform; containers with Docker and Kubernetes",
      "Observability: logging, metrics, tracing and alerting",
      "Secrets management, backups and cost visibility",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree the platforms, environments and what 'reliable' means for your team before changes." },
      { title: "Your process", detail: "Infrastructure and pipeline changes go through review as code — not undocumented tweaks." },
      { title: "Overlap hours", detail: "Overlap for release windows and incident response is agreed per engagement." },
      { title: "Safe changes", detail: "Changes are staged, reversible and documented so your team can operate them after handover." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team"],
    faqs: [
      {
        q: "Which clouds do you work with?",
        a: "Primarily AWS and Azure. Tell us your environment and we confirm the right experience before proposing anyone.",
      },
      {
        q: "Can you move us to infrastructure as code without downtime?",
        a: "We codify and migrate infrastructure incrementally, keeping the running system stable and changes reviewable, rather than a risky all-at-once cutover.",
      },
      {
        q: "Will our team be able to run things after you hand over?",
        a: "Yes — reproducible infrastructure, documentation and knowledge transfer are part of the work, not an afterthought.",
      },
      {
        q: "Can you help control our cloud costs?",
        a: "We can add cost visibility and address obvious waste, alongside the reliability work. We don't promise specific savings figures without first understanding your environment.",
      },
    ],
    related: ["qa-automation-engineers", "python-developers", "net-developers"],
    relatedServices: ["custom-software-development", "integrations-automation"],
  },
  {
    slug: "mobile-app-developers",
    group: "Frontend & mobile",
    name: "Mobile app developers",
    h1: "Hire mobile app developers in India",
    metaTitle: "Hire Mobile App Developers in India (React Native, Flutter)",
    metaDescription:
      "Engage mobile developers from India building cross-platform iOS and Android apps with React Native and Flutter — connected backends, store releases and maintenance.",
    tagline: "Cross-platform iOS and Android apps with React Native and Flutter.",
    intro:
      "Add mobile developers who ship real apps — built cross-platform, connected to a dependable backend, tested on the devices your users actually carry, and prepared for the app stores.",
    stack: [
      "React Native",
      "Flutter",
      "TypeScript / Dart",
      "REST APIs",
      "Push notifications",
      "App Store / Play Store",
      "Offline sync",
      "Firebase",
    ],
    whoFor: [
      "Businesses building a customer app or a mobile companion to an existing platform",
      "Teams with field staff who need data capture and workflows away from a desk",
      "Companies whose existing app needs better usability, integration or maintenance",
    ],
    problems: [
      "Customers need a simpler way to use your service on a phone",
      "Field teams need reliable data capture and workflows, sometimes offline",
      "An existing app is hard to maintain or feels dated and clunky",
      "Building and maintaining separate iOS and Android codebases is too costly",
    ],
    examples: [
      "Build a cross-platform app for iOS and Android with a shared codebase",
      "Connect a mobile app to backend APIs, authentication and push notifications",
      "Add offline capture and synchronisation for unreliable-connectivity workflows",
      "Prepare and support App Store and Play Store releases, then maintain the app",
    ],
    skills: [
      "React Native and Flutter cross-platform development",
      "Integration with REST APIs, authentication and push notifications",
      "Offline storage, synchronisation and conflict handling",
      "Device and OS-version testing; release preparation for both stores",
      "App performance, crash reporting and ongoing maintenance",
    ],
    collaboration: [
      { title: "Shared scope", detail: "We agree platforms, key journeys and a first release before building." },
      { title: "Your process", detail: "Work happens in your repositories and review flow, with builds you can try each iteration." },
      { title: "Overlap hours", detail: "Overlap for reviews and release coordination is agreed per engagement." },
      { title: "Visible progress", detail: "Installable builds on real devices each iteration, not just screenshots." },
    ],
    engagement: ["individual", "staff-augmentation", "dedicated-team", "managed-project"],
    faqs: [
      {
        q: "Can one codebase serve both iOS and Android?",
        a: "React Native and Flutter share substantial code across platforms. Device integrations and experience requirements decide how much is shared, and we scope that with you.",
      },
      {
        q: "Can the app work offline?",
        a: "Offline support needs deliberate storage, sync and conflict-handling design. Tell us where connectivity is unreliable so we can scope it properly.",
      },
      {
        q: "Will you help with app store releases?",
        a: "Release preparation can be in scope. Store accounts, review timelines and final approval remain subject to Apple's and Google's requirements.",
      },
      {
        q: "Can you maintain an app we already have?",
        a: "Yes. We start by reviewing the codebase, dependencies and release setup, then agree a maintenance and improvement plan.",
      },
    ],
    related: ["react-developers", "full-stack-developers", "qa-automation-engineers"],
    relatedServices: ["mobile-app-development", "custom-software-development"],
  },
];

export function getHireRole(slug: string): HireRole | undefined {
  return hireRoles.find((r) => r.slug === slug);
}

export const hireGroups: HireRole["group"][] = [
  "Languages & frameworks",
  "Frontend & mobile",
  "AI, quality & delivery",
];
