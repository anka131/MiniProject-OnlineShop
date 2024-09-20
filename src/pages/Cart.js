import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';


const Cart = () => {
  const { cart, setCart } = useContext(CartContext);

  const removeItem = (idx) => {
    let tempCart = [...cart];
    tempCart.splice(idx, 1);
    setCart([...tempCart]);
  };

  let total = cart.reduce((acc, curVal) => {
    return acc + curVal.qty * curVal.price;
  }, 0);

  return (
    <div className="container">
      {cart.length > 0 ? (
        <table className="table table-hover mt-5"> 
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Unit Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody id="cartTable">
            {cart.map((item, idx) => (
              
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>
                  <img src={item.image} alt={item.title} height="30px" />
                </td>
                <td>{item.title}</td>
          
                <td>${item.price}</td>
                <td>{item.qty}</td>
                <td>${item.price * item.qty}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeItem(idx)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))
            }
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>${total}</td>
           
            </tr>
          </tbody>
        </table>
      ) : (
        <h4 className="text-center">There are no products in this cart.</h4>
      )}
         
                <Link to="/ordersummary">
                  <button className="btn btn-primary">Proceed to Order Summary</button>
                </Link>
             
    </div>
  );
};

export default Cart;
