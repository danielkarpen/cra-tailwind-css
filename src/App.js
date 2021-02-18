import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { NavBar, SimpleComponent, StatefulComponent } from "./components";

console.log(Switch, Route, Link);

function App() {
  // TODO: Pass a prop
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/simple-component">
          <SimpleComponent name="Taylor" />
        </Route>

        <Route path="/stateful-component">
          <StatefulComponent />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
