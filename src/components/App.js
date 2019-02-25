import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogList from './HogList';
import hogs from '../porkers_data';

class App extends Component {

  state = {
    hogs: hogs,
    isGreased: false,
    sortBy: 'name'
  }

greaseToggle = () => {
  this.setState({isGreased: !this.state.isGreased})
}

setSortBy = (str) => {
  this.setState({sortBy: str})
}

getHogs = () => {
  const hogsFromState = this.state.hogs
  const ifGreased = this.state.isGreased
  const currentHogs = ifGreased 
  ? hogsFromState.filter(hog => hog.greased)
  : hogsFromState.slice()
  return currentHogs
}

getSortedHogs = (hogs) => {
  const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
  switch(this.state.sortBy){
    case 'name':
      return hogs.sort((a, b) => a.name.localeCompare(b.name))
    case 'weight':
      return hogs.sort((a, b) => a[weight] - b[weight])
    default:
      return hogs
  }
}

  render() {
    const { 
      greaseToggle, 
      setSortBy, 
      getHogs, 
      getSortedHogs 
    } = this
    const hogs = getHogs() //not from state.hogs
    const sortedHogs = getSortedHogs(hogs)
    return (
      <div className="App">
          <Nav 
          greaseToggle={greaseToggle}
          setSortBy={setSortBy}
          />
            <HogList hogs={sortedHogs}/>
      </div>
    )
  }
}

export default App;
