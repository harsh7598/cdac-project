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
import SelectVenue from "./component/Employee/SelectVenue";
import SelectCaterer from "./component/Employee/SelectCaterer";
import SelectMedia from "./component/Customer/SelectMedia";
import SelectMenu from "./component/Customer/SelectMenu";
import ViewEvent from "./component/Customer/ViewEvent";
import EmployeeWelcome from "./component/Employee/EmployeeWelcome";
import ViewEventUpdate from "./component/Customer/viewEventUpdate";
import EditEventUp from "./component/Customer/EditEvent";
import ManagerWelcome from './component/Employee/ManagerWelcome';
import ViewEventManager from './component/Employee/viewEventManager';
import ViewEmployee from './component/Employee/ViewEmployee';
import AvailbleServices from './component/Employee/AvailableServices';
import SelectStudio from './component/Employee/SelectStudio';
import AssignCaterer from './component/Employee/AssignCaterer';
import AssignStudio from './component/Employee/AssignStudio';
import AssignEmployee from './component/Employee/AssignEmployee';
import ViewAssignEmployee from './component/Employee/ViewAssignEmployee';

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
          <Route exact path="/manager/viewvenue">
            <NavSignOut />
            <SelectVenue />
          </Route>
          <Route exact path="/manager/viewcaterer">
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
          <Route exact path="/manager/viewemployees">
            <NavSignOut />
            <ViewEmployee />
          </Route>
          <Route exact path="/manager/viewstudio">
            <NavSignOut />
            <SelectStudio />
          </Route>
          <Route exact path="/manager/viewallservices">
            <NavSignOut />
            <AvailbleServices/>
          </Route>
          <Route exact path="/regemployee">
            <NavSignOut />
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

          <Route exact path="/manager/welcome">
            <NavOther />
            <ManagerWelcome />
          </Route>
          <Route exact path="/manager/viewevent">
            <NavOther />
            <ViewEventManager />
          </Route>
          <Route exact path="/assigncaters/:id">
            <NavSignOut />
            <AssignCaterer/>
          </Route>
          <Route exact path="/assignstudio/:id">
            <NavSignOut />
            <AssignStudio/>
          </Route>
          <Route exact path="/assignemployee/:id">
            <NavSignOut />
            <AssignEmployee/>
          </Route>
          <Route exact path="/viewassignemployee/:id">
            <NavSignOut />
            <ViewAssignEmployee/>
          </Route>
        </Switch>
        {/* <NavOther/> */}
      </BrowserRouter >
    </div>
   
  );
}

export default App;
