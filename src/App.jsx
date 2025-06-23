
import './App.css'
import Navbar from './components/Navbar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';


function App() {
  const saludo = 'Smart Home';
  return (

    <div className="app container">
      <Navbar />
      <ItemListContainer saludo={saludo} />
    </div>
  );
}

export default App
