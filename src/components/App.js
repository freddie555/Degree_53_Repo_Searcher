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

  showResults () {
    const that = this;
    this.setState({
      resultsVisible: true,
      searchTerm: that.searchTerm
    });
  },

  render () {
    return (
      <div>
        <SearchBar showResults={this.showResults} />
        {this.state.resultsVisible && <ResultBox searchTerm={this.state.searchTerm} />}
      </div>
    );
  }
});
