import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../../assets/css/NavBar.css'
import "assets/vendor/font-awesome/css/font-awesome.min.css";



class NavBar extends Component {
    render() {
        return (

            <div id="fh5co-hero-wrapper">
                <nav class="container navbar navbar-expand-lg main-navbar-nav navbar-light">
                    <a class="navbar-brand" href="/" id="Titulo">BREVI</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-items-center ml-auto mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/" id="letra">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Brevi" id="letra">Brevi</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Caracteristicas" id="letra">Caracteristicas</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Contactanos" id="letra">Contactanos</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link" href="/Login" id="letra">Login</a>
                            </li>
                        </ul>
                        <div class="social-icons-header">
                            <a href="https://freehtml5.co"><i className="fab fa-facebook-f"  id="icono"/></a>
                            <a href="https://www.twitter.com/fh5co"><i className="fab fa-twitter"  id="icono"/></a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default NavBar;