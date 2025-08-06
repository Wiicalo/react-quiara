import React from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom'; 
import './Cart.css'; 

const Cart = () => {
  const { cart, totalPrice, clearCart, removeItem } = useCart();
  const navigate = useNavigate(); 

  
  const handleCheckout = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty-message">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos para empezar a comprar!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      <div className="cart-items">
        {cart.map(itemCart => (
          <div key={itemCart.item.id} className="cart-item">
            <img src={itemCart.item.img} alt={itemCart.item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{itemCart.item.name}</h3>
              <p>Cantidad: {itemCart.quantity}</p>
              <p>Precio Unitario: ${itemCart.item.price}</p>
              <p>Subtotal: ${(itemCart.quantity * itemCart.item.price).toFixed(2)}</p>
            </div>
            <button onClick={() => removeItem(itemCart.item.id)} className="cart-item-remove-button">X</button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button onClick={clearCart} className="cart-clear-button">Vaciar Carrito</button>
        {}
        <button onClick={handleCheckout} className="cart-checkout-button">Finalizar Compra</button>
      </div>
    </div>
  );
};

export default Cart;