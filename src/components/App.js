import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import TestPage1 from "./views/TestPage/TestPage1/TestPage1";
import TestPage2 from "./views/TestPage/TestPage2/TestPage2";
import TestPage3 from "./views/TestPage/TestPage3/TestPage3";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  scroll-behavior: smooth;
}
`;

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          Loading...
        </div>
      }
    >
      <GlobalStyle />
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/test1" component={TestPage1} />
          <Route exact path="/test2" component={TestPage2} />
          <Route exact path="/test3" component={TestPage3} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
