import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App/app';
import Firebase, {FirebaseContext} from './components/Firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import cartReducer from "./components/users/views/Cart/reducer/cartReducer";

const store = createStore(cartReducer);

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <Provider store={store}>
            <App/>
        </Provider>
    </FirebaseContext.Provider>,
    document.getElementById('root'),
);
serviceWorker.unregister();