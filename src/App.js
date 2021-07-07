import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";

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
            <h1>Amazon clone Home page!!!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
