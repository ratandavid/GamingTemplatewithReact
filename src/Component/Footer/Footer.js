import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
        <div className = 'container'>
            <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-text">
                                <p>Marketplace the release etras thats sheets continig passag.</p>        
                                <div class="footer-contact">
                                    
                                    <ul>
                                        <li><i class="fas fa-map-marker-alt"></i> <span>Address : </span>PO Box W75 Street
                                            lan West new queens</li>
                                        <li><i class="fas fa-headphones"></i> <span>Phone : </span>+42 2154 456 532</li>
                                        <li><i class="fas fa-envelope-open"></i><span>Email : </span>example@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="fw-title">
                                    <h5>Products</h5>
                                </div>
                            <div class="footer-text">
                                <div class="footer-contact">
                                    <ul>
                                        <li><a> Graphics </a></li>
                                        <li><a> Background </a></li>
                                        <li><a> Fonts </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-text">
                                <div class="fw-title">
                                    <h5>Need Help</h5>
                                </div>        
                                <div class="footer-contact">
                                    
                                    <ul>
                                        <li><a>Terms and Conditions</a></li>
                                        <li><a>Private Policy</a></li>
                                        <li><a>Refund Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-text">
                                <div class="fw-title">
                                    <h5>Follow Us</h5>
                                </div>        
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
            </div>
        </div>  
    </footer>      
    )
}

export default Footer;
