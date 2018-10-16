import React, { Component } from 'react';
import withAuthCheck from '../services/AuthCheck';
import Signout from './forms/Signout/Signout';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <h1>Private Dashboard</h1>
                <div>
                    <Signout/>
                </div>
                <div>
                    <Link to="/changePassword">
                        Change Password
                    </Link>
                </div>
            </div>
        );    
    }
};

export default withAuthCheck(Dashboard); 
