import React from 'react';
import { connect } from 'react-redux';

import DetailBox from './DetailBox';
import Result from './Result';

const _ResultBox = React.createClass({

  getInitialState () {
    return {
      selectedRepo: null,
      repo: null
    };
  },

  handleResultClick (repo, key) {
    this.setState({ selectedRepo: key, repo });
  },

  handleButtonClick () {
    this.setState({ selectedRepo: null, repo: null });
  },

  renderResults () {
    const that = this;
    console.log(this.props.results[0], '0');
    return this.props.results.map((repo, i) => {
      return (
        <Result
          selected={i === that.state.selectedRepo}
          key={i}
          repo={repo}
          onClick={() => { that.handleResultClick(repo, i); }}
        />
      );
    });
  },

  renderDetails () {
    return (
      <div className='selection'>
        <DetailBox repo={this.state.repo} />
        <button onClick={() => { this.handleButtonClick(); }}>Close Profile</button>
      </div>
    );
  },

  render () {
    return (
      <div>
        <h3>Showing results for {this.props.searchTerm}</h3>
        {(this.state.repo) ? this.renderDetails() : null}
        {this.renderResults()}
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    results: state.repoResults
  };
}

export default connect(mapStateToProps)(_ResultBox);
