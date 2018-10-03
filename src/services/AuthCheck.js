import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import LoginForm from '../components/forms/Login/LoginForm';
import { fetchUser } from '../actions';

const withAuthCheck = (WrappedComponent) => {
    class WithAuthCheck extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isAuthenticated: null
            }
        }
        
        componentDidMount() {
            this.props.fetchUser();
        }

        render() {
            if (this.props.auth && this.props.auth.user) {
                return <WrappedComponent />
            } else if(this.props.auth == null) {
                return "";
            } else {
                return <LoginForm />
            }
        }
    };

    function mapStateToProps({auth}) {
        return { auth };            
    }

    return connect(mapStateToProps, { fetchUser })(WithAuthCheck);
}

export default withAuthCheck;
