import React, {useState} from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './login.css'

const Login = () => {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();


    const logar =()=> {

        firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(response =>{
            alert("Usuario Logado");
        }).catch(error => {
            alert(error);
        });

    }

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto">
                <div className="text-center mb-4">
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
                </div>

                <input onChange={(event)=> setEmail(event.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email" />
                <input onChange={(event)=> setSenha(event.target.value)} type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" />
                <div className="d-flex justify-content-center">
                <button onClick={logar} className="btn btn-lg btn-block btn-login d-flex justify-content-center mt-2" type="button" >Logar</button>
                </div>

                <div className="msg-login text-white text-center my-5">
                    <span><strong>WOW!</strong> You are connected! &#128526;</span>
                    <br/>
                    <span><strong>Ops!</strong> Invalid Email or password! &#128532;</span>

                </div>
                <div className="login-options mt-5">
                <a href="#" className="mx-2">Recuperar Senha</a>
                <span className="text-white">&#9733;</span>
                <a href="#" className="mx-2">Quero Cadastrar</a>
                </div>
                

            </form>
        </div>
    );
}

export default Login;