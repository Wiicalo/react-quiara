import { db } from '../db/firebase'; 
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';


export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const productsCollection = collection(db, 'products');
      const querySnapshot = await getDocs(productsCollection);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};


export const getProductsByCategory = (categoryId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const productsCollection = collection(db, 'products');
      const q = query(productsCollection, where('category', '==', categoryId));
      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      resolve(products);
    } catch (error) {
      reject(error);
    }
  });
};


export const getProductById = (itemId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const productRef = doc(db, 'products', itemId);
      const docSnap = await getDoc(productRef);
      if (docSnap.exists()) {
        resolve({ id: docSnap.id, ...docSnap.data() });
      } else {
        reject(new Error('Product not found'));
      }
    } catch (error) {
      reject(error);
    }
  });
};