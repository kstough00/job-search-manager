import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import PositionsIndex from './components/PositionsIndex';
import Position from './components/PositionFrom';
 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="positions" component={PositionsIndex}/>
          <Route path="/positions/new" component={PositionForm}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
