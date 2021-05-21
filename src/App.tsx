import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import { AuthContext } from "./context/auth";
import { useMeQuery } from "./generated/graphql";
import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./ProtectedRoute";
import PrivateRoute from "./PrivateRoute";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const [user, setUser]: any = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const { data, error, loading } = useMeQuery();
  useEffect(() => {
    if (!loading && !error) {
      setUser(data?.me);
    }
  }, [loading, data, error, setUser]);
  if (loading) {
    return <Loader />;
  }
  return (
    <AuthContext.Provider value={value}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <PrivateRoute path="/register" component={RegisterScreen} />
          <PrivateRoute path="/login" component={LoginScreen} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
export default App;
