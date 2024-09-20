import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; 
import CartContext from '../context/CartContext';

const OrderSummary = () => {
  const { cart, setCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', { name, address, phone, message });
    setCart([]);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="container">
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your order.</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }


  return (
    <div className="container">
      <h2>Order Summary</h2>
      <div className="row">
        <div className="col-md-8">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td><img src={item.image} alt={item.title} height="30px" /></td>
                  <td>{item.title}</td>
                  <td>{item.qty}</td>
                  <td>${item.price * item.qty}</td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td className='mt-5'>Total:</td>
                <td>${cart.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h4>Contact Information</h4>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <label  className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message (Optional)</label>
              <textarea
                className="form-control"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Place Order</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
