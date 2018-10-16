import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Header from './Header';
import ResetPassword from './ResetPassword';
import ChangePassword from './ChangePassword';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Dashboard} />
            <Route path="/resetPassword" component={ResetPassword}/>
            <Route path="/changePassword" component={ChangePassword} />
          </div>
        </BrowserRouter>
      </div>

    );
  }
}
export default App;
