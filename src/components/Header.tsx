'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navItems, personalInfo } from '../data/portfolio'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#1D3557] dark:text-[#457B9D] hover:text-gray-600 dark:hover:text-[#457EAF] transition-colors">
            {personalInfo.name}
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-gray-600 dark:hover:text-gray-300 transition-colors ${
                  pathname === item.href ? 'text-blue-600 dark:text-blue-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button className="p-2" aria-label="Toggle menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
} 