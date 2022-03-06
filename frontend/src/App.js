import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./component/HomePage";
import CustLoginRegister from "./component/login/CustLoginRegister";
import EmployeeLogin from "./component/login/EmployeeLogin";
import NavOther from "./component/NavOther"
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Packages from "./component/Packages";
import NavSignOut from "./component/Customer/NavSignOut";
import CustomerWelcome from "./component/Customer/CustomerWelcome";
import BookEvent from "./component/Customer/BookEvent";
import EditEvent from "./component/Customer/EditEvent";
import EmployeeRegister from "./component/login/EmployeeRegister";
import SelectVenue from "./component/Customer/SelectVenue";
import SelectCaterer from "./component/Customer/SelectCaterer";
import SelectMedia from "./component/Customer/SelectMedia";
import SelectMenu from "./component/Customer/SelectMenu";
import ViewEvent from "./component/Customer/ViewEvent";
import EmployeeWelcome from "./component/Employee/EmployeeWelcome";
import ViewEventUpdate from "./component/Customer/viewEventUpdate";
import EditEventUp from "./component/Customer/EditEvent";

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

         

          <Route exact path="/customer">
          <NavOther />
            <CustLoginRegister/>
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
          <Route exact path="/customer/bookevent/selectmedia">
            <NavSignOut />
            <SelectMedia />
          </Route>
          <Route exact path="/customer/bookevent/selectmenu">
            <NavSignOut />
            <SelectMenu />
          </Route>
          <Route exact path="/customer/viewevent">
            <NavSignOut />
            <ViewEvent />
          </Route> 
          <Route exact path="/customer/vieweventupdate">
            <NavSignOut />
            <ViewEventUpdate/>
          </Route>
          <Route exact path="/updateevent/:id">
            <NavSignOut />
            <EditEventUp/>
          </Route>
         

          <Route exact path="/employee">
            <NavOther />
            <EmployeeLogin />
          </Route>

          <Route exact path="/regemployee">
            <NavOther />
            <EmployeeRegister />
          </Route>

          <Route exact path="/employee/welcome">
            <NavSignOut />
            <EmployeeWelcome />
          </Route>

         
          <Route exact path="/updateevent/:id">
            <NavSignOut />
            <EditEventUp/>
          </Route>

        </Switch>
        {/* <NavOther/> */}
      </BrowserRouter >
    </div>
   
  );
}

export default App;
