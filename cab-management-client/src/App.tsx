import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LightTheme } from "./themes/light-theme";
import Login from "./screens/login/login";
import Dashboard from "./screens/login/dashboard";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
