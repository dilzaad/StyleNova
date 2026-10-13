
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Sparkles
} from 'lucide-react'

const womenProducts = [
  {
    id: 1,
    name: 'Everyday Chic Outfit',
    category: 'Casual Wear',
    price: 2499,
    rating: '4.9',
    color: 'Neutral',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 2,
    name: 'Elegant Summer Dress',
    category: 'Summer Collection',
    price: 2999,
    rating: '4.8',
    color: 'Beige',
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 3,
    name: 'Modern Street Style',
    category: 'Streetwear',
    price: 2199,
    rating: '4.7',
    color: 'Black',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=700&q=85'
  },
  {
    id: 4,
    name: 'Minimal Fashion Look',
    category: 'Everyday Style',
    price: 2699,
    rating: '4.8',
    color: 'Classic',
    image:
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=85'
  }
]

const Women = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Women's Collection Banner */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=90"
          alt="Women's fashion collection"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-40"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/75 to-gray-950/20" />

        <div className="px-6 py-16 sm:px-10 sm:py-24 lg:px-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-400/10 px-4 py-2 text-sm text-pink-300">
            <Sparkles size={16} />
            The women's edit
          </span>

          <h1 className="mt-6 text-4xl font-black sm:text-6xl">
            Elegance in
            <span className="block bg-gradient-to-r from-pink-400 via-fuchsia-300 to-violet-400 bg-clip-text text-transparent">
              Every Detail.
            </span>
          </h1>

          <p className="mt-5 max-w-lg leading-7 text-gray-300">
            Discover your next favorite look with modern styles,
            effortless outfits and fashion made for your personality.
          </p>

          <Link
            to="/product"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-pink-600 to-violet-600 px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20"
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
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400">
              Your style, your story
            </p>

            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Women's Collection
            </h2>

            <p className="mt-3 text-gray-400">
              Find your look for every moment.
            </p>
          </div>

          <span className="rounded-full border border-white/10 bg-gray-900 px-4 py-2 text-sm text-gray-300">
            {womenProducts.length} Products
          </span>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {womenProducts.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-gray-900/70 transition duration-300 hover:-translate-y-2 hover:border-pink-500/40 hover:shadow-xl hover:shadow-pink-950/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-semibold backdrop-blur">
                  Women's Wear
                </span>

                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-lg bg-black/70 px-3 py-2 text-sm text-yellow-400 backdrop-blur">
                  <Star size={14} fill="currentColor" />
                  {product.rating}
                </span>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-wider text-pink-300">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-bold transition group-hover:text-pink-300">
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
                    className="rounded-xl bg-pink-600 p-3 text-white transition hover:bg-pink-500"
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

export default Women
