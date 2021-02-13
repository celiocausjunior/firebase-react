import React, { useState } from 'react';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './recover.css'

const Recover = () => {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    const passwordRecover = () => {
        if (!email) {
            toast.info("Necessário informar email e senha para cadastrar")
            return msg;
        }
        firebase.auth().sendPasswordResetEmail(email)
        .then(response => {
            setMsg("success");
            toast.info("Enviamos um link de recuperacao no seu email");
        })
        .catch(error => {
            setMsg("fail");
            if (error.code === "auth/invalid-email") {
                toast.error("Email nao existe. Digite um email valido");
            }
            else {
                toast.error("Nao fois possivel recuperar a senha. Tente mais tarde ou contate o suporte");
            }
        })
    }
    return (
        <>
            <form className="text-center form-login mx-auto mt-5">
                <h3 className="font-weight-bold">Recuperar Senha</h3>
                <input onChange={(event)=> setEmail(event.target.value)}type="email" className="form-control my-3" placeholder="Email" />
                <button onClick={passwordRecover} type="button" className="btn btn-lg btn-block btn-send-recover">
                    Recuperar Senha
                    </button>
            </form>

        </>
    )
}

export default Recover;