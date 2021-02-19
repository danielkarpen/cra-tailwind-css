import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  CountDown,
  NavBar,
  SimpleComponent,
  StatefulComponent,
} from "./components";

function App() {
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

        <Route path="/countdown">
          <CountDown />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
