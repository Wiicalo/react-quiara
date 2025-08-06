import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'; 

const Item = ({ id, name, img, price, category }) => {
  return (
    
    <div className="item-card"> 
      <img src={img} alt={name} className="item-card-image" />
      <h2 className="item-card-name">{name}</h2>
      <p className="item-card-price">${price}</p>
      {}
      {}
      <Link to={`/item/${id}`} className="item-card-button">Ver detalle</Link>
    </div>
  );
};

export default Item;