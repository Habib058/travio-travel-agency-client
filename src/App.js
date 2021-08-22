import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Destination from './components/Destination/Destination/Destination';
import AboutUs from './components/About/About/AboutUs';
import Tours from './components/Tours/Tours/Tours';
import SignUp from './components/SignUp/SignUp'
import Admin from './components/DashBoard/Admin/Admin/Admin';
import Users from './components/DashBoard/Admin/Users/Users/Users';
import AddAdmin from './components/DashBoard/Admin/AddAdmin/AddAdmin/AddAdmin';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/SignUp/PrivateRoute';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/destination'>
            <Destination />
          </Route>
          <Route path='/about'><AboutUs /></Route>
          <Route path='/tours'><Tours /></Route>
          <Route path='/signup'><SignUp /></Route>
          <PrivateRoute exact path='/admin'><Admin /></PrivateRoute>
          <Route path='/users'><Users /></Route>
          <Route path='/addAdmin'><AddAdmin /></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
