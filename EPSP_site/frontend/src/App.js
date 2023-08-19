import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Acceil from "./components/Acceil"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Presentation from "./components/Presentation";
import Actualite from "./components/Actualite";
import Structure from "./components/Structure";
import Contact from "./components/Contact";

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
                <Routes>
                  <Route exact path="/" element={<Acceil/>} />
                  <Route exact path="/Presentation" element={<Presentation/>} />
                  <Route exact path="/Actualite" element={<Actualite/>} />
                  <Route exact path="/Structure" element={<Structure/>} />
                  <Route exact path="/Contact" element={<Contact/>} />
                </Routes>
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