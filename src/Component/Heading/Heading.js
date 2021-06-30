import React from'react';
import './heading.css';



function Heading(props){
    return(
        <div className="container-fluid">
            <div class="row">
                <div className="header">
                    <h1>{props.heading} <span>{props.headspan}</span></h1>
                    { props.showBody && <p>{props.headpara}</p>}
                </div>
            </div>
        </div>
    );
}

export default Heading;