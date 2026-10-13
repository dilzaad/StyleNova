
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Zap,
  Menu,
  X,
  ShoppingBag,
  ChevronDown
} from 'lucide-react'
import { useCart } from '../Context/CartContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { cartCount } = useCart()

  const closeMenu = () => setMenuOpen(false)

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/'
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    )
  }

  const linkStyle = (path) =>
    `relative py-2 font-medium transition duration-300 ${
      isActive(path)
        ? 'text-violet-400'
        : 'text-gray-300 hover:text-violet-400'
    }`

  const mobileLinkStyle = (path) =>
    `block rounded-xl px-4 py-3 transition duration-300 ${
      isActive(path)
        ? 'bg-violet-500/10 text-violet-400'
        : 'text-gray-200 hover:bg-white/5 hover:text-violet-400'
    }`

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 px-5 py-4 shadow-lg shadow-violet-950/10 backdrop-blur-xl md:px-12">

      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
        >
          <div className="rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 p-2.5 shadow-lg shadow-violet-500/30 transition duration-300 group-hover:rotate-6 group-hover:scale-110">
            <Zap size={25} className="text-white" />
          </div>

          <span className="text-2xl font-extrabold tracking-wide text-white">
            Dilzaad
            <span className="text-violet-400">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">

          <Link to="/" className={linkStyle('/')}>
            Home
          </Link>

          <Link to="/about" className={linkStyle('/about')}>
            About
          </Link>

          {/* Shop Dropdown */}
          <div className="group relative">
            <Link
              to="/product"
              className={`flex items-center gap-1 ${linkStyle('/product')}`}
              aria-haspopup="true"
            >
              Shop
              <ChevronDown
                size={16}
                className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </Link>

            <div className="invisible absolute left-0 top-full w-48 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-xl border border-white/10 bg-gray-900 p-2 shadow-2xl shadow-black/30">

                <Link
                  to="/product"
                  className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-violet-400"
                >
                  All Products
                </Link>

                <Link
                  to="/product/Men"
                  className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-violet-400"
                >
                  Men's Collection
                </Link>

                <Link
                  to="/product/Women"
                  className="block rounded-lg px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-violet-400"
                >
                  Women's Collection
                </Link>

              </div>
            </div>
          </div>

          <Link to="/Courses" className={linkStyle('/Courses')}>
            Courses
          </Link>
        </div>

        {/* Desktop Cart and Shop Buttons */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Cart Icon */}
          <Link
            to="/cart"
            className={`relative inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition ${
              isActive('/cart')
                ? 'border-violet-500 bg-violet-500/10 text-violet-300'
                : 'border-white/10 text-white hover:bg-white/10'
            }`}
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingBag size={20} />
            <span>Cart</span>

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            to="/product"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/40"
          >
            <ShoppingBag size={18} />
            Shop Now
          </Link>
        </div>

        {/* Mobile Cart and Menu Buttons */}
        <div className="flex items-center gap-3 md:hidden">

          <Link
            to="/cart"
            onClick={closeMenu}
            className="relative rounded-xl border border-white/10 p-2.5 text-white transition hover:bg-violet-600"
            aria-label={`Shopping cart, ${cartCount} items`}
          >
            <ShoppingBag size={22} />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-500 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-white transition hover:bg-white/10"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="mt-5 flex flex-col gap-1 border-t border-white/10 pt-4 md:hidden"
        >

          <Link
            to="/"
            onClick={closeMenu}
            className={mobileLinkStyle('/')}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={closeMenu}
            className={mobileLinkStyle('/about')}
          >
            About
          </Link>

          <Link
            to="/product"
            onClick={closeMenu}
            className={mobileLinkStyle('/product')}
          >
            All Products
          </Link>

          <Link
            to="/product/Men"
            onClick={closeMenu}
            className={mobileLinkStyle('/product/Men')}
          >
            Men's Collection
          </Link>

          <Link
            to="/product/Women"
            onClick={closeMenu}
            className={mobileLinkStyle('/product/Women')}
          >
            Women's Collection
          </Link>

          <Link
            to="/Courses"
            onClick={closeMenu}
            className={mobileLinkStyle('/Courses')}
          >
            Courses
          </Link>

          <Link
            to="/product"
            onClick={closeMenu}
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 font-semibold text-white transition hover:shadow-lg hover:shadow-violet-500/20"
          >
            <ShoppingBag size={18} />
            Shop Now
          </Link>

        </div>
      )}

    </nav>
  )
}

export default Navbar
