
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ShoppingBag, Star } from 'lucide-react'
import { useCart } from '../../Context/CartContext'

const products = [
  {
    id: 1,
    name: 'Essential Oversized Tee',
    category: 'Men / Casual',
    price: 1299,
    rating: '4.9',
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85',
    description: 'A comfortable oversized T-shirt with a modern look, perfect for everyday wear and casual outfits.'
  },
  {
    id: 2,
    name: 'Classic Everyday Jacket',
    category: 'Men / Streetwear',
    price: 3499,
    rating: '4.8',
    color: 'Brown',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=85',
    description: 'A stylish everyday jacket that gives your outfit a premium streetwear look.'
  },
  {
    id: 3,
    name: 'Minimal Everyday Outfit',
    category: 'Women / Casual',
    price: 2499,
    rating: '4.9',
    color: 'Neutral',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
    description: 'A modern, versatile fashion look designed for comfort and everyday style.'
  },
  {
    id: 4,
    name: 'Urban Streetwear',
    category: 'Unisex / Trending',
    price: 1999,
    rating: '4.7',
    color: 'White',
    image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=85',
    description: 'A fresh streetwear style for anyone who wants a clean and confident look.'
  }
]

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find(
    item => item.id === Number(id)
  )

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-950 px-6 py-20 text-center text-white">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>

        <Link
          to="/product"
          className="mt-6 inline-block text-violet-400"
        >
          Back to products
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product)
    alert('Product added to cart!')
  }

  return (
    <section className="min-h-screen bg-gray-950 px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-gray-400 transition hover:text-white"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          {/* Product Image */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gray-900">
            <img
              src={product.image}
              alt={product.name}
              className="h-[420px] w-full object-cover sm:h-[550px]"
            />
          </div>

          {/* Product Information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              {product.category}
            </p>

            <h1 className="mt-4 text-3xl font-black sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-center gap-2 text-yellow-400">
              <Star size={18} fill="currentColor" />
              <span>{product.rating}</span>
              <span className="text-sm text-gray-500">
                Sample rating
              </span>
            </div>

            <p className="mt-6 text-3xl font-extrabold">
              Rs. {product.price.toLocaleString('en-PK')}
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <h2 className="font-semibold">
                Product Details
              </h2>

              <p className="mt-3 leading-7 text-gray-400">
                {product.description}
              </p>

              <p className="mt-4 text-gray-300">
                Color:{' '}
                <span className="font-semibold">
                  {product.color}
                </span>
              </p>
            </div>

            {/* Functional Add to Cart Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-bold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20"
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>

            <p className="mt-3 text-center text-sm text-gray-500">
              Add this product to your shopping cart.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail
