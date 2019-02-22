import React from "react";

export default class SortSelector extends React.Component {

    render() {
        return (
            <div style={{display:'inline', margin:'20px'}}>
                <select onChange={(event) => this.props.handleSortSelector(event)}>
                    <option value=''>--sort--</option>
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                </select>
            </div>
        )
    };
};