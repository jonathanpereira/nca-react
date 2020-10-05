import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
