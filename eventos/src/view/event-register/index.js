import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import './event-register.css';


const EventRegister = () => {

    const [msgTipo, setMsgTipo] = useState();

    
    return (

        <div className="col-12 mt-5">
            <div className="row">
                <h3 className="title mx-auto font-weight-bold mt-3">
                    Nova Publicacao
                 </h3>
            </div>
            <form>
                <div className="form-group my-3 m-5">
                    <label>Titulo:</label>
                    <input type="text" className="form-control my-3"/>
                </div>
                <div className="form-group my-3  m-5">
                    <label>Tipo do Evento:</label>
                    <select className="form-control my-3">
                        <option disabled selected value="" key="">--Selecione um Tipo--</option>
                        <option value="" key="">Analytics</option>
                        <option value="" key="">Arquitetura</option>
                        <option value="" key="">Data Science</option>
                        <option value="" key="">Machine Learning</option>
                        <option value="" key="">Outros</option>
                    </select>
                </div>
                <div className="form-group my-2  m-5">
                    <label>Descricao:</label>
                    <textarea className="form-control my-2" rows="3"/>
                </div>
                <div className="form-group my-4  m-5">
                    <label>Upload do Arquivo:</label>
                    <input type="file" className="form-control upload-button my-2"/>
                </div>
                <div className="submit-events">
                <button  type="button" className="btn btn-lg mt-3 btn-block btn-register-events">Publicar</button>
                </div>
            </form>
        </div>
    );
}

export default EventRegister;
