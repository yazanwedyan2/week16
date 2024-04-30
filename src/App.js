import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '.src/pages/Home';  // Import the Home component
import Exercises from '.src/pages/Exercises';  // Import the Exercises component
import Workouts from '.src/pages/Workouts';  // Import the Workouts component
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />  {/* Route for the Home page */}
          <Route path="/exercises" component={Exercises} />  {/* Route for the Exercises page */}
          <Route path="/workouts" component={Workouts} />  {/* Route for the Workouts page */}
          {/* Add new Route components for additional pages below */}
          {/* For example: */}
          {/* <Route path="/newpage" component={NewPageComponent} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
