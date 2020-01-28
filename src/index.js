import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom"
import ThornsRoses from './components/ThornsRoses';

ReactDOM.render(
    <>
        <Router>
            <ThornsRoses />
        </Router>
    </>
    , document.getElementById('root'));

