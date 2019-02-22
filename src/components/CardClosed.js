import React from "react";

import image from "./Images";

export default class CardClosed extends React.Component {

    imageName = () => this.props.hog.name.toLowerCase().replace(/ /g,"_");


    render () {
        const hog = this.props.hog;

        return (
            <div className='ui four wide column'>
            <div className="ui card" onClick={this.props.handleClick}>
                <div className="content">
                    <img className="right floated mini ui image" src={image[this.imageName()]} />
                    <div className="header">
                        <h1>{hog.name}</h1>
                    </div>
                    <div className="meta">
                        {hog.specialty}
                    </div>
                </div>
            </div>
            </div>
            
        );
    };
}; 
