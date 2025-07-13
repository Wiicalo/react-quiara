
import "./App.css";


import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'; // Asumo que lo necesitas si ya lo importaste

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          {}
          <Route path="/" element={<ItemListContainer />} /> 
          {}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          
          {}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          
          {}
          <Route path="/contacto" element={<h1>Contacto</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;