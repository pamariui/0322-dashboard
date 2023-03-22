import React, {useEffect, useRef} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css'

//components import
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';

// pages import
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Integrations from './pages/Integrations';

const  App = () => {

  const location = useLocation();
  let placeRef = useRef('Dashboard');

  useEffect(() => {
    const pageName = location.pathname === '/' ? 'Dashboard' : location.pathname.split('/')[1];
    const pageTitle = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    document.title = pageTitle;
    placeRef.current = pageTitle;
  }, [location]);

  return (
    <>
        <Header  logo={placeRef.current}/>
        <Navbar/>
        <Routes>
            <Route exact path='/'  element = {<Dashboard/>}/>
            <Route path='/orders' element = {<Orders/>}/>
            <Route path='/customers' element = {<Customers/>}/>
            <Route path='/reports' element = {<Reports/>}/>
            <Route path='/integrations' element = {<Integrations/>}/>
        </Routes>
      <Footer copy='Copyright' years='MP 2023' color='#666'/>
    </>
  );
}

export default App;
