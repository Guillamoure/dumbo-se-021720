import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?" value={this.props.searchBar} onChange={(e) => this.props.renderChange(e.target.value)}/>
      </div>
    );
  }

}

export default SearchBar;
