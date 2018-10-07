import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import ResetPassword from './ResetPassword';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route path="/resetPassword" component={ResetPassword}/>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;
