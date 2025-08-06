import React, { createContext, useState, useContext } from 'react';


export const CartContext = createContext();


export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addItem = (item, quantity) => {
    
    const existingItem = cart.find(prod => prod.item.id === item.id);

    if (existingItem) {
      
      setCart(
        cart.map(prod =>
          prod.item.id === item.id
            ? { ...prod, quantity: prod.quantity + quantity }
            : prod
        )
      );
    } else {
      
      setCart([...cart, { item, quantity }]);
    }
  };

  
  const removeItem = (itemId) => {
    setCart(cart.filter(prod => prod.item.id !== itemId));
  };

  
  const clearCart = () => {
    setCart([]);
  };

 
  const isInCart = (itemId) => {
    return cart.some(prod => prod.item.id === itemId);
  };

 
  const value = {
    cart,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    totalItems: cart.reduce((total, prod) => total + prod.quantity, 0),
    totalPrice: cart.reduce((total, prod) => total + (prod.quantity * prod.item.price), 0),
  };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };