import React from 'react';

class Planeteer extends React.Component {

  state = {
    clicked: false
  }

  renderAge = (born) => {
    return new Date().getFullYear() - born
  }

  renderClick = () => {
    this.setState((previousState) => ({clicked: !previousState.clicked}))
  }


  render() {
    // console.log(this.props)
    // console.log(this.state.clicked, "am i clicked?")
    const { pictureUrl, name, twitter, born, bio, quote, fromUSA } = this.props.planeteerObj
    // const pObj = this.props.planeteerObj
    return (
      <li className="cards__item" onClick={this.renderClick}>
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.clicked ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {this.renderAge(born)}</p>
              <p>{fromUSA ? "USA-Based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
