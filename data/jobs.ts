// Centralized job + destination data. Every page (homepage sections,
// /destinations, /jobs, the AI assistant's system prompt context, and the
// apply form's prefill) reads from here instead of duplicating copy, so a
// future update only has to happen in one place.

export interface Destination {
  name: string;
  slug: string;
  /** Large hero photo used on /destinations and /destinations/[slug] */
  heroImage: string;
  /** Smaller thumbnail used on homepage cards and list views */
  thumbImage: string;
  blurb: string;
  active: boolean;
  /** Emoji flag used in compact UI (sidebar, chips, search). */
  flag: string;
  /** Alternative spellings people type when searching or chatting. */
  aliases: string[];
}

// Order here controls both the destination-strip order in GulfShowcase and
// the dot indicators beneath it, plus the order on /destinations.
export const destinations: Destination[] = [
  {
    name: "Saudi Arabia",
    slug: "saudi-arabia",
    flag: "🇸🇦",
    aliases: ["saudi", "ksa", "riyadh", "jeddah"],
    heroImage: "/images/countries/welcometosaudi.png",
    thumbImage: "/images/countries/saudiarabia.png",
    blurb: "Household, hospitality and general roles across Saudi Arabia.",
    active: true,
  },
  {
    name: "United Arab Emirates",
    slug: "uae",
    flag: "🇦🇪",
    aliases: ["uae", "dubai", "abu dhabi", "emirates", "united arab emirates"],
    heroImage: "/images/countries/dubaicity.png",
    thumbImage: "/images/countries/dubai.png",
    blurb: "Opportunities across Dubai and the wider UAE, depending on current demand.",
    active: true,
  },
  {
    name: "Qatar",
    slug: "qatar",
    flag: "🇶🇦",
    aliases: ["qatar", "doha"],
    heroImage: "/images/countries/qatar.png",
    thumbImage: "/images/countries/qataar.png",
    blurb: "Our most active destination — household, driving, caregiving and more.",
    active: true,
  },
  {
    name: "Kuwait",
    slug: "kuwait",
    flag: "🇰🇼",
    aliases: ["kuwait"],
    heroImage: "/images/countries/kuwaitcity.jfif",
    thumbImage: "/images/countries/kuwait.jfif",
    blurb: "Household and general roles across Kuwait, depending on current demand.",
    active: true,
  },
  {
    name: "Bahrain",
    slug: "bahrain",
    flag: "🇧🇭",
    aliases: ["bahrain", "manama"],
    heroImage: "/images/countries/manamabahrain.png",
    thumbImage: "/images/countries/bahrain.png",
    blurb: "Household and general roles across Bahrain, depending on current demand.",
    active: true,
  },
  {
    name: "Oman",
    slug: "oman",
    flag: "🇴🇲",
    aliases: ["oman", "muscat"],
    heroImage: "/images/countries/muscatoman.png",
    thumbImage: "/images/countries/musact.png",
    blurb: "Household and general roles across Oman, depending on current demand.",
    active: true,
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export interface JobCategory {
  title: string;
  category: string;
  image: string;
}

// Kept as-is: this powers the existing homepage JobCategories grid.
export const jobCategories: JobCategory[] = [
  { title: "Caregivers (Qatar)", category: "Caregiving", image: "/images/jobs/caregiver.png" },
  { title: "Men Caregivers", category: "Caregiving", image: "/images/jobs/mencaregivers.png" },
  { title: "Cooks & Kitchen Assistants", category: "Hospitality", image: "/images/jobs/cheef.png" },
  { title: "Cooks", category: "Hospitality", image: "/images/jobs/cook.png" },
  { title: "House Maids", category: "Household", image: "/images/jobs/cleaner.png" },
  { title: "House Maids (Gulf)", category: "Household", image: "/images/jobs/cleanerdesign2.png" },
  { title: "Cleaners (Male)", category: "Cleaning", image: "/images/jobs/mencleaners.png" },
  { title: "Muslim Girl Driver", category: "Driving", image: "/images/jobs/drivers.png" },
  { title: "Muslim Driver", category: "Driving", image: "/images/jobs/driverslady.png" },
  {
    title: "Cleaner + Driver",
    category: "Cleaning & Driving",
    image: "/images/jobs/combined_cleanerdriverfemale.png",
  },
  { title: "Security Guards", category: "Security", image: "/images/jobs/mensecurityofficers.png" },
  { title: "General Roles", category: "Various", image: "/images/jobs/men.png" },
  { title: "Warehouse Helpers", category: "Warehouse", image: "/images/jobs/warehosue.png" },
];

/**
 * Structured, bookable job listings. ONLY the Qatar roles supplied by
 * Ajira Majuu are populated with real salary/benefit data — nothing here is
 * invented. Other destinations currently have no structured listings; their
 * pages say so honestly and point to WhatsApp instead of showing a fake "0
 * jobs" or inventing figures.
 */
export interface Job {
  slug: string;
  title: string;
  countrySlug: string;
  country: string;
  category: string;
  /** Human-readable salary line, exactly as supplied by Ajira Majuu. */
  salary: string;
  /** Only benefits Ajira Majuu has actually confirmed for this role. */
  benefits: string[];
  image: string;
  /** Only "active" jobs are shown publicly, searched, or offered by the assistant. */
  status: "active" | "paused" | "filled";
  /** Only set when Ajira Majuu has supplied it. Pages fall back to "Contact Ajira Majuu for current details." */
  experience?: string;
  requirements?: string[];
  responsibilities?: string[];
  /** Extra verified note, e.g. the driver training/after-training salary split. */
  note?: string;
  /** ISO date. Set when the listing is reviewed/updated by staff. */
  updatedAt?: string;
  /** ISO date the role was first published. JobPosting structured data is only emitted when this is set (Google requires a real datePosted). */
  publishedAt?: string;
  /** ISO date the role closes, if known. */
  validThrough?: string;
}

const QATAR_BENEFITS = [
  "Accommodation provided",
  "Food provided",
  "Health insurance provided",
  "Off days as per employer agreement",
  "Vacation as per Qatar Labour Law",
];

export const jobs: Job[] = [
  {
    slug: "house-help-experienced-cooks-qatar",
    title: "House Help — Experienced Cooks",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Household",
    salary: "1,200 QAR",
    experience: "Experienced cooks",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/cheef.png",
    status: "active",
  },
  {
    slug: "house-help-first-time-qatar",
    title: "House Help — First Time",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Household",
    salary: "900 – 1,000 QAR",
    experience: "First-time applicants",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/cleaner.png",
    status: "active",
  },
  {
    slug: "house-drivers-qatar",
    title: "House Drivers",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Driving",
    salary: "1,200 QAR during training · 1,600 QAR after training",
    note: "Training applies for this role: 1,200 QAR during training, 1,600 QAR after training.",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/drivers.png",
    status: "active",
  },
  {
    slug: "nannys-qatar",
    title: "Nannys",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Childcare",
    salary: "1,200 – 1,400 QAR",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/driverslady.png",
    status: "active",
  },
  {
    slug: "home-tutors-qatar",
    title: "Home Tutors",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Education",
    salary: "1,500 – 1,600 QAR",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/men.png",
    status: "active",
  },
  {
    slug: "caregivers-qatar",
    title: "Caregivers",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Caregiving",
    salary: "1,500 QAR",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/caregiver.png",
    status: "active",
  },
  {
    slug: "beauticians-qatar",
    title: "Beauticians",
    countrySlug: "qatar",
    country: "Qatar",
    category: "Beauty",
    salary: "1,500 – 1,600 QAR",
    benefits: QATAR_BENEFITS,
    image: "/images/jobs/mencaregivers.png",
    status: "active",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getActiveJobs(): Job[] {
  return jobs.filter((j) => j.status === "active");
}

export function getJobsByCountrySlug(countrySlug: string): Job[] {
  return getActiveJobs().filter((j) => j.countrySlug === countrySlug);
}

/** Destination whose name, slug or alias appears in free text (chat / search). */
export function findDestinationInText(text: string): Destination | undefined {
  const t = text.toLowerCase();
  return destinations.find((d) =>
    [d.name.toLowerCase(), ...d.aliases].some((a) => new RegExp(`\\b${a}\\b`).test(t))
  );
}

/** Keywords people use for each listed role. Keyed by job slug. */
const JOB_KEYWORDS: Record<string, string[]> = {
  "house-help-experienced-cooks-qatar": ["cook", "cooks", "chef", "kitchen", "house help", "housemaid", "maid"],
  "house-help-first-time-qatar": ["first time", "first-time", "no experience", "beginner", "house help", "housemaid", "maid"],
  "house-drivers-qatar": ["driver", "drivers", "driving"],
  "nannys-qatar": ["nanny", "nannys", "nannies", "childcare", "babysitter"],
  "home-tutors-qatar": ["tutor", "tutors", "teacher", "teaching"],
  "caregivers-qatar": ["caregiver", "caregivers", "carer", "elderly care"],
  "beauticians-qatar": ["beautician", "beauticians", "beauty", "salon", "makeup"],
};

const SEARCH_STOP = new Set([
  "jobs", "job", "find", "show", "want", "work", "working", "abroad", "available", "opportunities", "opportunity",
  "vacancy", "vacancies", "with", "from", "about", "have", "does", "what", "which", "where", "need", "looking", "kenya", "kenyans",
]);

/** ACTIVE jobs whose role keywords appear (as whole words) in free text, scoped to a destination if one is named. */
export function detectJobsInText(text: string): Job[] {
  const t = text.toLowerCase();
  const dest = findDestinationInText(t);
  return getActiveJobs().filter(
    (j) =>
      (!dest || j.countrySlug === dest.slug) &&
      (JOB_KEYWORDS[j.slug] ?? []).some((k) => new RegExp(`\\b${k}\\b`).test(t))
  );
}

/** Natural-language job search over ACTIVE jobs only. Never invents results. */
export function searchJobs(query: string): Job[] {
  const q = query.toLowerCase().trim();
  if (!q) return getActiveJobs();
  const byKeyword = detectJobsInText(q);
  if (byKeyword.length) return byKeyword;
  const dest = findDestinationInText(q);
  const pool = dest ? getJobsByCountrySlug(dest.slug) : getActiveJobs();
  const words = q.split(/[^a-z]+/).filter((w) => w.length > 3 && !SEARCH_STOP.has(w));
  const byTitle = pool.filter((j) => {
    const parts = `${j.title} ${j.category}`.toLowerCase().split(/[^a-z]+/);
    return words.some((w) => parts.includes(w));
  });
  if (byTitle.length) return byTitle;
  return dest ? pool : [];
}

export function jobApplyHref(job: Pick<Job, "country" | "title">): string {
  return `/apply?country=${encodeURIComponent(job.country)}&job=${encodeURIComponent(job.title)}`;
}

export function destinationApplyHref(d: Pick<Destination, "name">): string {
  return `/apply?country=${encodeURIComponent(d.name)}`;
}

/** Package Ajira Majuu has confirmed for the Qatar roles (shared across Qatar jobs). */
export const QATAR_CONFIRMED_BENEFITS = QATAR_BENEFITS;

export const RECRUITMENT_PROCESS = [
  { step: "Application", detail: "You apply for an opportunity — no account required." },
  { step: "Screening", detail: "Our recruitment team reviews your details and experience." },
  { step: "Interview", detail: "Qualifying candidates are interviewed, where the role requires it." },
  { step: "Documentation", detail: "We guide you through the documents your specific opportunity needs." },
  { step: "Medical / required checks", detail: "Completed where required for your destination and role." },
  { step: "Pre-departure preparation", detail: "Briefing and preparation ahead of travel." },
  { step: "Deployment", detail: "You travel to begin the confirmed opportunity." },
];
