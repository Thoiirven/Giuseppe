import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavbarVideo from './components/NavbarVideo';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ListePizzas from './components/ListePizzas';
import BodyHome from './components/BodyHome';
export default function App() {
  return (
    <>
      <Router forceRefresh={true} >
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Explore" component={Explore}/>
          <Route exact path="/A-propos" component={Apropos}/>
          <Route exact path="/Contact" component={ContactF} />
        </Switch>
      </Router>
    </>
  );
}
function Home() {
  return (<React.Fragment>
    <NavbarVideo />
    <BodyHome />
  </React.Fragment>);
}
function Explore() {
  return (<React.Fragment>
    <Navbar />
    <ListePizzas />
  </React.Fragment>);
}
function Apropos() {
  return (<React.Fragment>
    <Navbar />
  </React.Fragment>);
}
function ContactF() {
  return (<React.Fragment>
    <Navbar />
    <Contact />
  </React.Fragment>);
}
