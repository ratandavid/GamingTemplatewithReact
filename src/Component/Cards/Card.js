import React,{ useState } from'react';
import './Card.css';


function Card(props){
    
    const [showJSX,setShowJSX] = useState(true);
    function hideOrShow()
    {
        setShowJSX(!showJSX);
    }
    

    return(
        <div className="imagebox" onMouseEnter={hideOrShow} onMouseLeave={hideOrShow}>
            <img src={props.src} alt="Anthem" className="img-responsive"/>
            <div className="image-text"  id="image-txt">
                <h3 className={showJSX?'':'hide'}>{props.name}</h3>
            </div>
            <div className="img_overlay img_overlay--blur">
                <div className="overlay_title">
                    <h3> {props.name} </h3>
                </div>
                <div className="overlay_platform">
                    <p>{props.platform}</p>
                </div>
            </div>
        </div>
        
        
    );
}
export default Card;