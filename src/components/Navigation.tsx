"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const letters = ["L", "u", "n", "a", " ", "E", "c", "l", "e", "c", "t", "i", "c", " ", "E", "m", "p", "o", "r", "i", "u", "m"]

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-[980px] mx-auto px-5">
        <div className="flex justify-between items-center h-[44px]">
          {/* Animated Brand Name */}
          <Link
            href="/"
            className="relative flex items-center"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="relative overflow-hidden">
              {!isLogoHovered ? (
                <span className="text-[21px] font-semibold text-white tracking-tight transition-all duration-300">
                  LEE
                </span>
              ) : (
                <span className="text-[21px] font-semibold text-white inline-flex">
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
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-[12px] font-normal text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[12px] font-normal text-gray-300 hover:text-white transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[12px] font-normal text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-1 hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
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
          <div className="md:hidden py-4 space-y-1 border-t border-white/10 mt-1">
            <Link
              href="/"
              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
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
