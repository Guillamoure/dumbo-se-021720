import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" name="searchBar" placeholder="Who would you like to search for?" value={this.props.searchBar} onChange={(e) => this.props.renderChange(e)}/>

       <label htmlFor="age">Sort By Age:</label>
       <input type="checkbox" id="age" name="age" onChange={(e) => this.props.renderCheckbox(e)}/>
      </div>
    );
  }

}

export default SearchBar;
