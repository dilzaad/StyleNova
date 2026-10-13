
import React from 'react'
import { Link } from 'react-router-dom'

import {
  FaInstagram,
  FaFacebookF,
  FaGithub
} from 'react-icons/fa'

import {
  ArrowUpRight,
  Heart,
  Sparkles,
  Mail
} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gray-950 text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-violet-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-0 h-64 w-64 rounded-full bg-pink-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-6 pt-14 sm:px-10 lg:px-12">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 shadow-lg shadow-violet-500/20">
                <Sparkles size={21} />
              </div>

              <span className="text-2xl font-black tracking-tight">
                Dilzaad
                <span className="text-violet-400">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Discover your style. Express your personality.
              Explore modern fashion and find the look that
              feels uniquely yours.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-400"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-400"
              >
                <FaFacebookF size={19} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-400"
              >
                <FaGithub size={19} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li>
                <Link to="/" className="transition hover:text-violet-400">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="transition hover:text-violet-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/product" className="transition hover:text-violet-400">
                  All Products
                </Link>
              </li>

              <li>
                <Link to="/Courses" className="transition hover:text-violet-400">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-base font-bold">Collections</h3>

            <ul className="mt-5 space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/product/Men"
                  className="inline-flex items-center gap-1 transition hover:text-violet-400"
                >
                  Men's Fashion
                  <ArrowUpRight size={14} />
                </Link>
              </li>

              <li>
                <Link
                  to="/product/Women"
                  className="inline-flex items-center gap-1 transition hover:text-violet-400"
                >
                  Women's Fashion
                  <ArrowUpRight size={14} />
                </Link>
              </li>

              <li>
                <Link to="/product" className="transition hover:text-violet-400">
                  Trending Styles
                </Link>
              </li>

              <li>
                <Link to="/product" className="transition hover:text-violet-400">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold">Stay Connected</h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Follow us for fresh styles, fashion inspiration
              and the latest updates.
            </p>

            <a
              href="mailto:hello@dilzaad.example"
              className="mt-5 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300 transition hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white"
            >
              <Mail size={18} className="text-violet-400" />
              Get in touch
            </a>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} Dilzaad. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5 text-xs text-gray-500 sm:text-sm">
            Crafted with
            <Heart size={14} className="fill-pink-500 text-pink-500" />
            and React
          </p>

          <Link
            to="/"
            className="text-xs font-medium text-gray-500 transition hover:text-violet-400 sm:text-sm"
          >
            Back to top ↑
          </Link>

        </div>
      </div>
    </footer>
  )
}

export default Footer
