
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sparkles,
  ShieldCheck,
  Truck,
  RefreshCw
} from 'lucide-react'

const About = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <Sparkles size={25} />,
      title: 'Modern Styles',
      description:
        'Discover stylish collections designed for everyday confidence.',
      color: 'text-violet-400',
      bg: 'bg-violet-500/10'
    },
    {
      icon: <ShieldCheck size={25} />,
      title: 'Quality First',
      description:
        'Our goal is to bring you fashion that looks good and feels great.',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10'
    },
    {
      icon: <Truck size={25} />,
      title: 'Easy Shopping',
      description:
        'Explore your favorite styles with a simple shopping experience.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10'
    },
    {
      icon: <RefreshCw size={25} />,
      title: 'Customer Focus',
      description:
        'We believe shopping should feel smooth, simple and enjoyable.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 px-4 py-8 text-white sm:px-8 lg:px-12">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"
          alt="Fashion store"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/80 to-violet-950/30" />

        <div className="px-6 py-16 sm:px-12 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            <Sparkles size={16} />
            Get to know us
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Fashion is more than clothes.
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              It's your identity.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl leading-7 text-gray-300 sm:text-lg">
            Welcome to Dilzaad. We believe your style should express
            who you are. Explore modern looks, timeless essentials
            and collections made for every mood.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/product"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3.5 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Explore Collections
              <ArrowRight size={18} />
            </Link>

            <button
              onClick={() => navigate('/')}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-semibold transition hover:bg-white/10"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="grid items-center gap-10 py-16 md:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-400">
            Our Story
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Style that speaks
            <span className="block text-gray-400">without saying a word.</span>
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            Dilzaad is a fashion-store concept built around personal
            style, modern design and a clean shopping experience.
            Our collections bring together everyday outfits and
            contemporary fashion inspiration.
          </p>

          <p className="mt-4 leading-7 text-gray-400">
            Whether you prefer a minimal look or bold streetwear,
            our goal is to help you explore styles that feel like you.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="rounded-xl bg-pink-500/10 p-3 text-pink-400">
              <Heart size={24} />
            </div>

            <div>
              <h3 className="font-bold">Made for your style</h3>
              <p className="mt-1 text-sm text-gray-500">
                Be yourself. Wear your confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 blur-2xl transition group-hover:from-violet-600/30 group-hover:to-pink-600/30" />

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
            alt="People exploring fashion"
            className="relative h-80 w-full rounded-3xl border border-white/10 object-cover sm:h-96"
            loading="lazy"
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-xl">
            <p className="text-lg font-bold">Find your own look.</p>
            <p className="mt-1 text-sm text-gray-300">
              Your personality. Your fashion. Your rules.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
            What makes us different
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            We want your fashion journey to be stylish, simple
            and enjoyable.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-white/10 bg-gray-900/70 p-6 transition duration-300 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-gray-900"
            >
              <div
                className={`mb-5 inline-flex rounded-xl p-3 ${feature.bg} ${feature.color} transition group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold">{feature.title}</h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Section */}
      <section className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-950/50 via-gray-900 to-pink-950/30 p-8 sm:p-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-pink-300">
              YOUR NEXT LOOK STARTS HERE
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Ready to explore?
            </h2>

            <p className="mt-3 max-w-xl text-gray-400">
              Discover our men's and women's collections and find
              a style that matches your personality.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-semibold transition hover:bg-white/10"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

            <button
              onClick={() => navigate('/product')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-5 py-3 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20"
            >
              Go Next
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
