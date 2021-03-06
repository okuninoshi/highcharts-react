import React from 'react';
import HighchartsReact from '../src/HighchartsReact';

export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.parentState;
  }

  render() {
    const { parentProps, options } = this.state;

    return (
      <HighchartsReact
        { ...parentProps }
        options={ options }
      />
    );
  }
}
