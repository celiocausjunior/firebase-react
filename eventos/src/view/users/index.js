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
    const [isLoading, setIsLoading] = useState();

    const register = () => {
        setMsgTipo(null);
        setIsLoading(true);


        if (!email || !senha) {
            setMsgTipo('error')
            setMsg('Necessário informar email e senha para cadastrar')
            toast.info("Necessário informar email e senha para cadastrar")
            return msg;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(response => {
                toast.info("Cadastro Realizado!")
                setIsLoading(false);
            })
            .catch(error => {
                setIsLoading(false);
                if (error.code === "auth/weak-password") {
                    toast.error("Senha fraca. Deve ter ao menos 6 caracteres");
                }

                else if (error.code === "auth/invalid-email") {
                    toast.error("Digite um email valido");
                }

                else if (error.code === "auth/email-already-in-use") {
                    toast.error("Email ja existe");
                }

                else {
                    toast.error("Nao fois possivel realizar o cadastro. Tente mais tarde ou contate o suporte");
                }

            })
    }


    return (
        <div className="form-register">
            <form className="text-center form-login mx-auto mt-5">
                <h1 className="h3 mb-3 text-black font-weight-bold">
                    Cadastro de Usuário
                    </h1>
                <input onChange={(event) => setEmail(event.target.value)} type="email" className="form-control my-2" placeholder="email" />
                <input onChange={(event) => setSenha(event.target.value)} type="password" className="form-control my-2" placeholder="senha" />
                {
                    isLoading ?
                        <div class="spinner-border text-danger" role="status">
                            <span class="sr-only"></span>
                        </div>
                        :
                        <button onClick={register} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-register-users">Cadastrar</button>
                }
                <div className="msg-login text-black text-center my-5">
                    {msgTipo === ('connected') && <span><strong>WOW!</strong> Usuário cadastrado com sucesso! &#128526;</span>}
                    {msgTipo === ('error') && <span>  <strong>Ops!</strong>  Invalid Email or password! &#128532; </span>}
                </div>


            </form>

        </div>
    );
}

export default NewUser;