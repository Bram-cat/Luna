"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const pathname = usePathname()

  const letters = ["L", "u", "n", "a", " ", "E", "c", "l", "e", "c", "t", "i", "c", " ", "E", "m", "p", "o", "r", "i", "u", "m"]

  const isActive = (path: string) => pathname === path

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Animated Brand Name */}
          <Link
            href="/"
            className="relative flex items-center group"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="relative overflow-hidden">
              {!isLogoHovered ? (
                <span className="text-2xl font-bold text-white tracking-[0.15em] transition-all duration-300 group-hover:tracking-[0.2em]">
                  LEE
                </span>
              ) : (
                <span className="text-2xl font-bold text-white inline-flex">
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-letter-appear"
                      style={{
                        animationDelay: `${index * 35}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      {letter === " " ? "\u00A0" : letter}
                    </span>
                  ))}
                </span>
              )}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                isActive("/")
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                isActive("/about")
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`relative px-5 py-2.5 text-sm font-semibold transition-all duration-200 rounded-lg ml-2 ${
                isActive("/contact")
                  ? "text-black bg-white"
                  : "text-black bg-white hover:bg-gray-200"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-white/[0.08]">
            <Link
              href="/"
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive("/")
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive("/about")
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                isActive("/contact")
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
