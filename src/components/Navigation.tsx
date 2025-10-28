"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const letters = ["L", "u", "n", "a", " ", "E", "c", "l", "e", "c", "t", "i", "c", " ", "E", "m", "p", "o", "r", "i", "u", "m"]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Animated Brand Name */}
          <Link
            href="/"
            className="relative group"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="relative overflow-hidden py-2">
              {!isLogoHovered ? (
                <span className="text-2xl font-bold text-white tracking-[0.3em] transition-all duration-500" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>
                  LEE
                </span>
              ) : (
                <span className="text-2xl font-bold text-white inline-flex" style={{ fontFamily: 'system-ui, -apple-system, sans-serif', fontWeight: 700 }}>
                  {letters.map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-letter-appear"
                      style={{
                        animationDelay: `${index * 40}ms`,
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
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
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
          <div className="md:hidden py-4 space-y-2 border-t border-white/10">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
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
