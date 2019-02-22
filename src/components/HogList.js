import React from "react";
import HogCard from "./HogCard";


export default class HogList extends React.Component {

    
    sorthogs = () => {
        const sort = this.props.hasBeenSorted
        const allHogs = this.props.hogs
        const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

        switch (sort) {
            case 'name':
                return allHogs.sort((hog1, hog2) => hog1.name.localeCompare(hog2.name))
            case 'weight':
                return allHogs.sort((hog1, hog2) => hog2[weight] - hog1[weight])
            default: 
                return allHogs
        }
    }

    filterGreasedHogs = () => {
        console.log(this.sorthogs())
        return this.props.hasBeenFiltered ? this.sorthogs().filter(hog => hog.greased) : this.sorthogs()
      };

    
    render () {
        
        const renderHogs = this.filterGreasedHogs().map(hog => < HogCard changeGreasedState={this.props.changeGreasedState} hog={hog} key={hog.name}/>)

        return (
            <div className='ui link cards grid'>
                {renderHogs}
            </div>
        )
    };
};