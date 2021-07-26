import React from 'react';
import Card from './Card';

function AllCards(props){
    return(
        <div className="container" style={props.style}  >
            <div className="row">
                <div className="col-xl-4 col-sm-4 col-6 ">
                    
                    <Card name={[props.name[0]]} src={props.src[0]} platform={[props.platform[0]]}/>
                </div>
                
                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name={[props.name[1]]} src={props.src[1]} platform={[props.platform[1]]}/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name={[props.name[2]]} src={props.src[2]} platform={[props.platform[2]]}/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name={[props.name[3]]} src={props.src[3]} platform={[props.platform[3]]}/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name={[props.name[4]]} src={props.src[4]} platform={[props.platform[4]]}/>
                </div>

                <div className="col-xl-4 col-sm-4 col-6">
                    <Card name={[props.name[5]]} src={props?.src[5]} platform={[props.platform[5]]}/>
                </div>
            </div>
        </div>    
    );
}

export default AllCards;