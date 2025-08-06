import React, { useState } from 'react';
import './ItemCount.css'; 

const ItemCount = ({ stock, initial = 1, onAdd }) => {
 
  const [quantity, setQuantity] = useState(initial);

  
  const increment = () => {
   
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  
  const decrement = () => {
   
    if (quantity > 1) { 
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-controls">
        {}
        <button onClick={decrement} disabled={quantity <= 1}>-</button>
        {}
        <span className="quantity-display">{quantity}</span>
        {}
        <button onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      {}
      <button 
        className="add-to-cart-button" 
        onClick={() => onAdd(quantity)} 
        disabled={stock === 0} 
      >
        {stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
      </button>
    </div>
  );
};

export default ItemCount;
