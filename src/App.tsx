import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Header from "./components/Header/Header";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
