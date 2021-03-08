import Home from "./components/Home/Home";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from "./components/Notfound/NotFound"
import NavBar from "./components/Navbar/NavBar";
import CountryDetails from "./components/CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
       <NavBar></NavBar>
      <Switch>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route  path="/country/:countryName">
          <CountryDetails></CountryDetails>
        </Route>
        <Route exact path="/*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
