import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Navbar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/not-found";

function App() {
  return (
    <main className="container">
      <Navbar />
      <Switch>
        <Route
          path="/movies"
          render={props => <Movies moviesPerPage={4} {...props} />}
        />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/movies" exact from="/" />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
