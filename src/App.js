import React from 'react';
import './App.css';
import Navbar from './componets/Navbar'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import Home from '../src/componets/pages/Home';
import Products from '../src/componets/pages/Products';
import Services from '../src/componets/pages/Services';
import Sign from '../src/componets/pages/Sign';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/Products' exact component={Products}/>
          <Route path='/Services' exact component={Services}/>
          <Route path='/sign-up' exact component={Sign}/>
      </Switch>
    </Router>
  );
}

export default App;
