import React from "react";

import image from "./Images";

export default class CardOpen extends React.Component {

    state = {
        hasBeenExpanded: false
    };

    

    imageName = () => this.props.hog.name.toLowerCase().replace(/ /g,"_");

    checkGreased = () => {
        this.props.hog.greased 
            ? <input onChange={(event) => {event.stopPropagation(); this.props.changeGreasedState(this.props.hog.name)}} id='greased'type='checkbox' checked></input> 
            : <input onChange={(event) => {event.stopPropagation(); this.props.changeGreasedState(this.props.hog.name)}} id='greased'type='checkbox'></input> 
    }
    

    handleClickExpand = () => {
        this.setState({hasBeenExpanded: !this.state.hasBeenExpanded})
    };

    render () {
        const hog = this.props.hog;

        // const hide = {display: `${this.state.hasBeenHidden}`}xs

        return (

            this.state.hasBeenExpanded 
                ? <fragment>
                    <div className='ui four wide column'>
                        <div className="ui card" >
                            <div className="image" onClick={this.handleClickExpand}>
                                <img src={image[this.imageName()]}/>
                            </div>  
                            <div className="content">
                                <div className="header" onClick={this.handleClickExpand}>{hog.name}</div>
                                <div className="meta">
                                    <p>{hog.specialty}</p>
                                </div>
                                <div className="description">
                                Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: <strong>{hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</strong>
                                </div>
                            </div>
                            <div className="extra content">
                                <span className="right floated">
                                    <label htmlFor='greased'>Greased! </label>
                                    {this.props.checkGreased()}
                                </span>
                                <span>
                                    <i className="trophy icon"></i>
                                    {hog['highest medal achieved']}
                                </span>
                                <span>
                                    <button onClick={this.props.handleClick}>Hide!</button>
                                </span>
                            </div>                
                        </div>
                    </div>
                </fragment>
                : <fragment>
                    <div className='ui four wide column'>
                        <div className="ui card" >
                            <div className="image" onClick={this.handleClickExpand}>
                                <img src={image[this.imageName()]}/>
                            </div>  
                            <div className="content">
                                <div className="header" onClick={this.handleClickExpand}>{hog.name}</div>
                            </div>
                        </div>
                    </div>
                </fragment>
        );
    };
}; 

