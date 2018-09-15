import React, { Component } from 'react';
import Header from '../Header/Header';
import Summary from '../Summary/Summary';
import ContactInfo from '../Contact/ContactInfo';

class HomeView extends Component {
  render() {
    return (
      <div className="portfolio-content">
        <Header headerTitle="Portfolio"/>
        <div className="portfolio-content">
          <Summary/>
          <section>
              <ContactInfo/>
          </section>
        </div>
      </div>
    )
  }
}

export default HomeView
