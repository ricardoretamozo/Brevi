import React, { Component } from "react";
import imagen from "../../assets/img/img-login/undraw_personalization_triu (1).svg";
import imagen2 from "../../assets/img/img-login/girl-ubication.svg";
import "../../assets/css/LoginRegistro.css";
class LoginRegistro extends React.Component{
    handleTabClick = function() {
        const container = document.querySelector(".container");
        container.classList.add("sign-up-mode");
      }
    handleTabClickSI = function(){
        const container = document.querySelector(".container");
        container.classList.remove("sign-up-mode");

    }
render(){
    return(
         
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="" className="sign-in-form">
                        <h2 className="title">
                            Bienvenido
                        </h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Usuario" />
                        </div>
                        <div className="input-field">
                             <i className="fas fa-user"></i>
                             <input type="password" placeholder="Contraseña" />
                        </div>
                        <input type="submit" name="" id="" value="Login" className="btn solid"/>

                        <p className="social-text">
                            O logueate con una Red Social
                        </p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon">
                            <i className="fab fa-google"></i>
                            </a>
                            <a href="#" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </form>
                    <form action="" className="sign-up-form">
                            <h2 className="title">
                                Registrarse
                            </h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Usuario" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                 <i className="fas fa-user"></i>
                                 <input type="password" placeholder="Contraseña" />
                            </div>
                            <input type="submit" name="" id="" value="Registrarse" className="btn solid"/>

                            <p className="social-text">
                                O logueate con una Red Social
                            </p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                <i className="fab fa-linkedin-in"></i>
                                </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Nuevo en Brevi?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, qui.</p>
                        <button className="btn transparent" id="sign-up-btn" onClick={this.handleTabClick}>Registrarse</button>
                    </div>
                    <img src={imagen2} className="image" alt=""/>
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Que esperas!!</h3>
                        <p>Ingresa y vive la gran experiencia con Brevi</p>
                        <button className="btn transparent" id="sign-in-btn" onClick={this.handleTabClickSI}>Loguearse</button>
                    </div>
                    <img  src={imagen} className="image" alt=""/>
                </div>
            </div>
        </div>
        
    );
}
}export default LoginRegistro;