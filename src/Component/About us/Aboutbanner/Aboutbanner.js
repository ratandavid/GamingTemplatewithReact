import React from 'react'
import '../Aboutbanner/Aboutbanner.css'
// import BannerImage from '../../../Images/breadcrumb_bg.jpg';


function Innerbanner(props) {
    return (
        <section className="background">
        <div className="container-fluid">
            <div className="row">
                    <div className="b_title">
                        <h1>{props.bannername}<span>{props.bannerspan}</span></h1>
                    </div>
            </div>
        </div>
        </section>
    )
}

export default Innerbanner
