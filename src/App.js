import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { Header } from "./Header/Header";
import { Main } from "./Main/Main";
import { Footer } from "./Footer/Footer";

class App extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <Route path="/">
          <Header />
          <Main />
          <Footer />
        </Route>
      </Router>
    );
  }
}

export default App;
