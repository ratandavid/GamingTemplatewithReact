import React from 'react';
import AllCards from "../Cards/Allcard";
import Heading from "../Heading/Heading";
import Imageslider from "../Image Slider/Imgslide";
import Banner from "../Inner_Banner/Banner";

import Image from '../../Images/19314.jpg';
import Imagetwo from '../../Images/crew2.jpg';
import Imagethree from '../../Images/Quantum-Break-.jpg';
import Imagefour from '../../Images/12669.jpg';
import Imagefive from '../../Images/300px-Need_for_Speed_Rivals_cover.jpg';
import Imagesix from '../../Images/Dragon-Ball-Xenoverse-2-Lite-art-900x900.jpg';
import Imageseven from '../../Images/caratula-assassins-creed-valhalla-1931677.jpg';
import Imageeight from '../../Images/54b05c5786d03089c2fa4e440f0fb814.jpg';
import Imagenine from '../../Images/cd7bbbf3b6386b35d5d300c36807023d.jpg';
import Imageten from '../../Images/19284.jpg';
import Imageteleven from '../../Images/5b944672404f625cf0b3b4f3714a1a4c.jpg';
import Imagettwelve from '../../Images/wp7494381.jpg';



function Home() {
    const style = {
        marginTop: '20px',
    }
    return (<>
        <Imageslider />

        <Heading heading='RELEASED' headspan='GAMES' showBody headpara='Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic' />

        <AllCards src={[Image, Imagetwo, Imagethree, Imagefour, Imagefive, Imagesix]}
            platform={['PlayStation 4, Xbox One, Microsoft Windows',
                'PlayStation 4, Xbox One, Microsoft Windows, Google Stadia',
                'Xbox One, Windows 10, Microsoft Windows',
                'Xbox One, Windows 10, Microsoft Windows',
                'PlayStation 4, Xbox One, Microsoft Windows',
                'PlayStation 4, Xbox One, Microsoft Windows']}
            name={['Anthem', 'Crew 2', 'Quantum Break', 'Mass Effect', 'NFS Rivals', 'Xeoverse 2']} />

        <Heading heading='UPCOMING' headspan='GAMES' />

        <Banner />

        <AllCards style={style} src={[Imageseven, Imageeight, Imagenine, Imageten, Imageteleven, Imagettwelve]}
            platform={['PlayStation 4, Xbox One, Microsoft Windows',
                'Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series',
                'PlayStation 4, PlayStation 5',
                'PlayStation 4, PlayStation 5, Xbox One, Xbox Series X and Series S, Microsoft Windows',
                'PlayStation 5',
                'PlayStation 4, Xbox One, PlayStation 5, Google Stadia, Xbox Series X and Series S, Microsoft Windows']}
            name={['AC Valhalla', 'Farcry 6', 'Horizon Forbidden', 'Dying Light 2', 'Returnal', 'Resident Evil Village']} />
    </>);
}

export default Home;