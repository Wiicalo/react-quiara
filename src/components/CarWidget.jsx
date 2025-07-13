import carrito from "../assets/carrito.png"; 

const CardWidget = () => {
  return (
    <div className="carwidget">
      <img src={carrito} alt="carrito" className="car-icon" />
      <span className="cart-count">0</span>
      <style jsx>{`
        .carwidget {
          position: relative;
          display: flex;
          align-items: center;
        }
        .car-icon {
          width: 50px;
          height: 50px;
        }
        .cart-count {
          position: absolute;
          top: -5px;
          right: -10px;
          background-color: red;
          color: white;
          border-radius: 50%;
          padding: 2px 5px;
          font-size: 12px;
        }
      `}</style>
      <p className="cart-text">Carrito</p>
      <style jsx>{`
        .cart-text {
          margin-left: 8px;
          font-size: 14px;
          color: #333;
        }
      `}</style>  
    </div>
  );
};

export default CardWidget; 