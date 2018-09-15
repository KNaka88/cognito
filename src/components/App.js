import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Landing from './Landing';
import Header from './Header';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default connect(null, actions)(App);
