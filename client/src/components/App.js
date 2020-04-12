import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import NavBar from "./views/NavBar/NavBar";
import AboutPage from "./views/AboutPage/AboutPage";
import TestPage1 from "./views/TestPage/TestPage1/TestPage1";
import Portfolio from "./views/Portfolio/Portfolio";
import Contact from "./views/Contact/Contact";
import TestPage2 from "./views/TestPage/TestPage2/TestPage2";

function App() {
  const currentURL = window.location.pathname;
  if (currentURL.includes("test")) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/test1" component={TestPage1} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/test2" component={TestPage2} />
          </Switch>
        </div>
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/test1" component={TestPage1} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/test2" component={TestPage2} />
          </Switch>
        </div>
      </Suspense>
    );
  }
}

export default App;
