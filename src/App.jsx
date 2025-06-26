import {useState} from 'react'
import Product from './Product'
import Cart from './Cart'


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Mobile", price: 500 },
    { id: 2, name: "Laptop", price: 1500 },
    { id: 3, name: "Headphones", price: 200 },
  ];


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <div className="container">
        <Product products={products} addToCart={addToCart} />
        <Cart cartItems={cartItems}/>
      </div>
    </div>
  );
};

export default App;