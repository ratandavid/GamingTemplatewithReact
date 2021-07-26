import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Navigation(){
    function active(){
        
    }
    
    return(
        <nav className="navbar navbar-expand-md navbar-dark mynav">
            <Link className="navbar-brand" to="/">Logo</Link> 
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Game list
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <Link className="dropdown-item" to="#">Action</Link>
                        <Link className="dropdown-item" to="#">Racing</Link>
                        <Link className="dropdown-item" to="#">Horror</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Community">Community</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Store">Store</Link>
                    </li>
                    
                </ul>
            </div>  
        </nav>
    );
}

export default Navigation;