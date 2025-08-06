import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/products';
import { useCart } from '../../context/CartContext'; 
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  
  const { addItem } = useCart();

  useEffect(() => {
    if (!itemId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    getProductById(itemId)
      .then(response => {
        setItem(response);
      })
      .catch(error => {
        console.error('Error al obtener los detalles del producto:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

 
  const handleOnAdd = (quantity) => {
   
    const productToAdd = {
        id: item.id,
        name: item.name,
        price: item.price,
        img: item.img
    };
    
    addItem(productToAdd, quantity);
    console.log(`Se agregaron ${quantity} unidades de ${item.name} al carrito`);
  };

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loading">Cargando producto...</div>
      ) : !item ? (
        <div className="not-found">Producto no encontrado.</div>
      ) : (
        <>
          <ItemDetail {...item} />
          
          {item.stock > 0 ? (
            <ItemCount stock={item.stock} onAdd={handleOnAdd} />
          ) : (
            <div className="no-stock-message">
              <p>Producto sin stock disponible.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
