import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavbarVideo from './components/NavbarVideo';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ListePizzas from './components/ListePizzas';
import BodyHome from './components/BodyHome';
import ChoixBasePizza from './components/ChoixBasePizza';
import { createGlobalStyle } from 'styled-components';
import RickonTTF from './Font/TheRickon.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Rickon';
    src: url(${RickonTTF}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: auto;
  }
  h2 {
    font-family: 'Rickon';
    font-size:2cm;
  }
`;
export default function App() {
  return (
    <>
    <GlobalStyle />
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
