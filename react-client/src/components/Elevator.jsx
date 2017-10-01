import React from 'react';
import ReactDOM from 'react-dom';

class Elevator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <h3>I'm an elevator!</h3>
    )
  }
}

export default Elevator;