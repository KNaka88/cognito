import React, { Component } from 'react';
import withAuthCheck from '../services/AuthCheck';


class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <h1>Private Dashboard</h1>
            </div>
        );    
    }
};

export default withAuthCheck(Dashboard); 
