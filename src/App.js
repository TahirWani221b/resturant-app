import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/Cart/CartContextProvider'
function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartContextProvider>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      <Header showCart={showCart} setShowCart={setShowCart} />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
