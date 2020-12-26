import React, { Fragment, useContext } from "react";
import { Link } from "@reach/router";

import { Store } from "./Store";
import "./App.css";

function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favorite episode</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves"> Favorite(s): {state.favorites.length}</Link>
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;
