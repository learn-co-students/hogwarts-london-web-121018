import React from "react";

export default class Filter extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleFilterClick}>{this.props.hasBeenFiltered ? 'All' : 'Greased'}</button>
            </div>
        )
    };
};