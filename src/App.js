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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/destination'>
          <Destination/>
        </Route>
        <Route path='/about'><AboutUs/></Route>
        <Route path='/tours'><Tours/></Route>
        <Route path='/signup'><SignUp/></Route>
        <Route exact path='/admin'><Admin/></Route>
        <Route path = '/users'><Users/></Route>
        <Route path = '/addAdmin'><AddAdmin/></Route>
      </Switch>
    </Router>
  );
}

export default App;
