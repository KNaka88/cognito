import React, {Component} from 'react'; 
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import WelcomePage from '../components/WelcomePage';

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
            } else if (this.props.auth == null) {
                return "";
            } else {
                return <WelcomePage/>
            }
        }
    };

    function mapStateToProps({auth}) {
        return { auth };            
    }

    return connect(mapStateToProps, { fetchUser })(WithAuthCheck);
}

export default withAuthCheck;
