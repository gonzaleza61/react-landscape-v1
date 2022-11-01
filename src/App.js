import React, {useEffect, useState, useLayoutEffect} from 'react';
import Navbar from "./components/Navbar";
import DropDown from './components/Dropdown';
import Footer from './components/Footer';
import GlobalStyle from "./globalStyles";
import {Switch, Route, useLocation} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ReelMowingInfo from './pages/ReelMowingInfo';
import FieldMarkingInfo from './pages/FieldMarking';
import BaseballInfo from './pages/baseballrenovations';
import CommercialDataInfo from './pages/commercialgrounds';
import FertilityInfo from './pages/Fertility';
import TopDressingInfo from './pages/Topdressing';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact from './pages/Contact';

function App() {
  const[isOpen, setIsOpen] = useState(false);
  const location = useLocation()

  const toggle = ()=> (
    setIsOpen(!isOpen)
  );

  useLayoutEffect(() => { 
    window.scrollTo(0,0)
  }, [location.pathname])

  useEffect(() => {
    Aos.init({})
  }, [])

  return (
  <>
  <GlobalStyle />
  <Navbar toggle={toggle}/>
  <DropDown isOpen={isOpen} toggle={toggle}/>
  <Switch>
    
    <Route path='/' exact component={Home}/>
    <Route path='/about' exact component={About}/>
    <Route path='/services' exact component={Services}/>
    <Route path='/contact' exact component={Contact}/>
    <Route path='/gallery' exact component={Gallery}/>
    <Route path='/reelmowing' exact component={ReelMowingInfo}/>
    <Route path='/fieldmarking' exact component={FieldMarkingInfo}/>
    <Route path='/topdressing' exact component={TopDressingInfo}/>
    <Route path='/baseballfield' exact component={BaseballInfo}/>
    <Route path='/fertility' exact component={FertilityInfo}/>
    <Route path='/commercialgrounds' exact component={CommercialDataInfo}/>
  </Switch>
  <Footer />
  </>
  );
}

export default App;
