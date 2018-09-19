import { combineReducers } from 'redux';
import authReducer from './authReducer';
import authErrorReducer from './authErrorReducer';
import { reducer as reduxForm } from 'redux-form';

export default combineReducers({
    form: reduxForm,
    auth: authReducer,
    authError: authErrorReducer
});