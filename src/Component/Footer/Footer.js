import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
        <div className = 'container'>
            <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-text">
                                <p>Marketplace the release etras thats sheets continig passag.</p>        
                                <div className="footer-contact">
                                    
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i> <span>Address : </span>PO Box W75 Street
                                            lan West new queens</li>
                                        <li><i className="fas fa-headphones"></i> <span>Phone : </span>+42 2154 456 532</li>
                                        <li><i className="fas fa-envelope-open"></i> <span>Email : </span>example@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-6">
                                <div className="fw-title">
                                    <h5>Products</h5>
                                </div>
                            <div className="footer-text">
                                <div className="footer-contact">
                                    <ul className="mylist">
                                        <li><a> Graphics </a></li>
                                        <li><a> Background </a></li>
                                        <li><a> Fonts </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-6">
                            <div className="footer-text">
                                <div className="fw-title">
                                    <h5>Need Help</h5>
                                </div>        
                                <div className="footer-contact">
                                    
                                    <ul className="mylist">
                                        <li><a>Terms and Conditions</a></li>
                                        <li><a>Private Policy</a></li>
                                        <li><a>Refund Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="footer-text">
                                <div className="fw-title">
                                    <h5>Follow Us</h5>
                                </div>        
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
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
