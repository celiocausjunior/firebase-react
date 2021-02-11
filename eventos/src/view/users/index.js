import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './users.css'
import { toast } from 'react-toastify';

const NewUser = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();

    const register = () => {
        setMsgTipo(null);

        if (!email || !senha) {
            setMsgTipo('error')
            setMsg('Necessário informar email e senha para cadastrar')
            toast.info("Necessário informar email e senha para cadastrar")
            return msg;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(response => {
            toast.info("Cadastro Realizado!")
            setMsgTipo('success')
        }).catch(error => {
           console.log(error)
    })}


    return (
        <div className="form-register">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">
                    Cadastro de Usuário
                    </h1>
                <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control my-2" placeholder="email" />
                <input onChange={(event) => setSenha(event.target.value)} type="password" className="form-control my-2" placeholder="senha" />

                <button onClick={register} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-register-users">Cadastrar</button>

                <div className="msg-login text-black text-center my-5">
                    {msgTipo === ('connected') && <span><strong>WOW!</strong> Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === ('error') && <span>  <strong>Ops!</strong>  Invalid Email or password! &#128532; </span>}
                </div>

            </form>

        </div>
    );
}

export default NewUser;