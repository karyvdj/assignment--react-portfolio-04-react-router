import React, { Component } from 'react';
import Header from '../Header/Header';
import FilterProjects from '../Projects/FilterProjects';

class ProjectsView extends Component {
  render() {
    return (
      <div className="portfolio-content">
        <Header headerTitle="Projects"/>
        <div className="portfolio-content">
          <FilterProjects/>
        </div>
      </div>
    )
  }
}

export default ProjectsView
