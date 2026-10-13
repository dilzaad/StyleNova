
import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import {
  ArrowRight,
  ShoppingBag,
  Star,
  Sparkles,
  CheckCircle,
  X
} from 'lucide-react'

import { useCart } from '../../Context/CartContext'

const products = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    category: 'Men / Casual',
    price: 1299,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85',
    gender: 'Men',
    color: 'Black'
  },
  {
    id: 2,
    name: 'Classic Everyday Jacket',
    category: 'Men / Streetwear',
    price: 3499,
    rating: '4.8',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85',
    gender: 'Men',
    color: 'Brown'
  },
  {
    id: 3,
    name: 'Minimal Everyday Outfit',
    category: 'Women / Casual',
    price: 2499,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85',
    gender: 'Women',
    color: 'Neutral'
  },
  {
    id: 4,
    name: 'Urban Streetwear',
    category: 'Unisex / Trending',
    price: 1999,
    rating: '4.7',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=85',
    gender: 'Unisex',
    color: 'White'
  }
]

const Product = () => {
  const location = useLocation()
  const isProductPage = location.pathname === '/product'

  // Shared cart from Context
  const { cart, addToCart, removeFromCart } = useCart()

  const [message, setMessage] = useState('')

  const handleAddToCart = (product) => {
    addToCart(product)

    setMessage(`${product.name} added to cart successfully!`)

    setTimeout(() => {
      setMessage('')
    }, 2500)
  }

  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <div className="min-h-screen bg-gray-950 px-5 py-12 text-white sm:px-8 lg:px-12">

      {isProductPage ? (
        <div className="mx-auto max-w-7xl">

          {/* Success Notification */}
          {message && (
            <div className="fixed right-5 top-24 z-50 flex max-w-sm items-center gap-3 rounded-2xl border border-green-500/30 bg-gray-900 px-5 py-4 shadow-2xl shadow-green-950/30">
              <CheckCircle
                className="shrink-0 text-green-400"
                size={22}
              />

              <p className="text-sm font-semibold text-green-300">
                {message}
              </p>

              <button
                onClick={() => setMessage('')}
                aria-label="Close notification"
                className="ml-2 text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
          )}

          {/* Cart Summary */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              Find your next favourite style.
            </p>

            <Link
              to="/cart"
              className="flex items-center gap-3 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-3 transition hover:bg-violet-500/20"
            >
              <ShoppingBag
                className="text-violet-400"
                size={20}
              />

              <span className="font-semibold">
                Cart ({cart.length})
              </span>
            </Link>
          </div>

          {/* Page Heading */}
          <div className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-950 via-gray-900 to-blue-950 p-8 sm:p-12">
            <div className="absolute -right-10 -top-16 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
                <Sparkles size={16} />
                Find your perfect look
              </span>

              <h1 className="mt-5 text-4xl font-black sm:text-5xl">
                Our{' '}
                <span className="text-violet-400">
                  Collection
                </span>
              </h1>

              <p className="mt-4 max-w-xl leading-7 text-gray-400">
                Explore everyday essentials, modern streetwear and
                fresh styles for your wardrobe.
              </p>
            </div>
          </div>

          {/* Category Links */}
          <div className="mb-10 flex flex-wrap gap-3">
            <Link
              to="/product"
              className="rounded-xl border border-violet-400 bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-500"
            >
              All Products
            </Link>

            <Link
              to="/product/Men"
              className="rounded-xl border border-white/10 bg-gray-900 px-5 py-3 font-semibold text-gray-300 transition hover:border-violet-400 hover:text-white"
            >
              Men
            </Link>

            <Link
              to="/product/Women"
              className="rounded-xl border border-white/10 bg-gray-900 px-5 py-3 font-semibold text-gray-300 transition hover:border-violet-400 hover:text-white"
            >
              Women
            </Link>
          </div>

          {/* Products Heading */}
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-violet-400">
                Made for your style
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                All Products
              </h2>
            </div>

            <span className="text-sm text-gray-500">
              {products.length} items
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-950/30"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    {product.gender}
                  </span>

                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-black/70 px-3 py-2 text-sm text-yellow-400 backdrop-blur">
                    <Star size={14} fill="currentColor" />
                    {product.rating}
                  </span>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-violet-300">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold transition group-hover:text-violet-300">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Colour: {product.color}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-xl font-extrabold">
                      Rs.{' '}
                      {product.price.toLocaleString('en-PK')}
                    </p>

                    <span className="inline-flex items-center gap-1 text-sm text-yellow-400">
                      <Star size={14} fill="currentColor" />
                      {product.rating}
                    </span>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 font-bold text-white transition hover:bg-violet-500 active:scale-95"
                  >
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Cart Items */}
          <div className="mt-14 rounded-3xl border border-white/10 bg-gray-900/70 p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <ShoppingBag
                className="text-violet-400"
                size={26}
              />

              <h2 className="text-2xl font-bold">
                Your Cart ({cart.length})
              </h2>
            </div>

            {cart.length === 0 ? (
              <p className="py-6 text-gray-400">
                Your cart is empty. Add a product to get started!
              </p>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={`${item.id}-${index}`}
                      className="flex flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-gray-950 p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-20 rounded-xl object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-400">
                          {item.color}
                        </p>

                        <p className="mt-1 font-bold text-violet-400">
                          Rs.{' '}
                          {item.price.toLocaleString('en-PK')}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(index)}
                        className="rounded-lg border border-red-500/30 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500/10"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-sm text-gray-400">
                      Total Amount
                    </p>

                    <p className="mt-1 text-2xl font-black">
                      Rs. {cartTotal.toLocaleString('en-PK')}
                    </p>
                  </div>

                  <Link
                    to="/cart"
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-bold transition hover:bg-violet-500 active:scale-95"
                  >
                    View Cart
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </>
            )}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Demo products, prices and ratings are sample data.
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-7xl">
          <Link
            to="/product"
            className="mb-8 inline-flex items-center gap-2 text-sm text-violet-300 transition hover:text-white"
          >
            <ArrowRight className="rotate-180" size={17} />
            Back to all products
          </Link>

          <Outlet />
        </div>
      )}
    </div>
  )
}

export default Product
