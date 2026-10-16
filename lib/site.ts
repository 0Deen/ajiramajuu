// ============================================================
// AJIRA MAJUU — Company Configuration
// Single source of truth for company identity, contact details,
// navigation, destinations, services and SEO information.
//
// IMPORTANT:
// Only add phone numbers, addresses, emails or social accounts
// that have been officially confirmed by Ajira Majuu.
// ============================================================

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ajiramajuu.com";

// ============================================================
// COMPANY INFORMATION
// ============================================================

export const COMPANY = {
  name: "Ajira Majuu",

  legalDescriptor: "Private Overseas Recruitment Agency in Kenya",

  tagline: "Connecting Kenyan Talent to Global Opportunities.",

  swahili: "Njoo, Tusafiri Ughaibuni.",

  description:
    "Ajira Majuu is a Kenya-based overseas recruitment agency connecting qualified Kenyan job seekers with international employment opportunities across the Gulf region and other global destinations.",

  shortDescription:
    "Overseas recruitment agency connecting Kenyan talent with verified international job opportunities.",

  country: "Kenya",

  // ----------------------------------------------------------
  // CONTACT NUMBERS
  // ----------------------------------------------------------

  primaryPhone: {
    display: "+254 115 614 253",
    href: "tel:+254115614253",
    number: "254115614253",
  },

  secondaryPhone: {
    display: "+254 706 947 876",
    href: "tel:+254706947876",
    number: "254706947876",
  },

  // ----------------------------------------------------------
  // WHATSAPP
  // ----------------------------------------------------------

  primaryWhatsApp: {
    display: "+254 115 614 253",
    number: "254115614253",
    href: "https://wa.me/254115614253",
  },

  secondaryWhatsApp: {
    display: "+254 706 947 876",
    number: "254706947876",
    href: "https://wa.me/254706947876",
  },

  // ----------------------------------------------------------
  // EMAIL
  // ----------------------------------------------------------

  primaryEmail: "sharon@ajiramajuu.com",

  secondaryEmail: "ajiramajuuh@gmail.com",

  // ----------------------------------------------------------
  // WEBSITE
  // ----------------------------------------------------------

  website: "https://www.ajiramajuu.com",

  domain: "ajiramajuu.com",

  // ----------------------------------------------------------
  // OFFICE
  // ----------------------------------------------------------

  address: "Twiga Towers, Murang'a Road, Nairobi, Kenya",

  addressShort: "Twiga Towers, Murang'a Road, Nairobi",

  city: "Nairobi",

  // ----------------------------------------------------------
  // BRAND / RECRUITMENT MESSAGE
  // ----------------------------------------------------------

  candidatePromise:
    "Verified opportunities, transparent recruitment and real support from real people.",

  safetyMessage:
    "Candidates should only use official Ajira Majuu communication channels and should never make unofficial payments.",

  employerMessage:
    "Helping international employers connect with suitable Kenyan talent through a structured recruitment process.",
} as const;

// ============================================================
// EASY CONTACT HELPERS
// ============================================================

export const CONTACT = {
  phone: COMPANY.primaryPhone,
  alternatePhone: COMPANY.secondaryPhone,

  whatsapp: COMPANY.primaryWhatsApp,
  alternateWhatsApp: COMPANY.secondaryWhatsApp,

  email: COMPANY.primaryEmail,
  alternateEmail: COMPANY.secondaryEmail,

  address: COMPANY.address,
} as const;

// ============================================================
// PRIMARY NAVIGATION
// ============================================================

export const NAV_PRIMARY = [
  {
    href: "/",
    label: "Home",
    icon: "home",
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: "briefcase",
  },
  {
    href: "/destinations",
    label: "Destinations",
    icon: "globe",
  },
  {
    href: "/apply",
    label: "Apply",
    icon: "send",
  },
  {
    href: "/contact",
    label: "Contact",
    icon: "phone",
  },
] as const;

// ============================================================
// MORE NAVIGATION
// ============================================================

export const NAV_MORE = [
  {
    href: "/assistant",
    label: "AI Assistant",
    icon: "sparkles",
    hint: "Ask questions about working abroad",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    icon: "route",
    hint: "Understand the journey from application to deployment",
  },
  {
    href: "/about",
    label: "About Ajira Majuu",
    icon: "building",
    hint: "Learn who we are and what we do",
  },
  {
    href: "/resources",
    label: "Resources",
    icon: "book",
    hint: "Helpful guides for overseas job seekers",
  },
  {
    href: "/faq",
    label: "FAQ",
    icon: "help",
    hint: "Answers to frequently asked questions",
  },
  {
    href: "/recruitment-safety",
    label: "Recruitment Safety",
    icon: "shield",
    hint: "Learn how to identify and avoid recruitment scams",
  },
  {
    href: "/for-employers",
    label: "For Employers",
    icon: "users",
    hint: "Request recruitment support and Kenyan talent",
  },
] as const;

// ============================================================
// DESTINATIONS
// Useful for destination pages, internal links and SEO.
// ============================================================

export const DESTINATIONS = [
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    href: "/destinations/saudi-arabia",
  },
  {
    name: "United Arab Emirates",
    shortName: "UAE",
    slug: "uae",
    href: "/destinations/uae",
  },
  {
    name: "Qatar",
    slug: "qatar",
    href: "/destinations/qatar",
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    href: "/destinations/kuwait",
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    href: "/destinations/bahrain",
  },
  {
    name: "Oman",
    slug: "oman",
    href: "/destinations/oman",
  },
] as const;

// ============================================================
// JOB CATEGORIES
// Useful for Jobs pages, filters and SEO landing pages.
// ============================================================

export const JOB_CATEGORIES = [
  {
    name: "Healthcare Jobs",
    slug: "healthcare",
  },
  {
    name: "Hospitality Jobs",
    slug: "hospitality",
  },
  {
    name: "Construction Jobs",
    slug: "construction",
  },
  {
    name: "Driving Jobs",
    slug: "driving",
  },
  {
    name: "Security Jobs",
    slug: "security",
  },
  {
    name: "Domestic Jobs",
    slug: "domestic",
  },
  {
    name: "Caregiver Jobs",
    slug: "caregivers",
  },
  {
    name: "Information Technology Jobs",
    slug: "information-technology",
  },
  {
    name: "Cleaning Jobs",
    slug: "cleaning",
  },
  {
    name: "Beauty & Salon Jobs",
    slug: "beauty",
  },
  {
    name: "Teaching & Tutoring Jobs",
    slug: "teaching",
  },
] as const;

// ============================================================
// RECRUITMENT PROCESS
// ============================================================

export const RECRUITMENT_PROCESS = [
  {
    step: 1,
    title: "Apply",
    description:
      "Submit your application and personal details through Ajira Majuu.",
  },
  {
    step: 2,
    title: "Screening",
    description:
      "Candidate information and qualifications are reviewed against available opportunities.",
  },
  {
    step: 3,
    title: "Interview",
    description:
      "Shortlisted candidates proceed to the relevant interview process.",
  },
  {
    step: 4,
    title: "Documentation",
    description:
      "Successful candidates receive guidance on the required employment and travel documentation.",
  },
  {
    step: 5,
    title: "Pre-Departure Support",
    description:
      "Candidates receive guidance and preparation before travelling to their employment destination.",
  },
  {
    step: 6,
    title: "Deployment",
    description:
      "Candidates travel to begin their overseas employment journey.",
  },
] as const;

// ============================================================
// SEO
// Central SEO information that can be reused by Next.js metadata.
// ============================================================

export const SEO = {
  title:
    "Ajira Majuu | Overseas Jobs & Recruitment Agency in Kenya",

  titleTemplate:
    "%s | Ajira Majuu",

  description:
    "Ajira Majuu connects Kenyan job seekers with overseas employment opportunities in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman. Explore international jobs, apply online and get recruitment support.",

  keywords: [
    "Ajira Majuu",
    "Ajira Majuu Kenya",
    "Ajira Majuu jobs",
    "Ajira Majuu recruitment agency",

    "overseas jobs Kenya",
    "jobs abroad for Kenyans",
    "international jobs for Kenyans",
    "overseas recruitment agency Kenya",
    "recruitment agency Nairobi",
    "overseas recruitment Nairobi",

    "Gulf jobs for Kenyans",
    "Middle East jobs Kenya",
    "jobs in Gulf countries for Kenyans",

    "Saudi Arabia jobs for Kenyans",
    "Saudi jobs Kenya",
    "UAE jobs for Kenyans",
    "Dubai jobs for Kenyans",
    "Qatar jobs for Kenyans",
    "Kuwait jobs for Kenyans",
    "Bahrain jobs for Kenyans",
    "Oman jobs for Kenyans",

    "caregiver jobs abroad Kenya",
    "driver jobs abroad Kenya",
    "hospitality jobs abroad Kenya",
    "construction jobs abroad Kenya",
    "security jobs abroad Kenya",
    "cleaning jobs abroad Kenya",
    "domestic jobs abroad Kenya",
    "IT jobs abroad Kenya",
    "healthcare jobs abroad Kenya",

    "apply for overseas jobs Kenya",
    "work abroad from Kenya",
    "foreign jobs for Kenyans",
    "international recruitment Kenya",
  ],

  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Ajira Majuu",
    title:
      "Ajira Majuu | Connecting Kenyan Talent to Global Opportunities",
    description:
      "Explore overseas job opportunities and recruitment support for Kenyan candidates seeking employment abroad.",
    url: SITE_URL,
  },
} as const;

// ============================================================
// STRUCTURED DATA / GOOGLE BUSINESS INFORMATION
// Can be used to generate JSON-LD in the root layout.
// ============================================================

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",

  name: COMPANY.name,

  url: SITE_URL,

  description: COMPANY.description,

  email: COMPANY.primaryEmail,

  telephone: COMPANY.primaryPhone.display,

  address: {
    "@type": "PostalAddress",
    streetAddress: "Twiga Towers, Murang'a Road",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },

  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY.primaryPhone.display,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY.secondaryPhone.display,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  ],
} as const;

// ============================================================
// DEFAULT WHATSAPP MESSAGES
// ============================================================

export const WHATSAPP_MESSAGES = {
  general:
    "Hello Ajira Majuu, I would like to learn more about your overseas job opportunities.",

  jobs:
    "Hello Ajira Majuu, I am interested in the overseas jobs currently available. Please assist me.",

  application:
    "Hello Ajira Majuu, I would like assistance with my overseas job application.",

  employer:
    "Hello Ajira Majuu, I am interested in recruitment support for our organization.",
} as const;

// ============================================================
// WHATSAPP LINK GENERATOR
// ============================================================

export function getWhatsAppLink(
  message: string = WHATSAPP_MESSAGES.general,
  number: string = COMPANY.primaryWhatsApp.number
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

// ============================================================
// EMAIL LINK GENERATOR
// ============================================================

export function getEmailLink(
  subject = "Ajira Majuu Enquiry"
) {
  return `mailto:${COMPANY.primaryEmail}?subject=${encodeURIComponent(subject)}`;
}
