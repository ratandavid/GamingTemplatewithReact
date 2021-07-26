import React from 'react'
import './card.css'

function Storecard(props) {
    return (
        <div className="accessories-item">
            <div className="img">
                <a href="#"><img class="img-fluid" src={props.src}/></a>
            </div>
            <div className="accessories-content">
                <h5>
                    <a href="#">{props.headingone}</a>
                    <span>{props.Price}</span>
                </h5>
            </div>
        </div>
    )
}

export default Storecard
