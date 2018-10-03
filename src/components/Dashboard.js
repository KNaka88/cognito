import React, { Component } from 'react';
import { connect } from 'react-redux';
import withAuthCheck from '../services/AuthCheck';
import { Link } from "react-router-dom";


class Dashboard extends Component {
    
    render() {
        return (
            <div>
                <h1>Private Dashboard</h1>
                <Link to="/">Home</Link>
            </div>
        );    
    }
};

function mapStateToProps({auth}) {
    return { auth };
}




export default withAuthCheck(connect(mapStateToProps)(Dashboard)); 
