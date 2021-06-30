import React from 'react';
import './slider.css'
import Slider_one from '../../Images/Assassin’s-Creed-Origins-2.jpg';
import Slider_two from '../../Images/3184635-resident-evil-7-review-thumb.jpg';
import Slider_three from '../../Images/dbz-switch-review.jpg';


function Imageslider(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li  data-target="#carouselExampleIndicators" data-slide-to="0" className="active">{}</li>
                    <li  data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li  data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="slides d-block w-100" src={Slider_one} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="slides d-block w-100" src={Slider_two} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                    <img className="slides d-block w-100" src={Slider_three} alt="Third slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>
    );    
}

export default Imageslider