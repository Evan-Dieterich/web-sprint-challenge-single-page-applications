import React, { useState } from "react";
import Form from "./Forms/Form";
import Formmenu from "./Forms/Formmenu";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

export default function App() {
  
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <Form Form={Form} />
          </Route>
          <Route path="/Formmenu/:id">
            <Formmenu Formmenu={Formmenu} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}