import React from'react';




function Teamheading(props){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="header">
                    <h1>{props.heading} <span>{props.headspan}</span></h1>
                    { props.showBody && <p>{props.headpara}</p>}
                </div>
            </div>
        </div>
    );
}

export default Teamheading;