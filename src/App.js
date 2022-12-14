import React from 'react';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import { BrowserRouter,Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <Container maxWidth="lg">
     <Navbar />
     <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
     </Switch> 
    </Container>
    </BrowserRouter>
  );
};

export default App;
