import React from 'react';

import ResultBox from './ResultBox';
import SearchBar from './SearchBar';

export default React.createClass({

  getInitialState () {
    return {
      resultsVisible: false,
      searchTerm: ''
    };
  },

  showResults (searchTerm) {
    this.setState({
      resultsVisible: true,
      searchTerm: searchTerm
    });
  },

  render () {
    return (
      <div>
        <img className='logo' src='https://casinonews.today/wp-content/uploads/2015/04/degree-53.png' height='100px' width='250px' />
        <nav className='panel'>
          <p className='panel-heading'>
            GitHub Repo Search
          </p>
          <SearchBar showResults={this.showResults} />
        {this.state.resultsVisible && <ResultBox searchTerm={this.state.searchTerm} />}
        </nav>
      </div>
    );
  }
});
