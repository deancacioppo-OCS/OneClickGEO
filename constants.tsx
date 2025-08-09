import React from 'react';
import type { InfoCardItem, PricingPlan, FoundationPlan } from './types';
import { BookOpenIcon, PuzzlePieceIcon, SparklesIcon, CodeBracketIcon, MagnifyingGlassIcon, PencilSquareIcon, WrenchScrewdriverIcon, ChartPieIcon } from './components/Icons';

export const GEO_PRINCIPLES: InfoCardItem[] = [
  {
    icon: <BookOpenIcon className="h-10 w-10 text-cyan-400" />,
    title: 'Demonstrating E-E-A-T',
    description: 'Create expert-level content that clearly demonstrates Experience, Expertise, Authoritativeness, and Trustworthiness, signals AI models are trained to prioritize.',
  },
  {
    icon: <PuzzlePieceIcon className="h-10 w-10 text-indigo-400" />,
    title: 'Content Atomization',
    description: 'Structure content for machine consumption by breaking down complex topics into "atomic" units—clear statements, Q&As, and data tables that an AI can easily parse and cite.',
  },
  {
    icon: <SparklesIcon className="h-10 w-10 text-rose-400" />,
    title: 'Creating "AI-Resistant" Content',
    description: 'Invest in proprietary data, original research, and unique insights that AI struggles to summarize, providing value beyond a simple answer and incentivizing clicks.',
  },
    {
    icon: <CodeBracketIcon className="h-10 w-10 text-emerald-400" />,
    title: 'Pervasive Schema Markup',
    description: 'Implement structured data to explicitly label entities on your pages, removing ambiguity and making your content machine-readable for AI models.',
  },
];

export const GEO_SERVICES: InfoCardItem[] = [
  {
    icon: <MagnifyingGlassIcon className="h-10 w-10 text-cyan-400" />,
    title: 'GEO Audit & Strategy',
    description: 'We analyze your current digital presence, identify visibility gaps in AI Overviews, and build a strategic roadmap for success in the new search landscape.',
  },
  {
    icon: <PencilSquareIcon className="h-10 w-10 text-indigo-400" />,
    title: 'Citation-Ready Content',
    description: 'Our team develops and optimizes your content to be "snippet-worthy," structured for machine consumption and primed to be used as a source in AI answers.',
  },
  {
    icon: <WrenchScrewdriverIcon className="h-10 w-10 text-rose-400" />,
    title: 'Technical GEO',
    description: 'We perform a deep-dive implementation of advanced schema markup and site structure optimizations to ensure search engines understand your authority.',
  },
  {
    icon: <ChartPieIcon className="h-10 w-10 text-emerald-400" />,
    title: 'AI Overview Reporting',
    description: 'Go beyond traffic metrics. We track your brand\'s citation frequency, sentiment, and share of voice within AI results to measure what truly matters now.',
  },
];

export const FOUNDATION_PLAN: FoundationPlan = {
  name: 'Phase 1: GEO Foundation & Strategy',
  description: 'A comprehensive 3-month strategic deep-dive to build your brand\'s foundation for AI search visibility and establish a clear roadmap for long-term success.',
  price: '$2,250',
  priceDetails: '/month',
  duration: 'For the First 3 Months',
  features: [
    'Deep-Dive GEO Audit',
    'Keyword & Competitor Analysis',
    'Topical Authority Mapping',
    'Google Business Profile GEO Setup',
    'On-Page & Technical GEO for Core Pages',
    'Initial Content & Video Strategy',
    'AI Overview Tracking & Reporting Setup',
  ],
};

export const ONGOING_PLANS: PricingPlan[] = [
  {
    name: 'GEO Growth',
    audience: 'For businesses starting to build their topical authority and AI visibility.',
    price: '$1,000',
    priceDetails: '/month',
    isMostPopular: false,
    features: [
      'Up to 15 Keywords Tracked',
      '1 Full Topic Cluster/Month (Blog Post, Video, Social Posts)',
      'On-Page & Technical GEO',
      'Local Citation Management',
      'Google Business Profile Optimization',
      'Monthly Performance & AI Reporting',
      'Dedicated Account Manager',
    ],
  },
  {
    name: 'GEO Accelerator',
    audience: 'For growing brands looking to accelerate their market presence and outpace competitors.',
    price: '$1,500',
    priceDetails: '/month',
    isMostPopular: true,
    features: [
      'Everything in Growth, plus:',
      'Up to 40 Keywords Tracked',
      '2 Full Topic Clusters/Month (Blog Posts, Videos, Social Posts)',
      'Advanced Topical Authority Strategy',
      'Proactive Content Refreshing',
      'Competitor Sentiment Analysis',
      'Priority Support',
    ],
  },
  {
    name: 'GEO Scale',
    audience: 'For established brands aiming to dominate the conversation and become the definitive authority.',
    price: '$2,500+',
    priceDetails: '/month',
    isMostPopular: false,
    features: [
      'Everything in Accelerator, plus:',
      'Up to 100 Keywords Tracked',
      '4+ Full Topic Clusters/Month (Blog Posts, Videos, Social Posts)',
      'Comprehensive E-E-A-T Content Strategy',
      'Knowledge Graph Integrity Monitoring',
      'Digital PR & Link Building Outreach',
      'Dedicated GEO Strategist & Quarterly Reviews',
    ],
  },
];