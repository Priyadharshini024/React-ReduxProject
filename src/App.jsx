import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart.cart);
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart ({totalCartItems})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
