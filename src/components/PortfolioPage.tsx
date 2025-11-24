import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ACCENT = "#219b93";

/* ---------- Dark mode hook (local state + localStorage only) ---------- */

function useDarkMode() {
  const [enabled, setEnabled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("portfolio:dark");
    if (saved === "true") return true;
    if (saved === "false") return false;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("portfolio:dark", String(enabled));
  }, [enabled]);

  return { enabled, toggle: () => setEnabled(v => !v) };
}

/* ---------- Icons ---------- */

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

/* ---------- Data ---------- */

type WorkItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

type Certificate = {
  title: string;
  date: string;
  provider: string;
  note?: string;
  image?: string;
};

const WORK_EXPERIENCE: WorkItem[] = [
  {
    id: "semco",
    title: "Senior Cost / ERP Support Administrator",
    company: "Semco Maritime Ltd. (seconded to PBS by Ponticelli)",
    location: "Aberdeen, UK",
    dates: "Jul 2023 – Present",
    bullets: [
      "Senior Cost Engineer responsible for onshore and offshore asset cost control and ERP platform development.",
      "Super user and lead administrator for Ascertra Mpower ERP and SAP S/4HANA systems within PBS.",
      "Managing cost control across two assets with combined net annual revenue of approximately £25m.",
      "Leading development coordination of Ascertra’s Mpower ERP suite within PBS for all clients.",
      "Bridging computer science and cost engineering to align enterprise needs with developer workflows.",
      "Engagement with clients, business stakeholders and technical teams to deliver effective solutions.",
      "Managed and closed out 1034 system related requests. Progressed 54 high value system improvements with developers.",
      "Optimising resource utilisation and departmental processes to support strategic delivery."
    ]
  },
  {
    id: "three60",
    title: "Project Controls Engineer",
    company: "THREE60 Energy",
    location: "Aberdeen, UK",
    dates: "Aug 2022 – May 2023",
    bullets: [
      "Cost Engineer supporting Repsol Sinopec Resources UK within the Project Controls team.",
      "Contributed to reporting, accounting and corporate support activities.",
      "Set up and maintained projects, clients and users on cloud systems including Oracle NetSuite OpenAir.",
      "Prepared estimates, proposals, client reports and reconciled commercial charges.",
      "Managed commercial risk registers and supported procurement and time-writing administration.",
      "Collaborated with multi-disciplinary teams to meet project needs and budget constraints."
    ]
  },
  {
    id: "itcc",
    title: "Operations and Programme Lead",
    company: "ITCC Ltd.",
    location: "Scotland, UK",
    dates: "Jan 2022 – Aug 2022",
    bullets: [
      "Led operations and programme management for a fibre and copper telecoms SME.",
      "Managed business and labour operations for 27 staff and 12 agency workers.",
      "Travelled nationwide to oversee project delivery and client relations.",
      "Reviewed rates, scopes and commercial transactions including AR and AP.",
      "Implemented electronic management systems for safety and business processes.",
      "Chaired leadership risk sessions and maintained action plans.",
      "Worked with international clients, aligning success criteria and KPIs."
    ]
  },
  {
    id: "wood",
    title: "Commercial Associate",
    company: "Wood Plc",
    location: "Aberdeen, UK",
    dates: "Sept 2020 – Jan 2022",
    bullets: [
      "Graduate Commercial role across EMEA and BP North Sea Project Controls.",
      "Supported estimating, bid preparation and cash flow modelling.",
      "Managed RES, IT cost allocations and employee rate build-ups for bids and budgets.",
      "Worked on BP North Sea contracts with total cost in the region of £128m.",
      "Prepared monthly reports, CPR inputs and commercial performance analysis.",
      "Handled contract administration, client relations and commercial compliance."
    ]
  },
  {
    id: "stewart-milne",
    title: "Assistant Quantity Surveyor",
    company: "Stewart Milne Homes Ltd.",
    location: "Aberdeen, UK",
    dates: "Jan 2018 – Jan 2020",
    bullets: [
      "Supported QS activities across multiple housing sites in the North East of Scotland.",
      "Conducted take-offs, tender analysis and subcontractor engagement.",
      "Produced tender documentation and managed variations and payment certifications.",
      "Contributed to monthly cost reports, cash flows and site value reporting.",
      "Worked closely with the Buying team to manage material quantities and supply issues.",
      "Helped generate £1.9m in part-exchange sales for the business."
    ]
  }
];

const PREVIOUS_PART_TIME = [
  "Fitness Coach – Cairn Hotels Ltd.",
  "Customer Assistant – Tesco Plc."
];

const ERP_SYSTEMS = [
  {
    product: "Mpower Suite (Ascertra)",
    role: "ERP Analyst and Super User",
    company: "PBS Ltd.",
    dates: "2023 – Present"
  },
  {
    product: "SAP S/4HANA",
    role: "Cost and Timekeeping Admin",
    company: "PBS Ltd.",
    dates: "2023 – 2025"
  },
  {
    product: "Oracle NetSuite OpenAir PSA",
    role: "Cost and Timekeeping Admin",
    company: "THREE60 Energy Ltd.",
    dates: "2022 – 2023"
  },
  {
    product: "Sage (via implementation partner)",
    role: "Operations and Accounts Admin",
    company: "ITCC Ltd.",
    dates: "2022",
  },
  {
    product: "Oracle NetSuite ERP",
    role: "Commercial Admin User",
    company: "Wood Plc",
    dates: "2020 – 2021"
  },
  {
    product: "Microsoft Dynamics NAV",
    role: "Cost Admin User",
    company: "Stewart Milne Homes North Ltd.",
    dates: "2018 – 2020",
  }
];

const QUALIFICATIONS = [
  {
    title: "MSc Computer Science with Programming (Software Engineering)",
    grade: "Merit (78% overall)",
    institution: "Abertay University",
    dates: "Oct 2023 – Oct 2025",
    note: "Passed with Merit, awaiting certificate. Officially graduate in December 2025."
  },
  {
    title: "BSc (Hons) Quantity Surveying",
    grade: "First Class",
    institution: "RGU / your institution name",
    dates: "Jul 2016 – May 2020"
  }
];

const OTHER_CERTS: Certificate[] = [
  {
    title: "Learn Python 3 Course",
    date: "30/07/2025",
    provider: "Codecademy",
    note: "Full Python course covering fundamentals and applied programming.",
    image: "/images/Python3.png"
  },
  {
    title: "Learn SQL Course",
    date: "23/07/2025",
    provider: "Codecademy",
    note: "Comprehensive SQL course covering querying and data manipulation.",
    image: "/images/SQLCourse.png"
  },
  {
    title: "Learn Statistics with Python Course",
    date: "18/07/2025",
    provider: "Codecademy",
    note: "Statistics and data analysis techniques using Python.",
    image: "/images/PyStats.png"
  },
  {
    title: "Learn How to Code",
    date: "14/07/2025",
    provider: "Codecademy",
    note: "General-purpose programming foundations refresher.",
    image: "/images/Learn how to code.png"
  },

  {
    title: "JavaScript Intermediate",
    date: "11/07/2024",
    provider: "SoloLearn",
    image: "/images/Python Intermediate.png"
  },
  {
    title: "Java Intermediate",
    date: "11/07/2024",
    provider: "SoloLearn",
    note: "Intermediate certificate for Java.",
    image: "/images/Java Intermediate.png"
  },
  {
    title: "Angular Course",
    date: "11/07/2024",
    provider: "SoloLearn",
    note: "Main Angular framework course.",
    image: "/images/Angular Course.png"
  },
  {
    title: "Python Intermediate",
    date: "10/07/2024",
    provider: "SoloLearn",
    note: "Intermediate-level Python training.",
    image: "/images/Python Intermediate.png"
  },
  {
    title: "Python Developer",
    date: "10/07/2024",
    provider: "SoloLearn",
    note: "Python developer-focused applied module.",
    image: "/images/Python Developer.png"
  },
  {
    title: "Introduction to C#",
    date: "10/07/2024",
    provider: "SoloLearn",
    note: "Introductory C# fundamentals.",
    image: "/images/Introduction to C Sharp.png"
  },
  {
    title: "Introduction to C",
    date: "10/07/2024",
    provider: "SoloLearn",
    note: "Basic introduction to the C programming language.",
    image: "/images/Introduction to C.png"
  },
  {
    title: "Angular: Front-End for Beginners",
    date: "09/07/2024",
    provider: "SoloLearn",
    note: "Beginner-level Angular front-end development.",
    image: "/images/Front End for Beginners.png"
  },
  {
    title: "Coding for Data",
    date: "08/07/2024",
    provider: "SoloLearn",
    note: "Data structures, formats, and handling concepts.",
    image: "/images/Coding for Data.png"
  },
  {
    title: "Coding Foundations",
    date: "07/07/2024",
    provider: "SoloLearn",
    note: "Fundamental programming concepts and logic.",
    image: "/images/Coding Foundations.png"
  },
  {
    title: "Introduction to SQL",
    date: "06/07/2024",
    provider: "SoloLearn",
    note: "SQL basics and database querying.",
    image: "/images/Introduction to SQL.png"
  },

  {
    title: "Tech for Everyone",
    date: "19/03/2024",
    provider: "SoloLearn",
    note: "General understanding of technology in business.",
    image: "/images/Tech for Everyone.png"
  },
  {
    title: "Web Development",
    date: "17/03/2024",
    provider: "SoloLearn",
    note: "Covers HTML, CSS, and JavaScript fundamentals.",
    image: "/images/Web Development.png"
  },

  {
    title: "Introduction to Java",
    date: "24/10/2023",
    provider: "SoloLearn",
    note: "Basic introduction to Java programming.",
    image: "/images/Introduction to Java.png"
  },
  {
    title: "Introduction to Python",
    date: "06/10/2023",
    provider: "SoloLearn",
    note: "Basic Python programming principles.",
    image: "/images/Introduction to Python.png"
  },

  {
    title: "Introduction to HTML",
    date: "06/07/2023",
    provider: "SoloLearn",
    note: "HTML fundamentals and structure.",
    image: "/images/Introduction to HTML.png"
  },
  {
    title: "Introduction to CSS",
    date: "06/07/2023",
    provider: "SoloLearn",
    note: "Basic CSS styling and layout.",
    image: "/images/Introduction to CSS.png"
  }
];

/* ---------- Background grid ---------- */

function BackgroundGrid({ enabled }: { enabled: boolean }) {
  const haloClass = enabled
    ? "bg-[radial-gradient(ellipse_at_top,rgba(34,197,235,0.05),transparent_60%)]"
    : "bg-[radial-gradient(ellipse_at_top,rgba(34,197,235,0.12),transparent_60%)]";

  const gridOpacity = enabled ? "opacity-20" : "opacity-40";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className={`absolute inset-0 ${haloClass}`} />
      <svg
        className={`h-full w-full ${gridOpacity}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

/* ---------- Main page ---------- */

export default function PortfolioPage() {
  const { enabled, toggle } = useDarkMode();
  const [activeRole, setActiveRole] = useState<WorkItem | null>(null);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  // Lock background scroll when any modal is open
  useEffect(() => {
    if (activeRole || activeCert) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }
  }, [activeRole, activeCert]);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const message = formData.get("message")?.toString() ?? "";

    // Optional: if you still want to use their name in the subject, you can keep this:
    const name = formData.get("name")?.toString() ?? "";
    const subject = name
      ? `Portfolio message from ${name}`
      : "Portfolio message";

    const to = "david.gilligan1997@gmail.com";

    const mailtoUrl =
      `mailto:${encodeURIComponent(to)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;
  }

  const pageBg = enabled ? "bg-[#111111] text-white" : "bg-white text-gray-900";
  const cardBg = enabled ? "bg-black/40 text-white" : "bg-white/95 text-gray-900";
  const smallCardBg = enabled
    ? "bg-black/40 text-white"
    : "bg-white/80 text-gray-900";
  const ringClass = enabled ? "ring-gray-800" : "ring-gray-100";

  return (
    <div className={`relative min-h-screen antialiased ${pageBg}`}>
      <BackgroundGrid enabled={enabled} />

      {/* Page shell */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
        {/* Navbar */}
        <header className="mb-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* DG icon now uses ACCENT colour */}
            <div
              className="flex h-10 w-10 items-center justify-center rounded-2xl shadow-md text-white"
              style={{ backgroundColor: ACCENT }}
            >
              <span className="text-lg font-semibold">DG</span>
            </div>
            <div>
              <div
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-brand)" }}
              >
                David Gilligan
              </div>
              <p className={enabled ? "text-xs text-gray-400" : "text-xs text-gray-500"}>
                Project Controls · ERP · Software
              </p>
            </div>
          </div>

          <nav
            className={
              enabled
                ? "hidden items-center gap-5 text-sm text-gray-200 md:flex"
                : "hidden items-center gap-5 text-sm text-gray-700 md:flex"
            }
          >
            <a href="#intro" className={enabled ? "hover:text-white" : "hover:text-black"}>
              Introduction
            </a>
            <a href="#about" className={enabled ? "hover:text-white" : "hover:text-black"}>
              About
            </a>
            <a
              href="#qualifications"
              className={enabled ? "hover:text-white" : "hover:text-black"}
            >
              Qualifications
            </a>
            <a
              href="#experience"
              className={enabled ? "hover:text-white" : "hover:text-black"}
            >
              Work Experience
            </a>
            <a href="#erp" className={enabled ? "hover:text-white" : "hover:text-black"}>
              ERP
            </a>
            <a
              href="#contact"
              className={enabled ? "hover:text-white" : "hover:text-black"}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 sm:flex">
              <a
                href="https://www.linkedin.com/in/david-gilligan-808804164/"
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  enabled
                    ? "border-gray-700 text-gray-200 hover:bg-white/5"
                    : "border-gray-200 text-gray-700 hover:border-transparent hover:bg-[rgba(33,155,147,0.1)]"
                }`}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/DavidGilligan"
                target="_blank"
                rel="noreferrer"
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  enabled
                    ? "border-gray-700 text-gray-200 hover:bg-white/5"
                    : "border-gray-200 text-gray-700 hover:border-transparent hover:bg-[rgba(33,155,147,0.1)]"
                }`}
              >
                GitHub
              </a>
              <a
                href="#contact"
                className="rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm hover:brightness-110"
                style={{ backgroundColor: ACCENT }}
              >
                Contact
              </a>
            </div>

            {/* Dark / light toggle */}
            <button
              type="button"
              onClick={toggle}
              className={`flex h-9 w-9 items-center justify-center rounded-full border text-gray-800 shadow-sm transition ${
                enabled
                  ? "border-gray-700 bg-black/40 text-gray-100 hover:bg-black/60"
                  : "border-gray-200 bg-white text-gray-800 hover:bg-gray-50"
              }`}
              aria-label="Toggle dark mode"
            >
              {enabled ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex flex-1 flex-col gap-12 lg:flex-row lg:gap-10">
          {/* Left column: intro, about, work experience, CONTACT MOVED HERE */}
          <div className="flex-1 space-y-10" id="intro">
            {/* Hero / Introduction – taller so face shows */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl bg-neutral-900 text-white shadow-2xl ring-1 ring-black/5"
            >
              <div className="absolute inset-0">
                <img
                  src="/images/david-hero.jpg"
                  alt="Background of David Gilligan"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>

              <div className="relative z-10 flex min-h-[720px] flex-col p-6 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white/80 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Open to opportunities in Project Controls and Software</span>
                </div>

                <div className="mt-auto space-y-6">
                  <div>
                    <h1
                      className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
                      style={{ fontFamily: "var(--font-brand)" }}
                    >
                      David Gilligan
                    </h1>
                    <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                      Experienced in project controls, cost engineering and ERP
                      development across the energy and infrastructure sectors.
                      Currently combining hands-on cost control with MSc-level
                      computer science and software engineering.
                    </p>
                  </div>

                  <dl className="grid gap-4 text-xs text-white/80 sm:grid-cols-2 sm:text-sm lg:grid-cols-3">
                    <div>
                      <dt className="text-white/60">Current role</dt>
                      <dd className="font-medium">
                        Senior Cost / ERP Support Administrator
                      </dd>
                    </div>
                    <div>
                      <dt className="text-white/60">Location</dt>
                      <dd className="font-medium">Aberdeen, Scotland (UK)</dd>
                    </div>
                    <div>
                      <dt className="text-white/60">Focus</dt>
                      <dd className="font-medium">
                        Cost, ERP, DevOps, software for project delivery
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </motion.section>

            {/* About me */}
            <section id="about" className="space-y-4">
              <h2
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-brand)" }}
              >
                About me
              </h2>
              <div
                className={`space-y-3 rounded-2xl p-5 text-sm shadow-sm ring-1 ${ringClass} ${
                  enabled ? "bg-black/40 text-white" : "bg-white/90 text-gray-900"
                }`}
              >
                <p>
                  I work at the intersection of project controls, commercial management
                  and software. I have delivered cost control, reporting and ERP
                  improvements to support core contracts, including TotalEnergies and
                  Azule Energy (BP/ENI), while leading internal process and coordinating systems
                  development.
                </p>
                <p>
                  My background in Quantity Surveying gives me a strong commercial
                  foundation, and my MSc in Computer Science with Programming adds the
                  technical depth needed to design and implement modern tooling. I am
                  particularly interested in lightweight DevOps practices, automation and
                  better integrations between ERP, reporting and planning systems.
                </p>
                <p>
                  I enjoy working with cross-functional teams, translating between
                  engineers, commercial managers and developers so that systems directly
                  support the way people work on projects.
                </p>
              </div>
            </section>

            {/* Work experience */}
            <section id="experience" className="space-y-4">
              <h2
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-brand)" }}
              >
                Work experience
              </h2>

              <div className="space-y-3">
                {WORK_EXPERIENCE.map(role => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setActiveRole(role)}
                    className={`group flex w-full items-start justify-between gap-4 rounded-2xl p-4 text-left text-sm shadow-sm ring-1 ${ringClass} transition hover:-translate-y-0.5 ${
                      enabled
                        ? "bg-black/40 text-white hover:bg-[#1b1b1b]"
                        : "bg-white/95 text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <div>
                      <p
                        className={
                          enabled
                            ? "text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                            : "text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
                        }
                      >
                        {role.dates}
                      </p>
                      <h3 className="mt-1 text-base font-semibold">{role.title}</h3>
                      <p
                        className={
                          enabled
                            ? "text-xs text-gray-400"
                            : "text-xs text-gray-600"
                        }
                      >
                        {role.company} · {role.location}
                      </p>
                    </div>
                    <span
                      className={`mt-1 whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium transition ${
                        enabled
                          ? "border-gray-600 text-gray-200 group-hover:bg-white/5"
                          : "border-gray-300 text-gray-700 group-hover:border-transparent group-hover:bg-[rgba(33,155,147,0.1)] group-hover:text-gray-900"
                      }`}
                    >
                      View details
                    </span>
                  </button>
                ))}
              </div>

              <div
                className={`rounded-2xl p-4 text-xs shadow-sm ring-1 ${ringClass} ${
                  enabled
                    ? "bg-black/30 text-gray-300"
                    : "bg-white/80 text-gray-700"
                }`}
              >
                <h3 className="text-sm font-semibold">
                  Previous part-time roles
                </h3>
                <ul className="mt-2 space-y-1">
                  {PREVIOUS_PART_TIME.map(item => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* CONTACT MOVED HERE (left column) */}
            <section id="contact" className="space-y-4">
              <h2
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-brand)" }}
              >
                Contact me
              </h2>
              <div
                className={`rounded-2xl p-5 text-sm shadow-sm ring-1 ${ringClass} ${cardBg}`}
              >
                <p
                  className={
                    enabled
                      ? "text-sm text-gray-300"
                      : "text-sm text-gray-600"
                  }
                >
                  If you would like to discuss roles, collaborations or projects, feel
                  free to drop me a message. This form will open your email client and
                  send to{" "}
                  <a
                    href="mailto:david.gilligan1997@gmail.com"
                    className="font-medium underline-offset-2 hover:underline"
                    style={{ color: ACCENT }}
                  >
                    david.gilligan1997@gmail.com
                  </a>
                  .
                </p>

                <form
                  onSubmit={handleContactSubmit}
                  className="mt-4 space-y-3 text-sm"
                >
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <label
                        className={
                          enabled
                            ? "mb-1 block text-xs font-medium text-gray-300"
                            : "mb-1 block text-xs font-medium text-gray-700"
                        }
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        type="text"
                        className={`w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[rgba(33,155,147,0.3)] ${
                          enabled
                            ? "border-gray-700 bg-black/40 text-white"
                            : "border-gray-200 bg-white text-gray-900"
                        }`}
                      />
                    </div>
                    <div>
                      <label
                        className={
                          enabled
                            ? "mb-1 block text-xs font-medium text-gray-300"
                            : "mb-1 block text-xs font-medium text-gray-700"
                        }
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className={`w-full rounded-xl border px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[rgba(33,155,147,0.3)] ${
                          enabled
                            ? "border-gray-700 bg-black/40 text-white"
                            : "border-gray-200 bg-white text-gray-900"
                        }`}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className={
                        enabled
                          ? "mb-1 block text-xs font-medium text-gray-300"
                          : "mb-1 block text-xs font-medium text-gray-700"
                      }
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className={`w-full resize-none rounded-xl border px-3 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-[rgba(33,155,147,0.3)] ${
                        enabled
                          ? "border-gray-700 bg-black/40 text-white"
                          : "border-gray-200 bg-white text-gray-900"
                      }`}
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110"
                      style={{ backgroundColor: ACCENT }}
                    >
                      Send message
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>

          {/* Right column: qualifications, ERP (no contact here any more) */}
          <div className="flex-1 space-y-10">
            {/* Qualifications */}
            <section id="qualifications" className="space-y-4">
              <h2
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-brand)" }}
              >
                Qualifications
              </h2>

              <div className="space-y-4">
                {QUALIFICATIONS.map(q => (
                  <div
                    key={q.title}
                    className={`rounded-2xl p-5 text-sm shadow-sm ring-1 ${ringClass} ${cardBg}`}
                  >
                    <h3 className="text-base font-semibold">{q.title}</h3>
                    <p
                      className={
                        enabled
                          ? "text-xs text-gray-400"
                          : "text-xs text-gray-500"
                      }
                    >
                      {q.institution} · {q.dates}
                    </p>
                    <p className="mt-2 text-sm font-medium" style={{ color: ACCENT }}>
                      {q.grade}
                    </p>
                    {q.note && (
                      <p
                        className={
                          enabled
                            ? "mt-1 text-xs text-gray-400"
                            : "mt-1 text-xs text-gray-500"
                        }
                      >
                        {q.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Other certificates */}
              <div>
                <h3
                  className={
                    enabled
                      ? "mb-2 text-sm font-semibold text-gray-200"
                      : "mb-2 text-sm font-semibold text-gray-800"
                  }
                >
                  Other certificates
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {OTHER_CERTS.map(cert => (
                    <button
                      key={cert.title}
                      type="button"
                      onClick={() => cert.image && setActiveCert(cert)}
                      className={`text-left rounded-xl p-3 text-xs shadow-sm ring-1 ${ringClass} transition hover:-translate-y-0.5 ${
                        enabled
                          ? "bg-black/40 text-white hover:bg-[#1b1b1b]"
                          : "bg-white/80 text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">{cert.title}</span>
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: ACCENT }}
                        />
                      </div>
                      <p
                        className={
                          enabled
                            ? "mt-1 text-[11px] text-gray-400"
                            : "mt-1 text-[11px] text-gray-500"
                        }
                      >
                        {cert.provider} · {cert.date}
                      </p>
                      {cert.note && (
                        <p
                          className={
                            enabled
                              ? "mt-1 text-[11px] text-gray-400"
                              : "mt-1 text-[11px] text-gray-500"
                          }
                        >
                          {cert.note}
                        </p>
                      )}
                      {cert.image && (
                        <p className="mt-2 text-[10px] text-[color:var(--accent,#219b93)] underline-offset-2 hover:underline">
                          Click to view certificate
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* ERP systems */}
            <section id="erp" className="space-y-4">
              <h2
                className="text-xl font-semibold tracking-tight"
                style={{ fontFamily: "var(--font-brand)" }}
              >
                ERP systems used
              </h2>
              <div className="space-y-3">
                {ERP_SYSTEMS.map(sys => (
                  <div
                    key={`${sys.product}-${sys.company}`}
                    className={`flex flex-col gap-1 rounded-2xl p-4 text-sm shadow-sm ring-1 ${ringClass} ${cardBg}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <p
                          className={
                            enabled
                              ? "text-xs font-semibold uppercase tracking-[0.18em] text-gray-500"
                              : "text-xs font-semibold uppercase tracking-[0.18em] text-gray-400"
                          }
                        >
                          {sys.dates}
                        </p>
                        <h3 className="text-sm font-semibold">{sys.product}</h3>
                      </div>
                      <span
                        className="rounded-full px-3 py-1 text-[11px] font-medium"
                        style={{
                          backgroundColor: "rgba(33,155,147,0.08)",
                          color: ACCENT
                        }}
                      >
                        {sys.role}
                      </span>
                    </div>
                    <p
                      className={
                        enabled
                          ? "text-xs text-gray-400"
                          : "text-xs text-gray-600"
                      }
                    >
                      {sys.company}
                    </p>
                    {sys.note && (
                      <p
                        className={
                          enabled
                            ? "mt-1 text-[11px] text-gray-500"
                            : "mt-1 text-[11px] text-gray-500"
                        }
                      >
                        {sys.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Role modal */}
      {activeRole && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setActiveRole(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            onClick={e => e.stopPropagation()}
            className={`max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 text-sm shadow-2xl ring-1 ${
              enabled ? "ring-gray-800 bg-[#111111] text-white" : "ring-gray-100 bg-white text-gray-900"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p
                  className={
                    enabled
                      ? "text-xs font-semibold uppercase tracking-[0.2em] text-gray-500"
                      : "text-xs font-semibold uppercase tracking-[0.2em] text-gray-400"
                  }
                >
                  {activeRole.dates}
                </p>
                <h3 className="mt-1 text-lg font-semibold">{activeRole.title}</h3>
                <p
                  className={
                    enabled
                      ? "text-xs text-gray-400"
                      : "text-xs text-gray-600"
                  }
                >
                  {activeRole.company} · {activeRole.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveRole(null)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  enabled
                    ? "border-gray-700 text-gray-300 hover:bg-white/5"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Close
              </button>
            </div>

            <ul
              className={
                enabled
                  ? "mt-4 space-y-2 text-sm text-gray-200"
                  : "mt-4 space-y-2 text-sm text-gray-700"
              }
            >
              {activeRole.bullets.map((b, i) => (
                <li key={i} className="flex gap-2">
                  <span
                    className="mt-[6px] h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}

      {/* Certificate image modal */}
      {activeCert && activeCert.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            className={`w-full max-w-3xl rounded-3xl p-4 text-sm shadow-2xl ring-1 ${
              enabled ? "ring-gray-800 bg-[#111111] text-white" : "ring-gray-100 bg-white text-gray-900"
            }`}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">{activeCert.title}</h3>
                <p
                  className={
                    enabled
                      ? "text-[11px] text-gray-400"
                      : "text-[11px] text-gray-500"
                  }
                >
                  {activeCert.provider} · {activeCert.date}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                  enabled
                    ? "border-gray-700 text-gray-300 hover:bg:white/5"
                    : "border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                Close
              </button>
            </div>

            <div
              className={
                enabled
                  ? "max-h-[70vh] overflow-auto rounded-2xl bg-white/5"
                  : "max-h-[70vh] overflow-auto rounded-2xl bg-black/5"
              }
            >
              <img
                src={activeCert.image}
                alt={activeCert.title}
                className="mx-auto h-full w-full max-h-[70vh] object-contain"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
