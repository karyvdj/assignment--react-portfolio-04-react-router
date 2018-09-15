import React, { Component } from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import PortfolioFixed from './components/PortfolioFixed';
import Navbar from './components/Navbar';
import HomeView from './components/Pages/HomeView';
import CvView from './components/Pages/CvView';
import ProjectView from './components/Pages/ProjectsView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id="app-container">
          <Navbar/>
          <PortfolioFixed/>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/cv" component={CvView} />
            <Route exact path="/projects" component={ProjectView} />    
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
