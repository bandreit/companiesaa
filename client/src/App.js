import React from "react";
import { Companies, AddForm, EditForm, Company } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/edit/:id">
          <EditForm />
        </Route>
        <Route path="/details/:id">
          <Company />
        </Route>
        <Route path="/add">
          <AddForm />
        </Route>
        <Route path="/">
          <Companies />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
