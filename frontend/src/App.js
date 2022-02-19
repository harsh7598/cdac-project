import React, { useEffect } from "react"
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage";
import CustLoginRegister from "./component/login/CustLoginRegister";
import EmployeeLogin from "./component/login/EmployeeLogin";

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
import EmployeeRegister from "./component/login/EmployeeRegister";
import SelectVenue from "./component/AfterLoginPage/SelectVenue";
import SelectCaterer from "./component/AfterLoginPage/SelectCaterer";
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

          </Route>


          <Route exact path="/customer">
            <NavOther />
            <CustLoginRegister/>
          </Route>

          <Route exact path="/employee">
            <NavOther />
            <EmployeeLogin />
          </Route>

          <Route exact path="/regemployee">
            <NavOther />
            <EmployeeRegister />
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
          <Route exact path="/customer/bookevent/selectvenue">
            <NavSignOut />
            <SelectVenue />
          </Route>
          <Route exact path="/customer/bookevent/selectcaterer">
            <NavSignOut />
            <SelectCaterer />
          </Route>

        </Switch>
        {/* <NavOther/> */}
      </BrowserRouter >
    </div>
   
  );
}

export default App;
