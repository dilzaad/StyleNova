
import React from 'react'
import { Link } from 'react-router-dom'
import {
  Trash2,
  Minus,
  Plus,
  ShoppingBag,
  ArrowLeft
} from 'lucide-react'

import { useCart } from '../../Context/CartContext'

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal
  } = useCart()

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <section className="min-h-screen bg-black px-4 py-12 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-10">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-gray-400 transition hover:text-violet-400"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <h1 className="text-3xl font-black sm:text-5xl">
            My Shopping Cart
          </h1>

          <p className="mt-3 text-gray-400">
            Review your selected products before checkout.
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-gray-900/70 px-6 py-16 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
              <ShoppingBag size={38} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              Your Cart Is Empty
            </h2>

            <p className="mt-3 text-gray-400">
              You haven't added any products yet.
            </p>

            <Link
              to="/"
              className="mt-7 inline-flex rounded-xl bg-violet-600 px-7 py-3 font-bold transition hover:bg-violet-500"
            >
              Explore Products
            </Link>
          </div>
        ) : (

          /* Cart Products */
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">

            <div className="space-y-5">
              {cart.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-gray-900/70 p-4 sm:flex-row sm:p-5"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full rounded-xl object-cover sm:h-36 sm:w-32"
                  />

                  {/* Product Information */}
                  <div className="flex flex-1 flex-col justify-between gap-5">

                    <div>
                      <p className="text-sm text-violet-400">
                        {item.category}
                      </p>

                      <h2 className="mt-2 text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-sm text-gray-400">
                        Color: {item.color || 'Default'}
                      </p>

                      <p className="mt-3 text-lg font-bold text-violet-300">
                        Rs. {item.price.toLocaleString('en-PK')}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4 rounded-xl border border-white/10 px-3 py-2">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          disabled={item.quantity <= 1}
                          className="text-gray-300 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={17} />
                        </button>

                        <span className="min-w-5 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="text-gray-300 transition hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus size={17} />
                        </button>

                      </div>

                      {/* Remove Product */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="inline-flex items-center gap-2 text-sm text-red-400 transition hover:text-red-300"
                      >
                        <Trash2 size={17} />
                        Remove
                      </button>

                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="rounded-2xl border border-white/10 bg-gray-900 p-6 lg:sticky lg:top-24">

              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between gap-3 text-gray-400">
                <span>Different Products</span>
                <span>{cart.length}</span>
              </div>

              <div className="mt-4 flex justify-between gap-3 text-gray-400">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-semibold">Total Price</span>

                  <span className="text-xl font-black text-violet-300">
                    Rs. {cartTotal.toLocaleString('en-PK')}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert('Checkout feature will be added next!')
                }
                className="mt-7 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-4 font-bold transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet-500/20"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-center text-xs text-gray-500">
                Checkout is not connected yet.
              </p>

            </aside>
          </div>
        )}

      </div>
    </section>
  )
}

export default Cart
