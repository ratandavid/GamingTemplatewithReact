import React from 'react';
import Card from './Card';
import Image from '../../Images/19314.jpg';
import Imagetwo from '../../Images/crew2.jpg'
import Imagethree from '../../Images/Quantum-Break-.jpg'
import Imagefour from '../../Images/12669.jpg'
import Imagefive from '../../Images/300px-Need_for_Speed_Rivals_cover.jpg'
import Imagesix from '../../Images/Dragon-Ball-Xenoverse-2-Lite-art-900x900.jpg'


function AllCards(props){
    return(
        <div className="container" style={props.style}  >
            <div className="row">
                <div className="col-xl-4 col-sm-4 col-6 ">
                    <Card name='Anthem' src={Image} platform='PlayStation 4, Xbox One, Microsoft Windows'/>
                </div>
                
                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name='Crew 2' src={Imagetwo} platform='PlayStation 4, Xbox One, Microsoft Windows, Google Stadia'/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name='Quantum Break' src={Imagethree} platform=' Xbox One, Windows 10, Microsoft Windows'/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name='Mass Effect' src={Imagefour} platform=' Xbox One, Windows 10, Microsoft Windows'/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name='NFS Rivals' src={Imagefive} platform='PlayStation 4, Xbox One, Microsoft Windows'/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name='Xeoverse 2' src={Imagesix} platform='PlayStation 4, Xbox One, Microsoft Windows'/>
                </div>
            </div>
        </div>    
    );
}

export default AllCards;