import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList, {  } from './HogList';
import Filter from './filter'
import SortSelector from "./SortSelector";

class App extends Component {

  state = {
    hogs: hogs,
    filtered: false,
    sortType: ''
  };

  changeGreasedState = (name) => {
    console.log(this.state)
    const updatedState = this.state.hogs.map(hog => {
      return hog.name === name ? {...hog, greased: !hog.greased} : hog
    })
    console.log(updatedState)
    this.setState({hogs:updatedState})
  }; 

  handleFilterClick = () => {
    this.setState({filtered: !this.state.filtered});
  }

  handleSortSelector = (event) => {
    this.setState({sortType: event.target.value})
  };

  render() {
    return (
      <div className="App">
          < Nav />
          <div style={{margin: '20px'}}>
          < Filter handleFilterClick={this.handleFilterClick} hasBeenFiltered={this.state.filtered}/>
          < SortSelector handleSortSelector={this.handleSortSelector}/>
          </div>
          < HogList hogs={this.state.hogs} changeGreasedState={this.changeGreasedState}  hasBeenFiltered={this.state.filtered} hasBeenSorted={this.state.sortType}/>
      </div>
    )
  }
}

export default App;
