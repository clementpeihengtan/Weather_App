import React, {Component} from 'react';
import {Link} from 'react-router';
import '../index.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">WeatherApp</Link>
                </div>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Profile</Link>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><span><Link to="/" className="link-dec">Log In</Link></span></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;