import { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <section className="products container">
      <div className="grid-container">
        {products.map((product) => (
          <div className="item" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
            <div className="image-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
