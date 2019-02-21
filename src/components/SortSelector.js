import React from "react";

export default class SortSelector extends React.Component {

    render() {
        return (
            <div>
                <select onChange={(event) => this.props.handleSortSelector(event)}>
                    <option value=''> </option>
                    <option value='name'>Name</option>
                    <option value='weight'>Weight</option>
                </select>
            </div>
        )
    };
};