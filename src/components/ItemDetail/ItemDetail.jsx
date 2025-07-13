



const ItemDetail = ({ product }) => {
    const { name, description, price, img, stock } = product;

    return (
        <div className="item-detail">
            <img src={img} alt={name} className="detail-img" />
            <div className="detail-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
                {}
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemDetail;