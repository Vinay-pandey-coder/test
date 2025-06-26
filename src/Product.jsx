import React from "react";
import image from "./prot/image.png"
const Product = ({ products, addToCart }) => {
  return (
    <div className="card">
      <h2>📋 Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <div>
            <strong>{product.name}</strong>
          </div>
          <div>₹{product.price}</div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <img src={image} width={50} height={50} alt="" />
    </div>
  );
};

export default Product;
