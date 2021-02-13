import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './navbar.css';



const Navbar = () => {
    const dispatch = useDispatch();
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <Link className="fas fa-warehouse text-white fa-2x mb-3" to="/login"></Link>

                    <div className="navbar-nav">

                        {
                            useSelector(state => state.loggedUser) ?
                                <>
                                    <Link to="/home" className="navbar-brand text-white mx-2 font-weight-bold">Eventos</Link>

                                    <Link className="nav-link nav-item" to="/home">Home</Link>
                                    <Link className="nav-link nav-item" to="">Publicar Eventos</Link>
                                    <Link className="nav-link nav-item" to="">Meus Eventos</Link>
                                    <Link className="nav-link nav-item" onClick={() => dispatch({ type: 'LOG_OUT', })} >Sair</Link>
                                </>
                                :
                                <>
                                    <Redirect to="/login" />
                                    <Link className="nav-link nav-item mx-3 fs-4" to="/login">Login</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
