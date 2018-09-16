import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import StartPage from './StartPage';
import Header from './Header';
import * as actions from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={StartPage} />
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default connect(null, actions)(App);
