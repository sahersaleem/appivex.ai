'use client'
 
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
 
const navLinks = [
  { label: 'Home',        href: '/'             },
  { label: 'Services',    href: '/services'   },
  { label: 'Work',        href: '/work'        },
  { label: 'About',       href: '/about'       },
  { label: 'Contact',     href: '/contact'     },
]
 
export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
 
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
 
  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-xl shadow-[0_1px_0_var(--border)]'
          : 'bg-transparent'}
      `}
    >
      <div className="max-w-[1160px] mx-auto px-6 lg:px-12 flex items-center justify-between h-[68px]">
 
        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Icon mark — mirrors the APPIVEX arrow icon */}
          <span className="
            relative flex items-center justify-center w-9 h-9 rounded-full
            bg-[var(--mint-glow)] border border-[var(--mint-glow)]
            group-hover:bg-[var(--mint-glow)] transition-all duration-300
          ">
            {/* Double arrow SVG matching the logo */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M2 4.5L9 9.5L2 14.5V4.5Z"
                fill="var(--mint)"
                className="transition-all"
              />
              <path
                d="M8 4.5L15 9.5L8 14.5V4.5Z"
                fill="var(--mint)"
                opacity="0.6"
                className="transition-all"
              />
              {/* Lightning cut-through */}
              <path
                d="M9 9L11.5 6.5L10 9L12 9.5L9.5 12L11 9.5L9 9Z"
                fill="#0A0A0A"
              />
            </svg>
            {/* Glow pulse ring */}
            <span className="
              absolute inset-0 rounded-full border border-[var(--mint)]
              opacity-0 group-hover:opacity-30
              scale-100 group-hover:scale-150
              transition-all duration-500
            " />
          </span>
 
          {/* Wordmark */}
          <span className="font-syne text-[1.15rem] font-extrabold tracking-[-0.02em] text-[var(--text-hi)]">
            APPI<span className="text-[var(--mint)]">VEX</span>
          </span>
        </Link>
 
        {/* ── Desktop Nav ───────────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="
                  relative px-4 py-2 text-[13px] font-medium font-dm
                  text-[var(--text-mid)] hover:text-[var(--text-hi)]
                  transition-colors duration-200 group
                "
              >
                {link.label}
                <span className="
                  absolute bottom-0 left-4 right-4 h-px bg-[var(--mint)]
                  scale-x-0 group-hover:scale-x-100
                  transition-transform duration-300 origin-left
                " />
              </Link>
            </li>
          ))}
        </ul>
 
        {/* ── Desktop CTA ───────────────────────────────────────────── */}
        <Link
          href="/contact"
          className="
            hidden md:inline-flex items-center gap-2
            font-syne text-[12px] font-bold uppercase tracking-[0.08em]
            bg-[var(--mint)] text-[#0A0A0A]
            px-5 py-2.5 rounded-lg
            hover:bg-white transition-all duration-200
            shadow-[0_0_20px_var(--mint-glow)]
          "
        >
          Book a Free Audit
          <span className="text-[10px]">→</span>
        </Link>
 
        {/* ── Mobile Toggle ─────────────────────────────────────────── */}
        <button
          className="md:hidden text-[var(--text-hi)] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
 
      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22,1,0.36,1] }}
            className="md:hidden overflow-hidden bg-[#111111] border-t border-[var(--border)]"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="
                      block py-3 text-[15px] font-medium font-dm
                      text-[var(--text-mid)] hover:text-[var(--mint)]
                      border-b border-[var(--border)] transition-colors
                    "
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="
                    block font-syne text-[13px] font-bold uppercase tracking-[0.06em]
                    bg-[var(--mint)] text-[#0A0A0A] text-center
                    px-5 py-3 rounded-lg
                    hover:bg-white transition-all
                  "
                  onClick={() => setOpen(false)}
                >
                  Book a Free Audit →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
 