import Link from 'next/link'

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Privacy', href: '/legal/privacy' },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/appivex',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/appivex',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/appivex',
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] px-6 lg:px-14 py-10 border-t border-white/[0.06]">

      {/* Top row — logo + tagline + socials */}
      <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-white/[0.06] mb-8">

        {/* Logo + tagline */}
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            {/* Icon mark */}
            <div className="w-[30px] h-[30px] rounded-full bg-[rgba(0,214,143,0.1)] border border-[rgba(0,214,143,0.18)] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 18 18" fill="none">
                <path d="M2 4.5L9 9.5L2 14.5V4.5Z" fill="#00D68F" />
                <path d="M8 4.5L15 9.5L8 14.5V4.5Z" fill="#00D68F" opacity="0.5" />
                <path d="M9 9L11.5 6.5L10 9L12 9.5L9.5 12L11 9.5L9 9Z" fill="#0A0A0A" />
              </svg>
            </div>
            <span className="font-syne text-[15px] font-extrabold tracking-[-0.02em] text-white/40">
              APPI<span className="text-[rgba(0,214,143,0.6)]">VEX</span>
            </span>
          </div>
          <p className="font-dm text-[12px] text-white/20 tracking-[0.04em]">
            We Build. We Automate. We Scale.
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-lg border border-white/[0.08] flex items-center justify-center hover:border-[rgba(0,214,143,0.3)] hover:bg-[rgba(0,214,143,0.05)] transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom row — links + copyright */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-dm text-[12px] text-white/28 hover:text-white/60 transition-colors tracking-[0.04em]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <span className="font-dm text-[12px] text-white/18">
          © {new Date().getFullYear()} APPIVEX. All rights reserved.
        </span>
      </div>

    </footer>
  )
}