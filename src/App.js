import React, { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      <Header showCart={showCart} setShowCart={setShowCart} />
      <Meals />
    </>
  );
}

export default App;
