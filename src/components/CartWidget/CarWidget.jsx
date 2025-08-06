import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css';
import cartImage from '../../assets/carrito.png'; 

const CartWidget = () => {
    const { totalItems } = useCart();

    return (
        <div className="cart-widget">
            <Link to="/cart" className="cart-link" style={{ display: totalItems > 0 ? 'flex' : 'none' }}>
                {}
                <img src={cartImage} alt="Carrito de compras" className="cart-icon-image" />
                <span className="cart-count">{totalItems}</span>
            </Link>
        </div>
    );
};

export default CartWidget;