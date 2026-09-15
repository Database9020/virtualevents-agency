// Central copy + data store for the marketing site. Keeping this in one
// place means the FAQ list, pricing table, etc. only need to be edited
// once and stay in sync across the homepage, the standalone pricing page,
// and the FAQPage / Service JSON-LD.

export const SITE = {
  name: 'Virtual Events',
  legalName: 'Virtual Events Agency',
  url: 'https://virtualevents.agency',
  strategyCallUrl: 'https://cal.eu/virtualevents.agency/strategycall',
  defaultTitle: 'Virtual Event System & Agency | Scale Your Events Effortlessly',
  defaultDescription:
    'Looking for a predictable virtual event system? Our end-to-end management covers everything from tech setup to real-world execution. Simple pricing, no surprises.',
  shareImage: '/og-image.jpg',
  twitterHandle: '',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export const HERO = {
  headingPre: 'We Handle Your',
  headingAccent: 'Virtual Events End-to-End.',
  headingPost: 'You Just Show Up.',
  subheading:
    'We help you turn virtual events into a consistent pipeline of leads, content, and revenue without hiring a full team. From weekly webinars to larger live sessions.',
  subheadingSecondary: 'Built for teams who already have marketing and want events that actually convert.',
  ctaLabel: 'Book A Free Strategy Call',
  ctaNote: "No obligation. We'll show you exactly how this would work for your business.",
  statLine: 'Backed by experience running 500+ events per year and scaling to 300,000+ viewers.',
};

export const SERVICES = [
  {
    icon: 'calendar',
    title: 'Planning & Setup',
    items: [
      'Event strategy and positioning',
      'Registration pages built',
      'Maximise attendance with proven reminder flows',
      'Clear engagement structure',
    ],
  },
  {
    icon: 'monitor',
    title: 'Live Event Delivery',
    items: [
      'Full event production',
      'We handle all tech so nothing breaks live',
      'Live technical support',
      'Attendee professional experience',
    ],
  },
  {
    icon: 'repeat',
    title: 'Content Repurposing',
    items: [
      'Multi-platform content conversion',
      'Ready-to-post social assets',
      'Blog and LinkedIn content',
      'Increase brand awareness',
    ],
  },
];

export const SERVICES_SECTION = {
  eyebrow: 'Services',
  heading: 'Your Entire Virtual Event System. Done For You.',
  subheading:
    'We handle everything behind the scenes so your events run smoothly, consistently, and without stress.',
  footnote: 'No hiring. No managing freelancers. No wasted time trying to figure it out.',
  ctaHeading: 'Ready to Scale Your Events?',
  ctaBody: "Book a free strategy call. We'll show you exactly how to turn your events into a repeatable growth system.",
  ctaNote: 'No obligation. No pressure. Just a clear plan.',
};

export type PricingPlan = {
  id: 'starter' | 'growth' | 'pro';
  name: string;
  tagline: string;
  features: string[];
  monthlyPrice: number;
  annualMonthlyPrice: number;
  annualSavingsLabel: string;
  popular?: boolean;
  bookingUrl: string;
};

export const PRICING_SECTION = {
  eyebrow: 'Pricing',
  heading: 'Simple, predictable pricing. No surprises.',
  annualDiscountLabel: 'SAVE 20%',
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Best for getting your first consistent events running',
    features: [
      '1 lead-generating webinar per month',
      'Full setup & operational delivery (you handle promotion)',
      'Webinar platform and software costs included',
      '5+ content assets',
    ],
    monthlyPrice: 1200,
    annualMonthlyPrice: 960,
    annualSavingsLabel: 'Save £2,400 (2 Months Free)',
    bookingUrl: 'https://cal.eu/virtualevents.agency/starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Best for building consistency and increasing output',
    features: [
      '2 lead-generating webinars per month',
      'Full setup & operational delivery (you handle promotion)',
      'Webinar platform and software costs included',
      '15+ content assets',
      'Branded presentation template',
      '12-month webinar roadmap',
    ],
    monthlyPrice: 1800,
    annualMonthlyPrice: 1440,
    annualSavingsLabel: 'Save £3,600 (2 Months Free)',
    popular: true,
    bookingUrl: 'https://cal.eu/virtualevents.agency/growth',
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'Best for a complete webinar system without the workload',
    features: [
      '2 lead-generating webinars per month',
      'Full setup & operational delivery (you handle promotion)',
      'Webinar platform and software costs included',
      'We produce and run the live session end to end',
      'Pre & post webinar email sequences',
      '20+ content assets',
      'Branded presentation template',
      'Speaker sourcing',
    ],
    monthlyPrice: 2500,
    annualMonthlyPrice: 2000,
    annualSavingsLabel: 'Save £5,000 (2 Months Free)',
    bookingUrl: 'https://cal.eu/virtualevents.agency/pro',
  },
];

export const COMPARISON_SECTION = {
  heading: "Why Hiring Isn't the Best Option",
  subheading:
    'On paper, hiring sounds like the logical move. In reality, it creates more work, more cost, and more complexity.',
  columns: [
    {
      title: 'Hiring In-House',
      negative: true,
      items: ['£30k to £50k+ salary', 'Time spent hiring and training', 'Ongoing management required'],
    },
    {
      title: 'Freelancers',
      negative: true,
      items: ['Multiple people to manage', 'Inconsistent quality'],
    },
    {
      title: 'One Partner Handling Everything',
      negative: false,
      items: [
        'No hiring, no management',
        'Consistent, professional delivery',
        'Built as a repeatable system',
        'Designed to scale with your business',
      ],
    },
  ],
  summaryPre: "You don't need to build a team.",
  summaryPost: 'You just need the right system.',
};

export const STATS_SECTION = {
  heading: 'Built on Real-World Event Experience',
  subheading: 'Experience across in-person, hybrid, and large-scale virtual events.',
  stats: [
    { value: '500+', label: 'Events delivered per year (virtual and in-person)' },
    { value: '300,000+', label: 'Virtual event viewers reached' },
    { value: '£20M+', label: 'Event revenue generated per annum' },
  ],
};

export const HOW_IT_WORKS_SECTION = {
  heading: 'How It Works',
  steps: [
    {
      step: '01',
      title: 'Strategy Call',
      description: 'We look at your current setup and where webinars fit into your marketing.',
    },
    {
      step: '02',
      title: 'We Set Everything Up',
      description:
        'We handle webinar setup, structure, and delivery so everything runs smoothly. (You handle promotion and bringing the audience)',
    },
    {
      step: '03',
      title: 'We Run Your Webinars',
      description: 'We manage the tech, production, and flow. Your team just shows up and delivers.',
    },
    {
      step: '04',
      title: 'Content That Keeps Working',
      description: 'Each webinar is turned into clips, posts, and written content for ongoing visibility.',
    },
  ],
};

export const FAQS = [
  {
    question: 'Do you help fill the events with attendees?',
    answer:
      "We don't run paid ads or guarantee attendance. Most of our clients already have an audience or ongoing marketing. We help you turn that into consistent, well-run events that people actually show up to.",
  },
  {
    question: 'What if we already have a marketing team?',
    answer:
      "That's exactly who this is for. We plug into your existing marketing and handle the event side, so your team doesn't have to.",
  },
  {
    question: 'Do we need experience running virtual events?',
    answer: 'No. We handle everything behind the scenes. Your team focuses on the message. We make sure the event runs properly.',
  },
  {
    question: 'How much time will our team need to commit?',
    answer:
      'Very little. We take care of planning, setup, and delivery. Your team mainly needs to provide input and show up for the session.',
  },
  {
    question: 'How much does this cost?',
    answer:
      "Pricing depends on how many events you want to run each month. Most clients work with us on a monthly basis to build consistency. We'll walk you through the best option on the call.",
  },
  {
    question: 'What platforms do you use?',
    answer:
      "We can work with whatever you're already using or run your sessions from our platforms thereby saving you subscription fees.",
  },
  {
    question: 'Do you help with content and structure?',
    answer: "Yes. We help shape the session so it's clear, engaging, and easy for your audience to follow.",
  },
  {
    question: 'What happens after the event?',
    answer: 'We turn your event into multiple pieces of content. Clips, posts, and written content your team can reuse across channels.',
  },
  {
    question: 'Is this a one-off service or ongoing?',
    answer: "It's designed to be ongoing. The goal is to build a repeatable system your business can rely on.",
  },
  {
    question: 'How quickly can we get started?',
    answer: "Let's get started straight away.",
  },
  {
    question: 'What happens on the strategy call?',
    answer:
      "We look at your current setup, your marketing, and how events could fit into it. You'll leave with a clear plan of what this could look like.",
  },
];

export const FINAL_CTA_SECTION = {
  heading: "Let's Build Your Event System Together.",
  subheading:
    "In 15 minutes, we'll show you exactly how a done-for-you system fits into your current marketing. No obligation, just a clear roadmap.",
  ctaLabel: 'Book Your Free Strategy Call',
};

export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} Virtual Events Agency. All rights reserved.`,
};
