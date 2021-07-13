import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <h2>User</h2>
          </Route>
          <Route path="/home">
            <h2>Home</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
