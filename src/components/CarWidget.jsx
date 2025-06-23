import carrito from "../assets/carrito.png"; 

const CardWidget = () => {
  return (
    <div className="carwidget">
      <img src={carrito} alt="carrito" className="car-icon" />
      <h2>4</h2>
    </div>
  );
};

export default CardWidget; 