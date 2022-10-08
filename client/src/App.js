import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/Landing/LandingPage";
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail";
import Detailed from "./components/Detail/Detailed";
import Extra from "./components/Detail/ExtraDetailed";
import CreatePoke from "./components/CreatePoke/CreatePoke";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact={true} path="/home" component={Home} />
          <Route path="/home/create" component={CreatePoke} />
          <Route path="/:id" component={Detail} />
        </Switch>
        <h1>Created by Gurokawa</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
