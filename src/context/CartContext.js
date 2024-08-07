import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [savedItems, setSavedItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevCartItems) => {
      return prevCartItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0)
    })
  }

  const removeItem = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const saveItem = (item) => {
    setSavedItems((prevSavedItems) => [...prevSavedItems, item])
    removeItem(item.id)
  }

  const removeFromSavedItems = (productId) => {
    setSavedItems((prevSavedItems) =>
      prevSavedItems.filter((item) => item.id !== productId)
    )
  }

  const moveToCart = (productId) => {
    const item = savedItems.find((item) => item.id === productId)
    addToCart(item)
    removeFromSavedItems(productId)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        saveItem,
        savedItems,
        removeFromSavedItems,
        moveToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
