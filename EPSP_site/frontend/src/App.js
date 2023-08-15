import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Acceil from "./components/Acceil"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

import * as serviceWorker from './serviceWorker';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
            <Fragment>
            <Header />
            <main>
              <div>
                <Routes>
                  <Route exact path="/" element={<Acceil/>} />
                </Routes>
              </div>
              </main>
              <Footer />
            </Fragment>
        </BrowserRouter>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);


serviceWorker.unregister();