import React, { Component } from 'react';
import { fetchUser } from '../../../actions';
import { connect } from 'react-redux';
import * as authService from '../../../services/AuthService';
import './styles.css';

class Signout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <a  className="link"
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

function mapStateToProps({auth}) {
    return { auth };            
}

export default connect(mapStateToProps, {fetchUser})(Signout);

