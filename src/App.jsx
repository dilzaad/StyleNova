
import React from 'react'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Components/Pages/Home'
import Product from './Components/Pages/Product'
import About from './Components/Pages/About'
import Notfound from './Components/Pages/Notfound'

import Men from './Components/Pages/Men'
import Women from './Components/Pages/Women'

import Courses from './Components/Pages/Courses'
import CourseDetail from './Components/Pages/CourseDetail'
import ProductDetail from './Components/Pages/ProductDetail'
import Cart from './Components/Pages/Cart'

import { CartProvider } from './Context/CartContext'

const App = () => {
  const location = useLocation()

  return (
    <CartProvider>
      <div className="app-background min-h-screen bg-black text-white">

        <Navbar />

        <main className="page-content min-h-screen">
          <Routes
            location={location}
            key={location.pathname}
          >
            {/* Home Page */}
            <Route
              path="/"
              element={<Home />}
            />

            {/* About Page */}
            <Route
              path="/about"
              element={<About />}
            />

            {/* Product Routes */}
            <Route
              path="/product"
              element={<Product />}
            >
              <Route
                path="Men"
                element={<Men />}
              />

              <Route
                path="Women"
                element={<Women />}
              />
            </Route>

            {/* Product Details Page */}
            <Route
              path="/product-details/:id"
              element={<ProductDetail />}
            />

            {/* Shopping Cart Page */}
            <Route
              path="/cart"
              element={<Cart />}
            />

            {/* Courses Routes */}
            <Route
              path="/Courses"
              element={<Courses />}
            />

            <Route
              path="/Courses/:id"
              element={<CourseDetail />}
            />

            {/* Not Found Page */}
            <Route
              path="*"
              element={<Notfound />}
            />
          </Routes>
        </main>

        <Footer />

      </div>
    </CartProvider>
  )
}

export default App
