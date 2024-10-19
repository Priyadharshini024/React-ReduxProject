import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              </li>
            ))}
          </ul>
          <div>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default CartPage;
