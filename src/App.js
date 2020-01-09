import React from 'react';
import './App.css';
import Welcome from './components/welcome/Welcome';
import Clock from './components/clock/Clock';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation'
import Jeopardy from './components/jeopardy/Jeopardy';
//Import the Route component
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Welcome name="Tiree" />
      <Clock />
      <//Contact /> */}
      {/* define our routes */}
      <Navigation />
      <Route exact path="/" render={(props) => <Welcome {...props} name="eric" />} />
      <Route path="/clock" component={Clock} />
      <Route path="/contact" component={Contact} />
      <Route path="/jeopardy" component={Jeopardy} />
     
    </div>
  );
}

export default App;
