import Image from "next/image";
import {
  COMPANY_NAME,
  LEGAL_NAME,
  EMAIL,
  LINKEDIN_URL,
  DEALLS_URL,
} from "@/lib/constants";

function EmailIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#080c1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo-pt.png"
                alt={COMPANY_NAME}
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{LEGAL_NAME}</p>
            <p className="mt-2 text-gray-500 text-sm leading-relaxed">
              Startup inovatif berfokus pada riset dan pengembangan bisnis
              mutakhir di bidang software, data, dan AI.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={DEALLS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-sm transition-colors"
                >
                  Karir (Dealls)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <EmailIcon />
                {EMAIL}
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <LocationIcon />
                Bandung, Jawa Barat (Operational)
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <LocationIcon />
                Sidoarjo, Jawa Timur (Head Office)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 dark:text-gray-600 text-sm">
            &copy; {year} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={DEALLS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              aria-label="Dealls"
            >
              <BriefcaseIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
