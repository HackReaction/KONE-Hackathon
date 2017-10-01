import React from 'react';
import ReactDOM from 'react-dom';

class UpAndDownPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      upIsPressed: false,
      downIsPressed: false
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <h3>I'm the Up and Down Buttons Panel!</h3>
    )
  }
}

export default UpAndDownPanel;