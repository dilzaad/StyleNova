
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Home,
  ArrowLeft,
  ShoppingBag,
  Sparkles,
  SearchX
} from 'lucide-react'

const Notfound = () => {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gray-950 px-4 py-16 text-white">

      {/* Background Effects */}
      <div className="absolute left-1/4 top-10 h-64 w-64 animate-pulse rounded-full bg-violet-600/10 blur-3xl" />

      <div className="absolute bottom-10 right-1/4 h-64 w-64 animate-pulse rounded-full bg-pink-600/10 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-violet-400/20 bg-violet-500/10 text-violet-400 shadow-lg shadow-violet-500/10">
          <SearchX size={38} strokeWidth={1.5} />
        </div>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          <Sparkles size={15} className="text-pink-400" />
          Oops! Something went wrong
        </p>

        <h1 className="mt-5 text-8xl font-black tracking-tight sm:text-9xl">
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>

        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
          This page is out of style!
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
          Looks like this page has gone missing from our collection.
          Don't worry — your next favorite look is just a click away.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3.5 font-bold transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/product"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/10"
          >
            <ShoppingBag size={18} />
            Explore Products
          </Link>

        </div>

        <button
          onClick={() => window.history.back()}
          className="mt-7 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-violet-400"
        >
          <ArrowLeft size={16} />
          Go to previous page
        </button>

        <div className="mx-auto mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <p className="mt-5 text-xs tracking-widest text-gray-600">
          DILZAAD · WEAR YOUR OWN STYLE
        </p>

      </div>
    </div>
  )
}

export default Notfound
