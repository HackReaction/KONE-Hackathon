import React from 'react';
import ReactDOM from 'react-dom';

class FloorsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      matrixOfBooleans: [false, false, false]
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <h3>I'm the Floors Button Pannel!</h3>
    )
  }
}

export default FloorsPanel;