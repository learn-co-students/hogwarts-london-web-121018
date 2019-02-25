import piggy from '../porco.png'
import '../App.css'
// import Nav from './Nav'
import React from 'react'
import hogs from '../porkers_data'


const Nav = ({greaseToggle, setSortBy}) => {

	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<label>
			<br></br>
			Show greased: 
				<input onClick={greaseToggle} type="checkbox" />
			</label>
			<label>
			<select onChange={event => setSortBy(event.target.value)}>
			   <option value=''>Sort By...</option>
					<option value='name'>Name</option>
					<option value='weight'>Weight</option>
			</select>
			</label>

		</div>
	)
}

export default Nav
