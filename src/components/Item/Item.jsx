

import { Link } from 'react-router-dom'; 
 

const Item = ({ id, name, price, img }) => {
    return (
        <div className="item-card">
            <img src={img} alt={name} className="item-img" />
            <h3>{name}</h3>
            <p>Precio: ${price}</p>
            {}
            <Link to={`/item/${id}`} className="item-detail-link">
                Ver detalle
            </Link>
        </div>
    );
};

export default Item;