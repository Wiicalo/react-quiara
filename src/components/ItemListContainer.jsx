import './ItemListContainer.jsx'; 

const ItemListContainer = ({ saludo }) => { 
  return (
    <div className="item-list-container">
      <h2>{saludo}</h2> {"Bienvenido a tu casa inteligente"}
        <p>Explora nuestros productos y servicios para hacer tu hogar más inteligente.</p>
    </div>
  );
};

export default ItemListContainer;