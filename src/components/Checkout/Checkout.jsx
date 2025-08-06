import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { db } from '../../db/firebase'; // Importa la base de datos de tu configuración de firebase
import { collection, addDoc, Timestamp, writeBatch, getDocs, query, where, documentId } from 'firebase/firestore'; // Importa las funciones de Firestore
import './Checkout.css';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyerData, setBuyerData] = useState({
    name: '',
    phone: '',
    email: '',
    confirmEmail: ''
  });
  const [orderId, setOrderId] = useState(null); // Para almacenar el ID de la orden generada
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    setBuyerData({
      ...buyerData,
      [e.target.name]: e.target.value
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores anteriores

    // Validaciones del formulario
    if (!buyerData.name || !buyerData.phone || !buyerData.email || !buyerData.confirmEmail) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    if (buyerData.email !== buyerData.confirmEmail) {
      setError('Los correos electrónicos no coinciden.');
      return;
    }
    if (cart.length === 0) {
      setError('El carrito está vacío. No se puede finalizar la compra.');
      return;
    }

    setLoading(true);

    const order = {
      buyer: buyerData,
      items: cart.map(prod => ({
        id: prod.item.id,
        name: prod.item.name,
        price: prod.item.price,
        quantity: prod.quantity
      })),
      total: totalPrice,
      date: Timestamp.fromDate(new Date()) // Usa el Timestamp de Firestore
    };

    try {
      // Verificar stock antes de crear la orden
      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map(prod => prod.item.id);
      const productsRef = collection(db, 'products');
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));

      productsAddedFromFirestore.docs.forEach(doc => {
        const productFirestore = doc.data();
        const stockDb = productFirestore.stock;

        const productAddedToCart = cart.find(prod => prod.item.id === doc.id);
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...productFirestore });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit(); // Confirma las actualizaciones de stock
        const ordersCollection = collection(db, 'orders');
        const docRef = await addDoc(ordersCollection, order); // Agrega la orden
        setOrderId(docRef.id);
        clearCart(); // Vacía el carrito después de una compra exitosa
      } else {
        setError(`Los siguientes productos están agotados o no tienen suficiente cantidad: ${outOfStock.map(prod => prod.name).join(', ')}`);
      }

    } catch (error) {
      console.error('Error al generar la orden:', error);
      setError('Hubo un error al procesar tu orden. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  // Si la orden ya fue generada, muestra el ID
  if (orderId) {
    return (
      <div className="checkout-success">
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu orden ha sido generada con el ID:</p>
        <p className="order-id">{orderId}</p>
        <p>Pronto recibirás un correo con los detalles de tu pedido.</p>
      </div>
    );
  }

  // Si el carrito está vacío y no hay orden generada
  if (cart.length === 0 && !orderId) {
    return (
      <div className="cart-empty-message">
        <h2>Tu carrito está vacío</h2>
        <p>¡Agrega algunos productos para empezar a comprar!</p>
      </div >
    );
  }

  return (
    <div className="checkout-container">
      <h1>Completar Compra</h1>

      <div className="checkout-summary">
        <h2>Resumen de la Orden</h2>
        {cart.map(itemCart => (
          <div key={itemCart.item.id} className="summary-item">
            <span>{itemCart.item.name} x {itemCart.quantity}</span>
            <span>${(itemCart.item.price * itemCart.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="summary-total">
          <strong>Total:</strong>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="buyer-form">
        <h2>Información del Comprador</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="form-group">
          <label htmlFor="name">Nombre Completo:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={buyerData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={buyerData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={buyerData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar Correo Electrónico:</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={buyerData.confirmEmail}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="pay-button" disabled={loading}>
          {loading ? 'Procesando...' : 'Pagar'}
        </button>
      </form>
    </div>
  );
};

export default Checkout;