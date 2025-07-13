


import { useState, useEffect } from 'react';
import { getProductById } from '../../data/products';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'; 


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams(); 

    useEffect(() => {
        setLoading(true);

        getProductById(itemId)
            .then(data => {
                setProduct(data);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemId]); 

    if (loading) {
        return <div className="loading">Cargando detalle del producto...</div>;
    }

    if (!product) {
        return <div className="not-found">Producto no encontrado.</div>;
    }

    return (
        <div className="item-detail-container">
            <ItemDetail product={product} />
        </div>
    );
}

export default ItemDetailContainer;