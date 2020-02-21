import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Movies from "./components/movies";
import Movie from "./components/movie";
import Navbar from "./components/navbar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/not-found";
import LoginForm from "./components/login-form";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/movies/:id" render={props => <Movie {...props} />} />
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
    </React.Fragment>
  );
}

export default App;
