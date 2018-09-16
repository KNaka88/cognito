import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
