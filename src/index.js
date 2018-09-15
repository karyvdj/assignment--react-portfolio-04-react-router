import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import './index.css';
import './css/styles.css'
import App from "./App";
import registerServiceWorker from './registerServiceWorker';

class AppRouter extends Component {
    render() {
      return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    }
  }

ReactDOM.render(<AppRouter/>, document.getElementById("root"));
registerServiceWorker();
