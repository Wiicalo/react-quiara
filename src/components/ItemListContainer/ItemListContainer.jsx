


import { useState, useEffect } from 'react';

import { getProducts, getProductsByCategory } from '../../data/products'; 
import ItemList from '../ItemList/ItemList'; 
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 

    useEffect(() => {
        setLoading(true);
        const dataPromise = categoryId 
            ? getProductsByCategory(categoryId) 
            : getProducts();

        dataPromise
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]); 

    if (loading) {
        return <div className="loading">Cargando productos...</div>;
    }

    return (
        <div className="item-list-container">
            <h1>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo de Productos'}</h1>
            {products.length > 0 ? (
                <ItemList products={products} />
            ) : (
                <p>No hay productos disponibles en esta categoría.</p>
            )}
        </div>
    );
}

export default ItemListContainer;