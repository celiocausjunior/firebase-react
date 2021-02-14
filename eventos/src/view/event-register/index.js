import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/storage';
import './event-register.css';


const EventRegister = () => {

    const userEmail = useSelector (state => state.userEmail);
    const [msgTipo, setMsgTipo] = useState();
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [details, setDetails] = useState();
    const [midia, setMidia] = useState();

    

    const storage = firebase.storage();
 

    const db = firebase.firestore();


    const publish = () => {
        setMsgTipo(null);
        storage.ref(`BigDataSenacDocuments/${midia.name}`).put(midia)
        .then(()=>{
            db.collection("BigDataSenac2021").add({
                title: title,
                type: type,
                details: details,
                userEmail: userEmail,
                views:0,
                midia: midia.name,
                public:true,
                createdAt: new Date()
            })
            setMsgTipo('success');
            toast.info("Publicado com sucesso!");
        })
        .catch(error => {
            setMsgTipo(error);
            toast.error("Nao foi possivel enviar o arquivo selecionado. Tente novamente.")
        })
        
    }


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
                    <input onChange={(event) => setTitle(event.target.value)}type="text" className="form-control my-3"/>
                </div>
                <div className="form-group my-3  m-5">
                    <label>Tipo do Evento:</label>
                    <select onChange={(event) => setType(event.target.value)} className="form-control my-3">
                        <option disabled>--Selecione um tipo--</option>
                        <option>Analytics</option>
                        <option>Arquitetura</option>
                        <option>Data Science</option>
                        <option>Machine Learning</option>
                        <option>Outros</option>
                    </select>
                </div>
                <div className="form-group my-2  m-5">
                    <label>Descricao:</label>
                    <textarea onChange={(event) => setDetails(event.target.value)}className="form-control my-2" rows="3"/>
                </div>
                <div className="form-group my-4  m-5">
                    <label>Upload do Arquivo:</label>
                    <input onChange={(event) => setMidia(event.target.files[0])} type="file" className="form-control upload-button my-2"/>
                </div>
                <div className="submit-events">
                <button  onClick={publish} type="button" className="btn btn-lg mt-3 btn-block btn-register-events">Publicar</button>
                </div>
            </form>
        </div>
    );
}

export default EventRegister;
