import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom';
import { toast } from 'react-toastify';
import firebase from '../../config/firebase';
import 'firebase/auth';
import {useSelector, useDispatch} from 'react-redux';
import './login.css'



const Login = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msglogin, setMsgLogin] = useState();

    const dispatch = useDispatch();

    const logar = () => {

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(response => {
                toast.info("Conexão realizada com sucesso!");
                setMsgLogin('success');
                setTimeout(() => {
                    dispatch({type: 'LOG_IN', userEmail:email});
                }, 2000);
            })
            .catch(error => {
                toast.error("Erro de conexão. Verifique o email e a senha cadastrados!");
                setMsgLogin('fail')
            });
    }


    return (
        <div className="login-content d-flex align-items-center">
            {
            useSelector (state => state.loggedUser) ? <Redirect to="/home" /> : null
            }
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                <i className="fas fa-warehouse text-white fa-5x mb-3"></i>
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(event) => setEmail(event.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(event) => setSenha(event.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
                <div className="d-flex justify-content-center">
                    <button onClick={logar} className="btn btn-lg btn-block btn-login d-flex justify-content-center mt-2" type="button" >Logar</button>
                </div>

                <div className="msg-login text-white text-center my-5">
                    {msglogin === ('success') && <span><strong>WOW!</strong> You are success! &#128526;</span>}
                    {msglogin === ('fail') && <span>  <strong>Ops!</strong>  Invalid Email or password! &#128532; </span>}
                </div>
                <div className="login-options mt-5">
                    <Link to="/recover" className="mx-2">Recuperar Senha</Link>
                    <span className="text-white">&#9733;</span>
                    <Link to="register" className="mx-2">Quero Cadastrar</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;