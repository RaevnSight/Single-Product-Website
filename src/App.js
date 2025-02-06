import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';

import Product from './Pages/Product';
import Ingredients from './Pages/Ingredients';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route
          path="/product/:productId"
          element={<Product />}
        />
        <Route
          path="/ingredients"
          element={<Ingredients />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </div>
  );
}

export default App;
