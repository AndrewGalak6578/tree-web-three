import logo from './logo.svg';
import './App.css';
import React from "react";
import { ConnectButton } from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TransactionBlock } from "@mysten/sui.js";
import ProfilePage from "./Profile_Page";
import HomePage from './Home_Page';



function App() {
  

  return (


    <Router>

      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="/garden" component={ProfilePage} />
        <Route path="/check" component={() => <div>Hello</div>} />
      </Switch>
    </Router>
  );
}

export default App;
