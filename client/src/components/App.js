import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import AboutPage from "./views/AboutPage/AboutPage";
import TestPage from "./views/TestPage/TestPage";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact/Contact";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/about" component={Auth(AboutPage, null)} />
          <Route exact path="/test" component={Auth(TestPage, null)} />
          <Route exact path="/portfolio" component={Auth(Portfolio, null)} />
          <Route exact path="/contact" component={Auth(Contact, null)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
