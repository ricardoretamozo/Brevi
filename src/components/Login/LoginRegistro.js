import React, { Component } from "react";
import imagen from "../../assets/img/img-login/undraw_personalization_triu (1).svg";
import imagen2 from "../../assets/img/img-login/girl-ubication.svg";
import "../../assets/css/LoginRegistro.css";
class LoginRegistro extends React.Component{
    handleTabClick = function() {
        const container = document.querySelector(".container1");
        container.classList.add("sign-up-mode");
      }
    handleTabClickSI = function(){
        const container = document.querySelector(".container1");
        container.classList.remove("sign-up-mode");

    }
render(){
    return(
        <div className="container1">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form formulario">
                        <h2 className="title titulo">
                            Bienvenido
                        </h2>
                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="text" placeholder="Ingrese su correo electrónico" />
                        </div>
                        <div className="input-field">
                             <i className="fas fa-lock"></i>
                             <input type="password" placeholder="Ingrese su contraseña" />
                        </div>
                        <input type="submit" name="" id="" value="Login" className="btn btn1 solid"/>
                        <p className="social-text">
                            O inicie sesión directamente desde Google
                        </p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                            </a>
                        </div>
                    </form>                    
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <p>Para comenzar debe iniciar sesión con sus credenciales o contáctenos para habilitar una cuenta a su empresa.</p>
                        <p><b>(054) 426610 | brevi@gmail.com</b></p>
                    </div>
                    <img src={imagen2} className="image" alt=""/>
                </div>
            </div>
        </div>
        
    );
}
}export default LoginRegistro;