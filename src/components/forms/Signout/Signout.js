import React, { Component } from 'react';
import { fetchUser } from '../../../actions';
import { connect } from 'react-redux';
import * as authService from '../../../services/AuthService';
import './styles.css';

class Signout extends Component {
    render() {
        return (
            <div>
                <a className="link"
                    onClick={this.signout.bind(this)}>
                    Sign out
                </a>
            </div>
        );    
    }

    async signout() {
        await authService.signout();
        this.props.fetchUser();
    }
};

export default connect(null, {fetchUser})(Signout);

