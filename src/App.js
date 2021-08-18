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
      </Switch>
    </Router>
  );
}

export default App;
