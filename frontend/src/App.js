import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PositionIndex from "./components/PositionIndex";
import PositionForm from "./components/PositionForm";
import PositionShow from "./components/PositionShow";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/positions" component={PositionIndex} />
          <Route path="/positions/new" component={PositionForm} />
          <Route exact path="/positions/:id" component={PositionShow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
