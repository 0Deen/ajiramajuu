// lib/site.ts

// Single source of truth for company identity + contact details.
// Only confirmed Ajira Majuu details are included here.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ajiramajuu.com";

export const COMPANY = {
  name: "Ajira Majuu",

  legalDescriptor: "Private Overseas Recruitment Agency in Kenya",

  tagline: "Connecting Kenyan Talent to Global Opportunities.",

  swahili: "Njoo, Tusafiri Ughaibuni.",

  // Primary phone
  phoneDisplay: "+254 115 614 253",
  phoneHref: "tel:+254115614253",
  whatsappNumber: "254115614253",

  // Secondary phone
  secondaryPhoneDisplay: "+254 706 947 876",
  secondaryPhoneHref: "tel:+254706947876",
  secondaryWhatsappNumber: "254706947876",

  // Email
  primaryEmail: "sharon@ajiramajuu.com",
  secondaryEmail: "ajiramajuuh@gmail.com",

  // Website
  website: "https://www.ajiramajuu.com",
  domain: "ajiramajuu.com",

  // Office
  address: "Twiga Towers, Murang'a Road, Nairobi",
  addressShort: "Twiga Towers, Murang'a Road, Nairobi",
  city: "Nairobi",
  country: "Kenya",

  // Company description
  description:
    "Ajira Majuu is a private overseas recruitment agency in Kenya connecting qualified Kenyan candidates with international employment opportunities.",

  candidatePromise:
    "Connecting Kenyan talent with legitimate international employment opportunities while supporting candidates throughout the recruitment journey.",

  safetyMessage:
    "Candidate safety comes first. Applicants should verify job information and avoid unofficial recruitment payments.",

  employerMessage:
    "We help international employers connect with qualified Kenyan talent across multiple sectors.",
} as const;

// ==========================================================
// CONTACT
// ==========================================================

export const CONTACT = {
  phone: COMPANY.phoneDisplay,
  phoneHref: COMPANY.phoneHref,

  alternatePhone: COMPANY.secondaryPhoneDisplay,
  alternatePhoneHref: COMPANY.secondaryPhoneHref,

  whatsapp: COMPANY.whatsappNumber,
  alternateWhatsApp: COMPANY.secondaryWhatsappNumber,

  email: COMPANY.primaryEmail,
  alternateEmail: COMPANY.secondaryEmail,

  address: COMPANY.address,
} as const;

// ==========================================================
// PRIMARY NAVIGATION
// ==========================================================

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

// ==========================================================
// MORE NAVIGATION
// ==========================================================

export const NAV_MORE = [
  {
    href: "/assistant",
    label: "AI Assistant",
    icon: "sparkles",
    hint: "Ask anything about working abroad",
  },
  {
    href: "/how-it-works",
    label: "How It Works",
    icon: "route",
    hint: "From application to deployment",
  },
  {
    href: "/about",
    label: "About Ajira Majuu",
    icon: "building",
    hint: "Who we are and what we do",
  },
  {
    href: "/resources",
    label: "Resources",
    icon: "book",
    hint: "Guides for candidates",
  },
  {
    href: "/faq",
    label: "FAQ",
    icon: "help",
    hint: "Quick answers",
  },
  {
    href: "/recruitment-safety",
    label: "Recruitment Safety",
    icon: "shield",
    hint: "Protect yourself from scams",
  },
  {
    href: "/for-employers",
    label: "For Employers",
    icon: "users",
    hint: "Request recruitment support",
  },
] as const;

// ==========================================================
// DESTINATIONS
// ==========================================================

export const DESTINATIONS = [
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    href: "/destinations/saudi-arabia",
    description:
      "Explore overseas employment opportunities in Saudi Arabia for qualified Kenyan candidates.",
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    href: "/destinations/uae",
    description:
      "Discover international employment opportunities in the United Arab Emirates for Kenyan talent.",
  },
  {
    name: "Qatar",
    slug: "qatar",
    href: "/destinations/qatar",
    description:
      "Find overseas employment opportunities in Qatar across multiple sectors.",
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    href: "/destinations/kuwait",
    description:
      "Explore international employment opportunities in Kuwait for Kenyan workers.",
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    href: "/destinations/bahrain",
    description:
      "Connect with employment opportunities in Bahrain for qualified Kenyan candidates.",
  },
  {
    name: "Oman",
    slug: "oman",
    href: "/destinations/oman",
    description:
      "Discover overseas employment opportunities in Oman for Kenyan talent.",
  },
] as const;

// ==========================================================
// JOB CATEGORIES
// ==========================================================

export const JOB_CATEGORIES = [
  {
    name: "Healthcare",
    slug: "healthcare",
    href: "/jobs/healthcare",
  },
  {
    name: "Hospitality",
    slug: "hospitality",
    href: "/jobs/hospitality",
  },
  {
    name: "Construction",
    slug: "construction",
    href: "/jobs/construction",
  },
  {
    name: "Driving",
    slug: "driving",
    href: "/jobs/driving",
  },
  {
    name: "Security",
    slug: "security",
    href: "/jobs/security",
  },
  {
    name: "Domestic Work",
    slug: "domestic",
    href: "/jobs/domestic",
  },
  {
    name: "Caregiver",
    slug: "caregiver",
    href: "/jobs/caregiver",
  },
  {
    name: "IT",
    slug: "it",
    href: "/jobs/it",
  },
  {
    name: "Cleaning",
    slug: "cleaning",
    href: "/jobs/cleaning",
  },
  {
    name: "Beauty & Salon",
    slug: "beauty",
    href: "/jobs/beauty",
  },
  {
    name: "Teaching & Tutoring",
    slug: "teaching",
    href: "/jobs/teaching",
  },
] as const;

// ==========================================================
// RECRUITMENT PROCESS
// ==========================================================

export const RECRUITMENT_PROCESS = [
  {
    number: 1,
    title: "Apply",
    description:
      "Submit your application for a suitable overseas employment opportunity.",
  },
  {
    number: 2,
    title: "Screening",
    description:
      "Our recruitment team reviews your qualifications and suitability for the role.",
  },
  {
    number: 3,
    title: "Interview",
    description:
      "Shortlisted candidates proceed to employer or recruitment interviews.",
  },
  {
    number: 4,
    title: "Documentation",
    description:
      "Successful candidates receive support with required employment and travel documentation.",
  },
  {
    number: 5,
    title: "Pre-Departure Support",
    description:
      "Candidates receive guidance and preparation before travelling abroad.",
  },
  {
    number: 6,
    title: "Deployment",
    description:
      "Qualified candidates proceed to their international employment destination.",
  },
] as const;

// ==========================================================
// SEO
// ==========================================================

export const SEO = {
  title: "Ajira Majuu | Overseas Jobs & Recruitment Agency in Kenya",

  titleTemplate: "%s | Ajira Majuu",

  description:
    "Ajira Majuu is a private overseas recruitment agency in Kenya connecting Kenyan talent with international jobs and employment opportunities in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman.",

  keywords: [
    "Ajira Majuu",
    "Ajira Majuu Kenya",
    "overseas jobs Kenya",
    "overseas jobs in Kenya",
    "jobs abroad Kenya",
    "jobs for Kenyans abroad",
    "international jobs Kenya",
    "foreign jobs Kenya",
    "overseas recruitment agency Kenya",
    "overseas recruitment agencies Kenya",
    "recruitment agency Kenya",
    "recruitment agencies Kenya",
    "Gulf jobs Kenya",
    "Gulf jobs for Kenyans",
    "Saudi Arabia jobs Kenya",
    "Saudi Arabia jobs for Kenyans",
    "UAE jobs Kenya",
    "UAE jobs for Kenyans",
    "Dubai jobs Kenya",
    "Qatar jobs Kenya",
    "Qatar jobs for Kenyans",
    "Kuwait jobs Kenya",
    "Kuwait jobs for Kenyans",
    "Bahrain jobs Kenya",
    "Bahrain jobs for Kenyans",
    "Oman jobs Kenya",
    "Oman jobs for Kenyans",
    "healthcare jobs abroad",
    "healthcare jobs for Kenyans",
    "hospitality jobs abroad",
    "hospitality jobs for Kenyans",
    "construction jobs abroad",
    "construction jobs for Kenyans",
    "driving jobs abroad",
    "driving jobs for Kenyans",
    "security jobs abroad",
    "security jobs for Kenyans",
    "domestic jobs abroad",
    "domestic jobs for Kenyans",
    "caregiver jobs abroad",
    "caregiver jobs for Kenyans",
    "IT jobs abroad",
    "IT jobs for Kenyans",
    "cleaning jobs abroad",
    "cleaning jobs for Kenyans",
    "beauty jobs abroad",
    "beauty jobs for Kenyans",
    "teaching jobs abroad",
    "teaching jobs for Kenyans",
  ],

  openGraph: {
    title: "Ajira Majuu | Overseas Jobs & Recruitment Agency in Kenya",

    description:
      "Connecting Kenyan talent with international employment opportunities across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman.",

    url: SITE_URL,

    siteName: "Ajira Majuu",

    type: "website",

    locale: "en_KE",
  },
} as const;

// ==========================================================
// ORGANIZATION SCHEMA
// ==========================================================

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",

  "@type": "EmploymentAgency",

  name: COMPANY.name,

  description: COMPANY.description,

  url: SITE_URL,

  email: `mailto:${COMPANY.primaryEmail}`,

  telephone: COMPANY.phoneDisplay,

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
      telephone: COMPANY.phoneDisplay,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
    {
      "@type": "ContactPoint",
      telephone: COMPANY.secondaryPhoneDisplay,
      contactType: "customer service",
      areaServed: "KE",
      availableLanguage: ["English", "Swahili"],
    },
  ],
} as const;

// ==========================================================
// WHATSAPP MESSAGES
// ==========================================================

export const WHATSAPP_MESSAGES = {
  general:
    "Hello Ajira Majuu, I would like to enquire about overseas job opportunities.",

  jobs:
    "Hello Ajira Majuu, I would like to know about the latest available overseas jobs.",

  application:
    "Hello Ajira Majuu, I need help with my job application.",

  recruitment:
    "Hello Ajira Majuu, I would like to know more about your recruitment process.",

  employer:
    "Hello Ajira Majuu, I am an employer interested in recruiting Kenyan talent.",
} as const;

// ==========================================================
// HELPERS
// ==========================================================

export function getWhatsAppLink(
  message: string = WHATSAPP_MESSAGES.general,
  phone: string = COMPANY.whatsappNumber,
) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getEmailLink(
  subject = "Ajira Majuu Enquiry",
  body = "",
  email: string = COMPANY.primaryEmail,
) {
  const params = new URLSearchParams();

  if (subject) {
    params.set("subject", subject);
  }

  if (body) {
    params.set("body", body);
  }

  return `mailto:${email}?${params.toString()}`;
}
