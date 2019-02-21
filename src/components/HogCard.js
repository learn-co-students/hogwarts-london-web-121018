import React from "react";

import image from "./Images";

export default class HogCard extends React.Component {

    state = {
        hasBeenClicked: false,
        hasBeenHidden: null
    };

    imageName = () => this.props.hog.name.toLowerCase().replace(/ /g,"_");
    renderHogDetails = (hog) => {
        if (this.state.hasBeenClicked) {
            return (
                <div>
                <div className="meta">
                        < span className="date">Specialty: {hog.specialty}</span>
                    </div>
                    <div className="description">
                    weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                    <br></br>
                    <strong>highest medal achieved: {hog['highest medal achieved']}</strong>
                    </div>
                
                <div className="extra content">
                    <label htmlFor='greased'>Greased! </label>
                    {this.checkGreased()}
                    <button onClick={this.handleClickHide()}>Hide</button>
                </div>
                </div>
            )
        } else {
            return null
        }
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

        const hide = {display: `${this.state.hasBeenHidden}`}

        return (
            
            <div style={hide} className="ui cards eight wide column">
                <div className="image">
                    <img src={image[this.imageName()]}/>
                </div>
                <div className="content">
                    <h1 className="header">
                    <a onClick={this.handleClick}>{hog.name}</a>
                    </h1>
                    {this.renderHogDetails(hog)}
                </div>
            </div>
            
        );
    };
}; 