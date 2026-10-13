
import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  ShoppingBag,
  Star,
  Sparkles,
  Truck,
  ShieldCheck,
  RefreshCw
} from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    category: 'Men / Casual',
    price: 1299,
    rating: '4.9',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85',
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
    color: 'White'
  }
]

const categories = [
  {
    name: 'Men',
    description: 'Everyday essentials & streetwear',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85',
    link: '/product/Men'
  },
  {
    name: 'Women',
    description: 'Modern looks made for you',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
    link: '/product/Women'
  }
]

const Home = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-950 text-white">

      {/* Hero Section */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(124,58,237,0.22),_transparent_55%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24 lg:px-12 lg:py-28">

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Sparkles size={16} />
              New season. New style.
            </span>

            <h1 className="mt-7 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Wear Your
              <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
                Own Style.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
              Discover clothing that matches your personality.
              Premium looks, everyday comfort, and styles that
              make you stand out.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/product"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-bold shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-violet-500/40"
              >
                Shop Collection
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/about"
                className="rounded-xl border border-white/15 px-6 py-4 font-semibold text-gray-200 transition hover:border-violet-400 hover:bg-white/5"
              >
                Discover Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
              <div>
                <p className="text-2xl font-extrabold">New</p>
                <p className="mt-1 text-sm text-gray-500">
                  Seasonal styles
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold">4.8/5</p>
                <p className="mt-1 text-sm text-gray-500">
                  Sample rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-extrabold">Everyday</p>
                <p className="mt-1 text-sm text-gray-500">
                  Comfort first
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-600/20 to-blue-500/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gray-900 p-3 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=90"
                alt="Modern fashion collection"
                className="h-[430px] w-full rounded-[1.5rem] object-cover sm:h-[540px]"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-black/65 p-5 backdrop-blur-xl">
                <p className="text-sm text-violet-300">
                  THE NEW COLLECTION
                </p>

                <div className="mt-2 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-bold">
                      Style that speaks
                    </h2>
                    <p className="mt-1 text-sm text-gray-300">
                      Find your next favorite look.
                    </p>
                  </div>

                  <Link
                    to="/product"
                    aria-label="Explore collection"
                    className="rounded-xl bg-white p-3 text-black transition hover:bg-violet-200"
                  >
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-10 hidden rounded-xl border border-white/10 bg-gray-900/90 px-4 py-3 shadow-xl sm:block">
              <p className="text-sm font-bold">Fresh Fits ✨</p>
              <p className="mt-1 text-xs text-gray-400">
                Made for your vibe
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-12">

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-violet-500/10 p-3 text-violet-300">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-bold">Delivery Information</h3>
              <p className="mt-1 text-sm text-gray-500">
                Delivery options at checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-500/10 p-3 text-blue-300">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold">Shop with Confidence</h3>
              <p className="mt-1 text-sm text-gray-500">
                Browse your next favorite style
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-pink-500/10 p-3 text-pink-300">
              <RefreshCw size={24} />
            </div>
            <div>
              <h3 className="font-bold">Easy Shopping</h3>
              <p className="mt-1 text-sm text-gray-500">
                Simple, smooth browsing experience
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
              Find your fit
            </p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Shop by Category
            </h2>
          </div>

          <Link
            to="/product"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white"
          >
            All products <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.name}
              className="group relative isolate min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-gray-900 sm:min-h-[400px]"
            >
              <img
                src={category.image}
                alt={`${category.name} fashion`}
                className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-sm text-violet-300">
                  EXPLORE THE COLLECTION
                </p>
                <h3 className="mt-2 text-4xl font-extrabold">
                  {category.name}
                </h3>
                <p className="mt-2 text-gray-300">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 font-semibold transition group-hover:gap-4">
                  Explore Now <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Products */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12">

          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
                Handpicked for you
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Trending Pieces
              </h2>
              <p className="mt-3 text-gray-400">
                Explore styles for your everyday wardrobe.
              </p>
            </div>

            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-white"
            >
              View All <ArrowRight size={17} />
            </Link>
          </div>

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

                  <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                    Trending
                  </span>

                  <div className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-2.5 py-1.5 text-sm text-yellow-400 backdrop-blur">
                    <span className="inline-flex items-center gap-1">
                      <Star size={14} fill="currentColor" />
                      {product.rating}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-wider text-violet-300">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-lg font-bold transition group-hover:text-violet-300">
                    {product.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <p className="text-xl font-extrabold">
                      Rs. {product.price.toLocaleString('en-PK')}
                    </p>

                    {/* Open the selected product details */}
                    <Link
                      to={`/product-details/${product.id}`}
                      aria-label={`View details for ${product.name}`}
                      title="View product details"
                      className="rounded-xl bg-white/5 p-3 text-white transition hover:bg-violet-600"
                    >
                      <ShoppingBag size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Note: Prices and ratings shown are sample demo data.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-r from-violet-950 via-gray-900 to-blue-950 px-6 py-14 text-center sm:px-12 sm:py-20">

          <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative">
            <Sparkles
              className="mx-auto text-violet-300"
              size={32}
            />

            <h2 className="mt-5 text-3xl font-black sm:text-5xl">
              Your Style. Your Rules.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-300">
              Explore the collection and find pieces that feel
              like you. Your next favorite look starts here.
            </p>

            <Link
              to="/product"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-gray-950 transition hover:-translate-y-1 hover:bg-violet-100"
            >
              Explore the Store <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
