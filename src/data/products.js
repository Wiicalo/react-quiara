import bombillaimg from '../assets/bombilla.jpg';
import termostatoimg from '../assets/termostato.jpg';
import camaraimg from '../assets/camara-interior.jpg';
import sensorimg from '../assets/sensor.jpg';
import enchufeimg from '../assets/enchufe-inteligente.jpg';

const products = [
    {
        id: '1',
        name: 'Bombilla Inteligente LED',
        category: 'iluminacion',
        description: 'Controla la iluminación de tu hogar con esta bombilla Wi-Fi de bajo consumo.',
        price: 25.99,
        stock: 50,
        img: bombillaimg
    },
    {
        id: '2',
        name: 'Termostato Inteligente',
        category: 'climatizacion',
        description: 'Ajusta la temperatura de tu hogar desde cualquier lugar con tu smartphone.',
        price: 120.00,
        stock: 20,
        img: termostatoimg
    },
    {
        id: '3',
        name: 'Cámara de Seguridad 1080p',
        category: 'seguridad',
        description: 'Vigila tu hogar día y noche con detección de movimiento y visión nocturna.',
        price: 89.50,
        stock: 35,
        img: camaraimg
    },
    {
        id: '4',
        name: 'Sensor de Puerta/Ventana',
        category: 'seguridad',
        description: 'Notificaciones instantáneas si se detecta apertura de puertas o ventanas.',
        price: 15.00,
        stock: 100,
        img: sensorimg
    },
    {
        id: '5',
        name: 'Enchufe Inteligente Wi-Fi',
        category: 'iluminacion',
        description: 'Automatiza cualquier aparato electrónico con este enchufe inteligente.',
        price: 19.99,
        stock: 60,
        img: enchufeimg
    }
];

export const getProducts = () => {
   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === categoryId);
            resolve(filteredProducts);
        }, 1000);
    });
};

export const getProductById = (itemId) => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find(prod => prod.id === itemId);
            resolve(product);
        }, 1000);
    });
};