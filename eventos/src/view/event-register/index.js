import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/storage';
import './event-register.css';


const EventRegister = () => {

    const userEmail = useSelector(state => state.userEmail);
    const [title, setTitle] = useState();
    const [type, setType] = useState();
    const [details, setDetails] = useState();
    const [midia, setMidia] = useState();
    const [isLoading, setIsLoading] = useState(false);



    const storage = firebase.storage();


    const db = firebase.firestore();


    const publish = () => {
        setIsLoading(true)
        storage.ref(`BigDataSenacDocuments/${midia.name}`).put(midia)
            .then(() => {
                db.collection("BigDataSenac2021").add({
                    title: title,
                    type: type,
                    details: details,
                    userEmail: userEmail,
                    views: 0,
                    midia: midia.name,
                    public: true,
                    createdAt: new Date()
                }).then(() => {
                    toast.info("Publicado com sucesso!");
                    setIsLoading(false);
                }).catch(error => {
                    toast.error("Nao foi possivel enviar o arquivo selecionado. Tente novamente.");
                    setIsLoading(false);
                });
            });

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
                    <input onChange={(event) => setTitle(event.target.value)} type="text" className="form-control my-3" required />
                </div>
                <div className="form-group my-3  m-5">
                    <label>Tipo do Evento:</label>
                    <select onChange={(event) => setType(event.target.value)} className="form-control my-3" required>
                        <option>--Selecione um tipo--</option>
                        <option>Analytics</option>
                        <option>Arquitetura</option>
                        <option>Data Science</option>
                        <option>Machine Learning</option>
                        <option>Outros</option>
                    </select>
                </div>
                <div className="form-group my-2  m-5">
                    <label>Descricao:</label>
                    <textarea onChange={(event) => setDetails(event.target.value)} className="form-control my-2" rows="3" required/>
                </div>
                <div className="form-group my-4  m-5">
                    <label>Upload do Arquivo:</label>
                    <input onChange={(event) => setMidia(event.target.files[0])} type="file" className="form-control upload-button my-2" required />
                </div>
                
                <div className="spinner-or-publish">
                {isLoading ?
                    <div class="spinner-border text-danger spinner-icon" role="status">
                <span class="sr-only"></span>
                </div>
                :
                <div className="submit-events">
                    <button onClick={publish} type="button" className="btn btn-lg mt-3 btn-block btn-register-events">Publicar</button>
                </div>
                }
                </div>
            
                
            </form>
        </div>
    );
}
export default EventRegister;
