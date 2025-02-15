import "./App.css";
import "./index.css";
import React, { useState, useContext, useEffect } from "react";
import {Home, About, Dashboard} from "./components/NewInput"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function App() {
  
  const [date, setDate] = useState(new Date());
  const [seconds, setSeconds] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);

  
  useEffect(() => {
    let interval = null;
    
      interval = setInterval(() => {
        if (seconds > 59){
          setMinutos(minutos => minutos + 1);  
          setSeconds(0);
        }
        else if (minutos>59){
          setHoras(horas => horas + 1);  
          setMinutos(0);  
          setSeconds(0);

        }
        else{
        setSeconds(seconds => seconds + 1);
        }
      }, 100);
    
    return () => clearInterval(interval);
  });

  
  return (
    <div>
      {horas} - {minutos} - {seconds}
    </div>
  );
}


export default function BasicExample()
{
  return(
    <Router>
      <Link style={{padding: "30px"}} to= "/">Home</Link>

      <Link style={{padding: "30px"}} to= "/carrousel">Carrousel</Link>

      <Link style={{padding: "30px"}} to= "/dashboard">Dashboard</Link>
    
    <hr />

    <Switch>
      <Route exact path = "/">
        <Home getInfo = {App}/>
      </Route>
      <Route exact path = "/carrousel">
        <About />
      </Route>
      <Route exact path = "/dashboard">
        <Dashboard />
      </Route>

    </Switch>


    </Router>

  );
};
