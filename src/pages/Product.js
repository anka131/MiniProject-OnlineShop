import { useContext } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsContext from '../context/ProductsContext';
import CartContext from '../context/CartContext';

const Product = () => {
  const params = useParams();

  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);

  let product = products.find(prod => prod.id === Number(params.id));

  if (!product) {
    return <div>Loading...</div>;
  }

  const quantityOptions = Array.from({ length: 6 }, (_, index) => (
    <option key={index + 1} value={index + 1}>
      {index + 1}
    </option>
  ));

  const addToCart = (event) => {
    event.preventDefault();

    const existingProduct = cart.find(item => item.id === params.id);

    if (existingProduct) {
      existingProduct.qty += Number(event.target.selectQty.value);
      setCart([...cart]);
    } else {
      setCart([...cart, {
        id: params.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty: Number(event.target.selectQty.value),
      }]);
    }
  };

  return (
    <section className="single container">

      <article className="row">
        <div className="col-md-4">
          <div className="product-image">
            <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="product-info">
            <h3 className="product-name">{product.title}</h3>
            <div className="product-price">${product.price}</div>
            <p className="product-description">{product.description}</p>
            <form className="add-to-cart-form" onSubmit={addToCart}>
              <label htmlFor="selectQty">Quantity: <select name="selectQty" id="selectQty">
                {quantityOptions}
              </select> </label>
              
              <button type="submit" className="btn btn-primary mt-3">Add to Cart</button>
            </form>
            <hr />
            <p className="product-category">Category: {product.category}</p>
            <hr />
            <p>Share:</p>
            <div className="social-icons">
              <a href=""><i className="fab fa-facebook-square"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
              <a href=""><i className="fab fa-twitter"></i></a>
              <a href=""><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
