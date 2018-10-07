import React, { Component } from 'react';
import withAuthCheck from '../services/AuthCheck';
import Signout from './forms/Signout/Signout';

class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <h1>Private Dashboard</h1>
                <div>
                    <Signout/>
                </div>
            </div>
        );    
    }
};

export default withAuthCheck(Dashboard); 
