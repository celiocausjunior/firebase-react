import React, { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import firebase from '../../config/firebase';
import './card.css';


const Card = (id, midia, title, details, views) => {
    const [urlImage, setUrlImage] = useState();

    useEffect(()=>{
        firebase.storage().ref(`BigDataSenacDocuments/${midia}`).getDownloadURL()
        .then(urlImage => setUrlImage(urlImage));
    });
    return (
        <div className="col-md-3 col-sm-12">
            <img src={urlImage} alt="imagem do evento" className="card-img-top img-card-event d-flex justify-content-center" />
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-justify">{details}</p>
                <div className="row card-baseboard d-flex align-items-center">
                    <div className="col-6 text-left">
                        <Link to={`/EventDetails/` + id} className="btn btn-sm btn-details">
                            + detalhes
                        </Link>
                    </div>
                    <div className="col-6 text-right">
                        <i className="far fa-eye"></i><span>{views}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;