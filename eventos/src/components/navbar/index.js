import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/home" className="navbar-brand text-white font-weight-bold">Eventos</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link nav-item" to="/home">Home</Link>
                        <Link className="nav-link nav-item" to="/register">Cadastrar</Link>
                        <Link className="nav-link nav-item" to="/login">Login</Link>

                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
