import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail";
import CreatePoke from "./components/CreatePoke/CreatePoke";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/create" component={CreatePoke} />
          <Route exact path="/home/:id" component={Detail} />
        </Switch>
        <h1>Created by Gurokawa</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
