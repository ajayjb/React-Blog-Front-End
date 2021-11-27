import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Context } from "./context/Context";
import About from "./pages/about/About";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
     <TopBar/>
     <Switch>
      <Route exact path="/"> <Home/> </Route>
      <Route path="/write"> {user ? <Write/>:<Register/>} </Route>
      <Route path="/posts/:postID"> <Single /> </Route>
      <Route path="/settings"> {user ? <Settings/>:<Register/>} </Route>
      <Route path="/login"> {user ? <Home/>:<Login/>} </Route>
      <Route path="/register"> {user ? <Home/>:<Register/>} </Route>
      <Route path="/about"> <About/> </Route>
     </Switch>
    </Router>
  );
}

export default App;
