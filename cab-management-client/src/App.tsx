import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LightTheme } from "./themes/light-theme";
import Login from "./screens/login/login";
import DriverDashboard from "./screens/driver/dashboard";
import BookingScreen from "./screens/user/booking";
import UserDashboard from "./screens/user/dashboard";
import AdminDashboard from "./screens/admin/dashboard";

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/user/book" exact>
            <BookingScreen />
          </Route>
          <Route path="/user/dashboard" exact>
            <UserDashboard />
          </Route>
          <Route path="/driver/dashboard" exact>
            <DriverDashboard />
          </Route>
          <Route path="/admin/dashboard" exact>
            <AdminDashboard />
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
