/**
 * The four ways a client can engage ARSTEG's people.
 *
 * Copy describes how each model works in practice. It deliberately avoids
 * promising unrestricted availability, fixed onboarding times, free
 * replacements, specific rates or contractual protections — those are agreed in
 * writing per engagement. See src/data/hire.ts, which references these by key.
 */

import type { EngagementKey } from "./hire";

export interface EngagementModel {
  key: EngagementKey;
  name: string;
  /** One-line summary. */
  summary: string;
  /** "Best when…" qualifier. */
  bestWhen: string;
  /** Who directs the day-to-day work. */
  direction: string;
  /** Practical points. */
  points: string[];
}

export const engagementModels: EngagementModel[] = [
  {
    key: "individual",
    name: "Individual developer or specialist",
    summary:
      "One engineer with a specific skill, added to your team for a defined period.",
    bestWhen: "You have a clear gap — a language, a framework or a specialism — and need one capable person.",
    direction: "Your team sets daily priorities; the developer works within your process.",
    points: [
      "We propose a specific engineer against your technical needs and current availability",
      "They work in your repositories, task board and review process",
      "Scope, reporting and working-hours overlap are agreed before starting",
    ],
  },
  {
    key: "staff-augmentation",
    name: "Staff augmentation",
    summary:
      "One or more developers embedded in and managed by your existing team.",
    bestWhen: "You want extra hands who work as part of your team, under your leadership, for as long as you need them.",
    direction: "Your managers direct the work; our developers are part of your stand-ups and planning.",
    points: [
      "Developers integrate into your team, tools and ceremonies",
      "You retain technical and product direction day to day",
      "Capacity can change with agreed notice as your roadmap shifts",
    ],
  },
  {
    key: "dedicated-team",
    name: "Dedicated development team",
    summary:
      "A standing team — developers plus the lead or QA you need — focused on your roadmap.",
    bestWhen: "You have a sustained roadmap and want a team that builds continuity and context over time.",
    direction: "Shared: you own product direction; we help coordinate delivery within the team.",
    points: [
      "A team assembled around your stack and goals, working only on your roadmap",
      "Continuity of people and knowledge over the engagement",
      "Collaboration, reporting and overlap hours defined up front and reviewed as you go",
    ],
  },
  {
    key: "managed-project",
    name: "Managed project delivery",
    summary:
      "We take responsibility for delivering a defined scope, end to end.",
    bestWhen: "You have a clear outcome in mind and want a team to own the delivery rather than manage it yourself.",
    direction: "We coordinate delivery against agreed scope and milestones; you review and steer.",
    points: [
      "Discovery, scope and milestones agreed before the build",
      "We own planning, delivery and testing against the agreed outcome",
      "Regular demos and handover of working software, code and documentation",
    ],
  },
];

export function getEngagementModels(keys?: EngagementKey[]): EngagementModel[] {
  if (!keys) return engagementModels;
  return engagementModels.filter((m) => keys.includes(m.key));
}
