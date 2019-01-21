import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux'; 
import App from './App';
import {loadNotes} from './actions/noteActions';

const title = 'My Notes App';
const store = configureStore();

store.dispatch(loadNotes());

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App title={title} />
    </BrowserRouter>
    </Provider>,
    document.getElementById('app'));
