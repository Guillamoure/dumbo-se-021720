import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchBar: "",
    checkbox: false
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
      .then(r => r.json())
      .then(planeteers => {
        // console.log(planeteers)
        this.setState({planeteers})
        // this.setState({planeteers: planeteers})
      })
  }

  renderChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  renderCheckbox = (event) => {
    this.setState({checkbox: event.target.checked})
  }

  renderPlaneteers = () => {
    // filter
    let filteredPlaneteers = this.state.planeteers.filter(planeteer => {
      let allText = (planeteer.name + " " + planeteer.bio).toLowerCase()
      return allText.includes(this.state.searchBar.toLowerCase())
    })

    // sort
    if (this.state.checkbox){
      return filteredPlaneteers.sort((p1, p2) => {
        return p2.born - p1.born
      })
    } else {
      return filteredPlaneteers
    }
  }

  updatePlaneteersList = (planeteer) => {
    // duplicate the array
    const planeteers = [...this.state.planeteers, planeteer]
    // adding planeteer
    // planeteers.push(planeteer)
    // set state
    this.setState({planeteers})
  }

  render(){
    console.log("checkbox", this.state.checkbox)
    return (
      <div>
        <Header />
        <SearchBar searchBar={this.state.searchBar} renderChange={this.renderChange} renderCheckbox={this.renderCheckbox}/>
        <RandomButton updatePlaneteersList={this.updatePlaneteersList}/>
        <PlaneteersContainer planeteers={this.renderPlaneteers()}/>
      </div>
    );
  }

}

export default App;
