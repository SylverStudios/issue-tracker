import React from 'react';

const Omnibox = React.createClass({
  getInitialState() {
    return {
      value: '',
      committedValues: [],
    };
  },
  onChange(e) {
    this.setState({ value: e.target.value });
  },
  onKeyUp(e) {
    if (e.keyCode === 13) { // 13 is ENTER KEY
      const cValues = this.state.committedValues;
      cValues.push(this.state.value);
      this.setState({ value: '', committedValues: cValues });
    }
  },
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="asdfasdf"
          value={this.state.value}
          onChange={this.onChange}
          onKeyUp={this.onKeyUp}
        />
        <div>
          {this.state.committedValues.map(v => <div>{v}</div>)}
        </div>
      </div>
    );
  },
});

export default Omnibox;
