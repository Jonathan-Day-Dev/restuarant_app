/**
 *   TO DO
 *
 * Fix overflow-x so that it works without being hidden
 * Set up base Tailwind to keep color scheme correct
 * Responsiveness
 * Add categories table to database
 * Input isn't updating cart (may get rid of input and just keep the button to add items)
 * When adding multiple items, add to amount instead of duplicating items CartItem.js
 *
 */
import { useState } from 'react';

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
