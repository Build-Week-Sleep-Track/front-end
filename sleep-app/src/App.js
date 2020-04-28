import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MainPage from './components/MainPage';

function App() {
  return (
   <div className="App">
       <Router>
          {/* <h1> 
          Hello world
          </h1> */}
            <Route exact path="/" component={Login}/>
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/main-page" component={MainPage} />
        </Router>
    </div>
  );
}

export default App;
