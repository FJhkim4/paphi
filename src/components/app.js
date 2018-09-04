import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Rush from '../containers/rush';
import History from '../containers/history';
import Chapters from '../containers/chapters';
import Landing from '../components/landing';
import Home from '../components/home';
import Brothers from '../components/brothers';
import ContactUs from '../components/contact-us';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Landing} />
            <Route exact path="/" component={Home} />
            <Route exact path="/rush" component={Rush} />
            <Route exact path="/history" component={History} />
            <Route exact path="/chapters" component={Chapters} />
            <Route exact path="/brothers" component={Brothers} />
            <Route exact path="/contact-us" component={ContactUs} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
