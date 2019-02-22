import React from "react";

import CardClosed from "./CardClosed";
import CardOpen from "./CardOpen";

export default class HogCard extends React.Component {

    state = {
        hasBeenClicked: false,
        hasBeenHidden: null
    };

    checkGreased = () => this.props.hog.greased ? <input onChange={() => this.props.changeGreasedState(this.props.hog.name)} id='greased'type='checkbox' checked></input> : <input onChange={() => this.props.changeGreasedState(this.props.hog.name)} id='greased'type='checkbox'></input>
    
    handleClick = () => {
        this.setState({hasBeenClicked: !this.state.hasBeenClicked})
    };

    handleClickHide = () => {
        this.setState({hasBeenHidden: 'none'})
    };

    render () {
        const hog = this.props.hog;


        return (
            this.state.hasBeenClicked ? <CardOpen hog={hog} checkGreased={this.checkGreased} handleClick={this.handleClick}/> : <CardClosed hog={hog} handleClick={this.handleClick}/>
        );
    };
}; 

// 