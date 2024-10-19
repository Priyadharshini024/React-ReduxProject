import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Calvin', price: 100, image: 'https://via.placeholder.com/150' }, 
  { id: 2, name: 'Eva', price: 150, image: 'https://via.placeholder.com/150' },       
  { id: 3, name: 'Perfume', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Sprinkle', price: 250, image: 'https://via.placeholder.com/150' },
];

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px' }} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <div>
              <button onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
              <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
              <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
};

export default HomePage;
