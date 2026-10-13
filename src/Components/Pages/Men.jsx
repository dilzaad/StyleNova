
import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Star, Sparkles } from 'lucide-react'

const menProducts = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    category: 'Casual Wear',
    price: 1299,
    rating: '4.9',
    color: 'Black',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 2,
    name: 'Classic Everyday Jacket',
    category: 'Streetwear',
    price: 3499,
    rating: '4.8',
    color: 'Brown',
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 3,
    name: 'Modern Casual Outfit',
    category: 'Everyday Style',
    price: 2299,
    rating: '4.7',
    color: 'Neutral',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 4,
    name: 'Urban Streetwear Tee',
    category: 'Trending',
    price: 1599,
    rating: '4.8',
    color: 'White',
    image:
      'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=700&q=85'
  }
]

const Men = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Men's Collection Banner */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=90"
          alt="Men's fashion collection"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/20" />

        <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            The men's edit
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-6xl">
            Own Your
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Style.
            </span>
          </h1>

          <p className="mt-5 max-w-lg leading-7 text-gray-300">
            Upgrade your wardrobe with everyday essentials,
            modern fits and statement pieces designed for your vibe.
          </p>

          <Link
            to="/product"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
          >
            <ArrowLeft size={18} />
            All Collections
          </Link>
        </div>
      </section>

      {/* Collection Heading */}
      <section className="py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
              Fresh fits for you
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Men's Collection
            </h2>
            <p className="mt-3 text-gray-400">
              Explore our latest men's styles.
            </p>
          </div>

          <span className="rounded-full border border-white/10 bg-gray-900 px-4 py-2 text-sm text-gray-300">
            {menProducts.length} Products
          </span>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {menProducts.map((product) => (
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

                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-semibold backdrop-blur">
                  Men's Wear
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
                    Rs. {product.price.toLocaleString('en-PK')}
                  </p>

                  <Link
                    to="/product"
                    aria-label={`Explore ${product.name}`}
                    className="rounded-xl bg-violet-600 p-3 text-white transition hover:bg-violet-500"
                  >
                    <ShoppingBag size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Demo prices and ratings are sample data.
        </p>
      </section>

    </div>
  )
}

export default Men
