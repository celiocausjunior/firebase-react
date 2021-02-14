import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './card.css';


const Card = () => {
    return (
        <div className="col-md-3 col-sm-12">
            <img src="https://via.placeholder.com/500" alt="imagem do evento" className="card-img-top img-card-event d-flex justify-content-center" />
            <div className="card-body">
                <h5>Title</h5>
                <p className="card-text text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <div className="row card-baseboard d-flex align-items-center">
                    <div className="col-6 text-left">
                        <Link to="/" className="btn btn-sm btn-details">
                            + detalhes
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <i className="far fa-eye"></i><span>2021</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;