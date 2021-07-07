import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path={"/login"}>
            <h1>Login page</h1>
          </Route>
          <Route path={"/checkout"}>
            <h1>Checkout page</h1>
          </Route>
          <Route path={"/"} exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
