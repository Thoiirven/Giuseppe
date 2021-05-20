import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavbarVideo from './components/NavbarVideo';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ListePizzas from './components/ListePizzas';
import BodyHome from './components/BodyHome';
import ChoixBasePizza from './components/ChoixBasePizza';
export default function App() {
  return (
    <>
      <Router forceRefresh={true} >
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Explore" component={Explore}/>
          <Route exact path="/Explore/Creme" component={AffCreme}/>
          <Route exact path="/Explore/Tomate" component={AffTomate}/>
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
    <ChoixBasePizza />
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
function AffCreme() {
  return (<React.Fragment>
    <Navbar />
    <ListePizzas data='Crème'/>
  </React.Fragment>);
}
function AffTomate() {
  return (<React.Fragment>
    <Navbar />
    <ListePizzas data='Tomate'/>
  </React.Fragment>);
}
