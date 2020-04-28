import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchBar: ""
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

  renderChange = (value) => {
    this.setState({searchBar: value})
  }

  filterPlaneteers = () => {
    return this.state.planeteers.filter(planeteer => {
      let allText = (planeteer.name + " " + planeteer.bio).toLowerCase()
      return allText.includes(this.state.searchBar.toLowerCase())
    })
  }

  updatePlaneteersList = (planeteer) => {
    // duplicate the array
    const planeteers = [...this.state.planeteers, planeteer]
    // adding planeteer
    // planeteers.push(planeteer)
    // set state
    this.setState({planeteers: planeteers})
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchBar={this.state.searchBar} renderChange={this.renderChange}/>
        <RandomButton updatePlaneteersList={this.updatePlaneteersList}/>
        <PlaneteersContainer planeteers={this.filterPlaneteers()}/>
      </div>
    );
  }

}

export default App;
