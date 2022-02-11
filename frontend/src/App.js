import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage";
import LoginRegister from "./component/login/LoginRegister";
import EmpLogin from "./component/login/EmpLogin";

import Nav from "./component/Nav"
import NavOther from "./component/NavOther"
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Packages from "./component/Packages";
import NavSignOut from "./component/AfterLoginPage/NavSignOut";
import CustomerWelcome from "./component/AfterLoginPage/CustomerWelcome";
import BookEvent from "./component/AfterLoginPage/BookEvent";
import EditEvent from "./component/AfterLoginPage/EditEvent";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
            <Services />
            <Packages />
            <About />
            <Contact />

            {/* <LoginRegister /> */}

          </Route>


          {/* <Route exact path="/customer">
            <NavOther />
            <LoginRegister />
          </Route> */}
          <Route exact path="/customer">
            <NavOther />
            <LoginRegister/>
          </Route>

          <Route exact path="/employee">
            <NavOther />
            <EmpLogin />
          </Route>

          <Route exact path="/services">
            <NavOther />
            <Services />
          </Route>
          <Route exact path="/packages">
            <NavOther />
            <Packages />
          </Route>
          <Route exact path="/about">
            <NavOther />
            <About />
          </Route>
          <Route exact path="/contact">
            <NavOther />
            <Contact />
          </Route>

          <Route exact path="/customer/welcome">
            <NavSignOut />
            <CustomerWelcome />
          </Route>
          <Route exact path="/customer/bookevent">
            <NavSignOut />
            <BookEvent />
          </Route>
          <Route exact path="/customer/editevent">
            <NavSignOut />
            <EditEvent />
          </Route>

        </Switch>
        {/* <NavOther/> */}
      </BrowserRouter >
    </div>
   
  );
}

export default App;
