import React from "react";
import { Jumbotron } from 'react-bootstrap'; 
import { BrowserRouter,Route,Switch,Redirect } from 'react-router-dom'; 
import Login from './Login';
import Home from './Home';
import Navigation from './Navigation';
import MovieList from "./List";
import Movie from './Movie';

const App = () => (
  <BrowserRouter>
  <div>
        <Route path='' render ={ props => <Navigation {...props}/>}/>
        <Jumbotron>
        <Switch>
        <Route exact path="/login" component = { Login } />
        <Route path='/home' component={ Home } />
        <Route path='/movieList' component={ MovieList }/>
        <Route path='/movie/:id' component={ Movie } />
            <Redirect from='**' to='/home'/>
        </Switch>  
        </Jumbotron>
  </div>
</BrowserRouter>
);
export default App;