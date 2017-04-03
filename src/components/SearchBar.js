import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

const _SearchBar = React.createClass({

  getInitialState () {
    return {
      searchTerm: ''
    };
  },

  handleChange (event) {
    this.setState({
      searchTerm: event.target.value
    });
  },

  handleSubmit () {
    this.props.searchRepos(this.state.searchTerm);
    this.props.showResults(this.state.searchTerm);
  },

  render () {
    return (
      <div>
        <div className="panel-block">
          <p className="control has-icon">
            <input className="input" type="text" placeholder="Enter a repo name to start your search..." value={this.state.searchTerm} onChange={this.handleChange}/>
            <span className="icon is-small">
              <i className="fa fa-search"></i>
            </span>
          </p>
          <p>
            <button onClick={this.handleSubmit}>Submit</button>
          </p>
        </div>
      </div>
    );
  }
});

function mapDispatchToProps (dispatch) {
  return {
    searchRepos: (searchParam) => {
      dispatch(actions.searchRepos(searchParam));
    }
  };
}

export default connect(null, mapDispatchToProps)(_SearchBar);
