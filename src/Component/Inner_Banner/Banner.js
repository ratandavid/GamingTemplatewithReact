import React from 'react';
import BannerImage from '../../Images/ratchet-and-clank-rift-apart-ps5-art-1621336598.jpg';
import './InnBanner.css'

function Banner(){
    return(
        <div className="container-fluid">
            <div className="row">
                
                    <div className="banner">
                        <img src={BannerImage} className='img-fluid'/>
                    </div>

                    <div className="container banner_title">
                        <h1>Ratchet and Clank:<span>Rift Apart</span></h1>
                        <p>Ratchet & Clank: Rift Apart is a 2021 third-person shooter platform game developed by Insomniac Games and published by Sony Interactive</p>
                        <button className='button' type="button">LearnMore</button>
                    </div>
            </div>
        </div>
    );
}

export default Banner;