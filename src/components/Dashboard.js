import React, { Component } from 'react';
import { connect } from 'react-redux';
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

function mapStateToProps({auth}) {
    return { auth };
}

export default withAuthCheck(connect(mapStateToProps)(Dashboard)); 
