import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory } from 'react-router' ;

import Main from './components/Main';
import './index.css'

const Root = () => {
    return ( 
        <div className="container">
            <Router history={browserHistory}>
                <Route path="/" component={Main}/>
            </Router>
        </div>
    )
};

ReactDOM.render(<Root/>, document.getElementById('root'));