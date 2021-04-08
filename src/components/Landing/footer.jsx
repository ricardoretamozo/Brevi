import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../../assets/css/footer.css'
import "assets/vendor/font-awesome/css/font-awesome.min.css";



class footer extends Component {
    render() {
        return (

            <footer class="footer-outer">
                <div class="container footer-inner">

                    <div class="footer-three-grid wow fadeIn animated" data-wow-delay="0.66s">
                        <div class="column-1-3">
                            <h1>BREVI</h1>
                        </div>
                        <div class="column-2-3">
                            <nav class="footer-nav">
                                <ul>
                                    <a href="/"><li class="active">Home</li></a>
                                    <a href="/Brevi"><li class="active">Brevi</li></a>
                                    <a href="/Caracteristicas"><li class="active">Caracteristicas</li></a>
                                    <a href="/Contactanos"><li class="active">Contactanos</li></a>
                                    <a href="/Login"><li class="active">Login</li></a>
                                </ul>
                            </nav>
                        </div>
                        <div class="column-3-3">
                            <div class="social-icons-footer">
                                <a href="https://www.facebook.com/fh5co"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://freehtml5.co"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.twitter.com/fh5co"><i class="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <span class="border-bottom-footer"></span>

                    <p class="copyright">&copy; 2018 App. All rights reserved. Design by <a href="https://freehtml5.co" target="_blank">FreeHTML5</a>.</p>

                </div>
            </footer>
        );
    }
}


export default footer;