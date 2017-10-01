import React from 'react';
import ReactDOM from 'react-dom';

class BeforeImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tempStateVar: false
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <img src={'../../dist/assets/afterTurtle.png'} />
    )
  }
}

export default BeforeImage;