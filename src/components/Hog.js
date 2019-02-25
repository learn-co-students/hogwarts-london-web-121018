import React from 'react'

export default class Hog extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//     clicked: false
//   }
// }

state = {
  clicked: false
}

toggleDetails =  () => {
  this.setState({clicked: !this.state.clicked })
}

  render () {

    const { toggleDetails } = this
    const { hog } = this.props
    const { clicked } = this.state

    const image_name = hog.name.toLowerCase().replace(/\s/g, '_')
    const image = require(`../hog-imgs/${image_name}.jpg`)
    return <li>
      <img onClick={toggleDetails} src={image} />
      { 
      clicked &&
      <div className='hog-name'>
      <p>Name: {hog.name}</p>
      <p>Weight: {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
      <p>Honor: {hog['highest medal achieved']}</p>
      <p>Specialty: {hog.specialty} </p>
      </div>
    }
    </li>
  }
}