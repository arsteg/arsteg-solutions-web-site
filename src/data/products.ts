/**
 * ARSTEG's own SaaS products.
 *
 * These are products we design, build and operate ourselves — the strongest
 * evidence of our product engineering capability. Feature lists below are
 * sourced from each product's public website; keep them in sync when the
 * products change.
 */

export type Product = {
  id: string;
  name: string;
  url: string;
  /** Host shown on cards/links (no protocol). */
  domain: string;
  tagline: string;
  /** One-sentence card summary. */
  summary: string;
  /** Longer description for the /products page. */
  description: string;
  features: string[];
  /** Who the product serves. */
  audience: string;
  /** Short category label (card badge + JSON-LD applicationCategory). */
  category: string;
  /** lucide-react icon name, resolved in components. */
  icon: string;
  /** Free trial / free tier note, if the product site states one. */
  trialNote?: string;
};

const products: Product[] = [
  {
    id: 'effortless-hrm',
    name: 'EffortlessHRM',
    url: 'https://www.effortlesshrm.com',
    domain: 'effortlesshrm.com',
    tagline: 'HR operations in one place',
    summary:
      'A cloud HR management platform that brings the everyday employee lifecycle — attendance, leave, timesheets and payroll inputs — into one system with employee self-service.',
    description:
      'EffortlessHRM is our cloud HR management platform for growing teams. It replaces the spreadsheets and disconnected tools HR teams juggle with a single system covering the day-to-day employee lifecycle, so HR spends less time on administration and employees can serve themselves.',
    features: [
      'Attendance and leave management',
      'Timesheets and payroll inputs',
      'Employee self-service portal',
      'Centralized employee records',
    ],
    audience: 'HR teams at small and mid-sized companies',
    category: 'HR Management',
    icon: 'UsersRound',
  },
  {
    id: 'effortless-insight',
    name: 'EffortlessInsight',
    url: 'https://effortlessinsight.in',
    domain: 'effortlessinsight.in',
    tagline: 'GST notices, found, explained and answered on time',
    summary:
      'An AI-powered GST compliance platform that automatically detects GST notices, explains them in plain language, tracks deadlines and drafts replies — nothing is filed without your approval.',
    description:
      'EffortlessInsight monitors the GST portal automatically, surfaces new notices with plain-English (and Hindi) AI summaries and risk scores, tracks every deadline with WhatsApp and email reminders, and drafts replies citing the relevant legal sections. Multi-GSTIN dashboards, role-based team access and a full audit trail make it practical for businesses, CAs and finance teams — and nothing is filed without your approval.',
    features: [
      'Automatic GST portal monitoring with 6-hourly sync',
      'AI summaries in plain English and Hindi, with risk scoring',
      'Deadline tracking with WhatsApp and email reminders',
      'AI-drafted replies citing the relevant legal sections',
      'Multi-GSTIN dashboard with role-based team access',
      'Document vault and full audit trail',
    ],
    audience: 'Business owners, chartered accountants and finance teams',
    category: 'GST Compliance',
    icon: 'ShieldCheck',
    trialNote: 'Free 14-day trial, no credit card required',
  },
  {
    id: 'effortless-promo',
    name: 'EffortlessPromo',
    url: 'https://effortlesspromo.com',
    domain: 'effortlesspromo.com',
    tagline: 'AI outbound sales, approved by you',
    summary:
      'An AI platform that runs end-to-end outbound sales — prospect research, verified emails, personalized campaigns, reply handling and pipeline — with compliance checks at send time.',
    description:
      'EffortlessPromo automates the whole outbound motion in one tool: it researches and verifies prospects with source attribution, writes personalized campaigns grounded in your approved brand claims, enforces compliance gates (suppression, consent, jurisdiction, frequency caps) at send time, classifies and drafts replies in a unified inbox, and tracks meetings and revenue in a built-in CRM.',
    features: [
      'Prospect research with source attribution and email verification',
      'AI campaigns grounded in approved brand claims',
      'Compliance gates enforced at send time',
      'Unified inbox with reply classification and drafting',
      'Built-in CRM pipeline for meetings and revenue',
    ],
    audience: 'Founders, small B2B teams and agencies',
    category: 'Sales Automation',
    icon: 'Send',
    trialNote: 'Free trial, no credit card required',
  },
];

export default products;
