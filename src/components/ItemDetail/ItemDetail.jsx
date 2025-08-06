import React from 'react';
import './ItemDetail.css';


const ItemDetail = ({ name, img, category, description, price, stock }) => {
  return (
    <div className="item-detail">
      <div className="item-detail-image-container">
        {}
        <img src={img} alt={name} className="item-detail-image" />
      </div>
      <div className="item-detail-info">
        <h2 className="item-detail-name">{name}</h2>
        <p className="item-detail-category">Categoría: {category}</p>
        <p className="item-detail-description">{description}</p>
        <p className="item-detail-price">${price}</p>
        <p className="item-detail-stock">Stock disponible: {stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;