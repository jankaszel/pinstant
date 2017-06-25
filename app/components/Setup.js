import React, {Component} from 'react';
import {bind, compose} from 'ramda';
import {connect} from 'react-redux';
import {setSettings} from '../settingsStore';
import withSettings from './withSettings';

class Setup extends Component {
  state = {
    apiToken: '',
  };

  constructor(props) {
    super(props);

    this.handleChange = bind(this.handleChange, this);
    this.handleSubmit = bind(this.handleSubmit, this);
  }

  handleChange(event) {
    const {value} = event.target;

    this.setState({
      apiToken: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {dispatch} = this.props;
    const {apiToken} = this.state;

    dispatch(
      setSettings({
        apiToken,
      })
    );
  }

  render() {
    const {apiToken} = this.state;

    return (
      <div>
        <p>Setup</p>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={apiToken} onChange={this.handleChange} />

          <a onClick={this.handleSubmit}>Save</a>
        </form>
      </div>
    );
  }
}

export default compose(connect(state => state), withSettings(false, '/'))(
  Setup
);
