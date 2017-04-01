import React from 'react';
import { connect } from 'react-redux';

import DetailBox from './DetailBox';
import Result from './Result';

const _ResultBox = React.createClass({

  getInitialState () {
    return {
      selectedRepoNameName: null,
      repo: null
    };
  },

  handleResultClick (repo) {
    this.setState({ selectedRepoName: repo.name, repo });
  },

  handleButtonClick () {
    this.setState({ selectedRepoName: null, repo: null });
  },

  renderResults () {
    const that = this;
    return this.props.results.map((repo, i) => {
      return (
        <Result
          selected={repo.name === that.state.selectedRepoName}
          key={i}
          repo={repo}
          onClick={() => { that.handleResultClick(repo); }}
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
