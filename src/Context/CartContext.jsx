
import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) =>
      prevCart.filter((_, index) => index !== indexToRemove)
    )
  }

  const cartCount = cart.length

  const cartTotal = cart.reduce(
    (total, product) => total + product.price,
    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
