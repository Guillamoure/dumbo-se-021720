import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(props)
  return (
    <ul className="cards">
      {
        props.planeteers.map(planeteerObj => <Planeteer planeteerObj={planeteerObj}/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
