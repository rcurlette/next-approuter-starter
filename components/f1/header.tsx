"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Races", href: "#races" },
  { label: "Drivers", href: "#drivers" },
  { label: "Teams", href: "#teams" },
  { label: "News", href: "#news" },
  { label: "Watch", href: "#watch" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="w-8 h-8" aria-hidden="true">
              <path d="M20 4L8 12v16l12 8 12-8V12L20 4z" fill="#4F8FEA"/>
              <path d="M20 4L8 12l12 8 12-8-12-8z" fill="#7CB3F0"/>
              <path d="M20 20l12-8v16l-12 8V20z" fill="#E53935"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-lg tracking-wide text-foreground">
                COMPOSABLE GP
              </span>
              <span className="text-xs text-muted-foreground tracking-widest">
                by uniform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-primary/90 transition-colors mt-2">
                Subscribe
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
