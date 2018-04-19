import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoggedIn} from './redux/actions/auth';
import 'semantic-ui-css/semantic.min.css';
import './stylesheets/index.css';
import App from './components/app';   
import rootReducer from './redux/rootReducer';
import registerServiceWorker from './registerServiceWorker'; 

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

if (localStorage.brighteventsJWT){
    const user = {access_token : localStorage.brighteventsJWT};
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />        
        </Provider>
    </Router>,             
    document.getElementById('root') 
);
registerServiceWorker();
