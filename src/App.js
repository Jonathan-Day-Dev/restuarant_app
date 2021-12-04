/**
 *   TO DO
 * 
 * Fix overflow-x so that it works without being hidden
 * Set up base Tailwind to keep color scheme correct
 * Responsiveness
 * 
 */

import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
