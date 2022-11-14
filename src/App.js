import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from "antd";
import { Navbar, Exachanges, Homepage, Cryptocurrencies, News, CryptoDetails} from './components';  
import './App.css';

const App = () => {
 return ( 
  <div className="app">
    <div className="navbar">
    <Navbar/>
  </div>
  
  <div className="main">
   <Layout>
<div className="routes">
  <Switch>
    <Route exact path="/">
    <Homepage/>
    </Route>
  
    <Route exact path="/exachanges">
    <Exachanges/>
    </Route>

    <Route exact path="/cryptocurrencies">
   <Cryptocurrencies/>  
    </Route>

  
    <Route exact path="/crypto/:coinId">
   <CryptoDetails/>  
    </Route>
  
 
    <Route exact path="/news">
   <News/>  
    </Route> 
  </Switch>
</div>
   </Layout>
  </div>

  <div className="footer">

  </div>
  
  </div>
  );
}


 
export default App;