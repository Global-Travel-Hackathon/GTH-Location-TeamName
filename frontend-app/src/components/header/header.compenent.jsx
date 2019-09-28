import React from "react";
import {Link} from 'react-router-dom';
import './header.component.css';

const Header = () => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='container'>
        <span className='circle'> <Link className="navbar-brand" to='/'><strong>The Social Circle</strong></Link></span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
                <Link className="nav-item nav-link" to='/'>About us</Link>
                <Link className="nav-item nav-link" to='/'>Contact</Link>
                <Link className="nav-item nav-link" to='/'>Stories</Link>
                <Link className="nav-item nav-link" to='/register'>Register</Link>
            </div>
        </div>
        </div>
        </nav>
    </div>
);

export default Header;
