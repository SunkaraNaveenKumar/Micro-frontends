import React from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login/login.jsx';
import Movies from './Pages/Movies/Movies.jsx';
import Count from './components/count/Count.js';

function App() {
  return (
    <div className="App">
      <p class='bg-red-100'>Naveen</p>
      <div>
        <Count/>
      </div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/movies" component={Movies} />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
