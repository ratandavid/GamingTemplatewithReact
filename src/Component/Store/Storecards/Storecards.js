import React from 'react';
import Storecard from './Storecard';
import Imgone from '../../../Images/shop_item08.jpg';
import Imgtwo from '../../../Images/shop_item02.jpg';
import Imgthree from '../../../Images/shop_item04.jpg';
import Imgfour from '../../../Images/shop_item03.jpg';
import Imgfive from '../../../Images/shop_item07.jpg';
import Imgsix from '../../../Images/shop_item05.jpg';


function Storecards() {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-4 col-6">
                    <Storecard src={Imgone} headingone={'XBOX ONE CONTROLLER'} Price={'Price: $19.00'}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-6">
                    <Storecard src={Imgtwo} headingone={'XBOX ONE CONTROLLER'} Price={'Price: $19.00'}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-6">
                    <Storecard src={Imgthree} headingone={'XBOX ONE CONTROLLER'} Price={'Price: $19.00'}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-6">
                    <Storecard src={Imgfour} headingone={'XBOX ONE CONTROLLER'} Price={'Price: $19.00'}/>
                </div>
                <div className="col-xl-4 col-lg-4 col-6">
                    <Storecard src={Imgfive} headingone={'XBOX ONE CONTROLLER'} Price={'Price: $19.00'}/>
                </div>

                <div className="col-xl-4 col-lg-4 col-6">
                    <Storecard src={Imgsix} headingone={'XBOX ONE CONTROLLER'} Price={'Price: $19.00'}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Storecards
