import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact';
import { Router, Switch, Route } from 'react-router';

function App() {
  return (
    <>
      <div className="App">
      <Header/>
      <About id="about"/>
      <Services id="services-page"/>
      <Partners/>
      <Contact id="contact-us"/>
    </div>
      
    </>
  );
}

export default App;
