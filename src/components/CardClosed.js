import React from "react";

import image from "./Images";

export default class CardClosed extends React.Component {

    imageName = () => this.props.hog.name.toLowerCase().replace(/ /g,"_");
    
    handleClick = () => {
        this.setState({hasBeenClicked: !this.state.hasBeenClicked})
    };

    handleClickHide = () => {
        this.setState({hasBeenHidden: 'none'})
    };

    render () {
        const hog = this.props.hog;

        return (
            <div className='ui four wide column'>
            <div className="ui card" onClick={this.props.handleClick}>
                <div class="content">
                    <img class="right floated mini ui image" src={image[this.imageName()]} />
                    <div class="header">
                        <h1>{hog.name}</h1>
                    </div>
                    <div class="meta">
                        {hog.specialty}
                    </div>
                </div>
            </div>
            </div>
            
        );
    };
}; 
