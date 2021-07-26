import React from 'react'
import Card from '../../Cards/Card.js';


function Teamcard(props) {
    return (
        <Card src={props.src} name={props.name} platform={props.platform}/>    
    )
}

export default Teamcard
