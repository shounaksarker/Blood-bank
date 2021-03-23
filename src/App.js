import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './Component/HomeRightSide/Home';
import Login from './Component/Login/Login';
import SignUp from './Component/Login/SignUp';
import Welcome from './Component/Welcome/Welcome'
import PrivateRoute from './Component/Login/PrivateRoute';
import Request from './Pages/Request/Request';
export const DataContext = createContext();

function App() {

  const [user, setUser] = useState({
    isSignIn: false,
    success: false,
    username: '',
    email: '',
    password: '',
    photo: '',
    phone: '',
    altphone: '',
    social: '',
    blood: '',
    weight: '',
    gender: '',
    adress: '',
    city: '',
    postcode: '',
    age: '',
    dob: '',
    error: '',
  });

  return (
    <DataContext.Provider value={[user, setUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome></Welcome>
          </Route>
          <PrivateRoute path="/home">
            <Home></Home>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path='/request'>
            <Request></Request>
          </Route>
          <Route path="*">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </DataContext.Provider>
  );
}

export default App;
