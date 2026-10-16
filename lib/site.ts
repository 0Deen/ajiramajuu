// lib/site.ts

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ajiramajuu.com";

// ==========================================================
// COMPANY
// ==========================================================

export const COMPANY = {
  name: "Ajira Majuu",
  legalName: "Ajira Majuu",
  tagline: "Connecting Kenyan Talent to Global Opportunities.",
  swahiliTagline: "Njoo, Tusafiri Ughaibuni.",

  description:
    "Ajira Majuu is a private overseas recruitment agency in Kenya connecting qualified Kenyan candidates with verified employment opportunities abroad.",

  // --------------------------------------------------------
  // CONTACT NUMBERS
  // --------------------------------------------------------

  // Backward-compatible properties.
  // Existing website components use these properties.
  phoneDisplay: "+254 115 614 253",
  phoneHref: "tel:+254115614253",
  whatsappNumber: "254115614253",

  // Primary phone
  primaryPhone: {
    display: "+254 115 614 253",
    href: "tel:+254115614253",
    number: "254115614253",
  },

  // Secondary phone
  secondaryPhone: {
    display: "+254 706 947 876",
    href: "tel:+254706947876",
    number: "254706947876",
  },

  // --------------------------------------------------------
  // WHATSAPP
  // --------------------------------------------------------

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

  // --------------------------------------------------------
  // EMAIL
  // --------------------------------------------------------

  primaryEmail: "sharon@ajiramajuu.com",
  secondaryEmail: "ajiramajuuh@gmail.com",

  // --------------------------------------------------------
  // WEBSITE
  // --------------------------------------------------------

  website: "https://www.ajiramajuu.com",
  domain: "ajiramajuu.com",

  // --------------------------------------------------------
  // OFFICE
  // --------------------------------------------------------

  address: "Twiga Towers, Murang'a Road, Nairobi, Kenya",
  addressShort: "Twiga Towers, Murang'a Road, Nairobi",
  city: "Nairobi",
  country: "Kenya",

  // --------------------------------------------------------
  // BRAND MESSAGING
  // --------------------------------------------------------

  candidatePromise:
    "We connect Kenyan talent with legitimate international employment opportunities while providing support throughout the recruitment journey.",

  safetyMessage:
    "Candidate safety comes first. We encourage applicants to verify job information and avoid unofficial recruitment payments.",

  employerMessage:
    "We help international employers connect with qualified Kenyan talent across multiple sectors.",
} as const;

// ==========================================================
// CONTACT HELPERS
// ==========================================================

export const CONTACT = {
  phone: COMPANY.primaryPhone,
  alternatePhone: COMPANY.secondaryPhone,

  whatsapp: COMPANY.primaryWhatsApp,
  alternateWhatsApp: COMPANY.secondaryWhatsApp,

  email: COMPANY.primaryEmail,
  alternateEmail: COMPANY.secondaryEmail,

  address: COMPANY.address,
} as const;

// ==========================================================
// PRIMARY NAVIGATION
// ==========================================================

export const NAV_PRIMARY = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Jobs",
    href: "/jobs",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Apply",
    href: "/apply",
  },
  {
    label: "Contact",
    href: "/contact",
  },
] as const;

// ==========================================================
// MORE NAVIGATION
// ==========================================================

export const NAV_MORE = [
  {
    label: "AI Assistant",
    href: "/ai-assistant",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Recruitment Safety",
    href: "/recruitment-safety",
  },
  {
    label: "For Employers",
    href: "/for-employers",
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
      "Explore employment opportunities for qualified Kenyan workers in Saudi Arabia.",
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    href: "/destinations/uae",
    description:
      "Discover overseas jobs in the United Arab Emirates for Kenyan talent.",
  },
  {
    name: "Qatar",
    slug: "qatar",
    href: "/destinations/qatar",
    description:
      "Find international employment opportunities in Qatar across multiple sectors.",
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    href: "/destinations/kuwait",
    description:
      "Explore available employment opportunities in Kuwait.",
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    href: "/destinations/bahrain",
    description:
      "Connect with employment opportunities in Bahrain.",
  },
  {
    name: "Oman",
    slug: "oman",
    href: "/destinations/oman",
    description:
      "Discover overseas employment opportunities in Oman.",
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
      "Successful candidates receive support with the required employment and travel documentation.",
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
    "Ajira Majuu is a private overseas recruitment agency in Kenya connecting Kenyan talent with international jobs in Saudi Arabia, UAE, Qatar, Kuwait, Bahrain and Oman.",

  keywords: [
    "Ajira Majuu",
    "overseas jobs Kenya",
    "jobs abroad Kenya",
    "overseas recruitment agency Kenya",
    "recruitment agency Kenya",
    "foreign jobs Kenya",
    "international jobs Kenya",
    "Gulf jobs Kenya",
    "Saudi Arabia jobs Kenya",
    "UAE jobs Kenya",
    "Dubai jobs Kenya",
    "Qatar jobs Kenya",
    "Kuwait jobs Kenya",
    "Bahrain jobs Kenya",
    "Oman jobs Kenya",
    "healthcare jobs abroad",
    "hospitality jobs abroad",
    "construction jobs abroad",
    "driving jobs abroad",
    "security jobs abroad",
    "domestic jobs abroad",
    "caregiver jobs abroad",
    "IT jobs abroad",
    "cleaning jobs abroad",
    "beauty jobs abroad",
    "teaching jobs abroad",
    "jobs for Kenyans abroad",
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

  url: SITE_URL,

  description: COMPANY.description,

  email: `mailto:${COMPANY.primaryEmail}`,

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
  phone: string = COMPANY.primaryWhatsApp.number,
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
