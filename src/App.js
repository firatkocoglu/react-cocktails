import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
        <Route path='/about' component={About}>
          <About />
        </Route>
        <Route path='/cocktail/:id' children={<SingleCocktail />}></Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
