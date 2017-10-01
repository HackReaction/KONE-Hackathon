import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar.jsx';
import DemoContent from './components/DemoContent.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentOccupied: 20,
      name: '',
      count: 0,
      chairCount: 1,
      concreteCount: 1,
      staticFiguresCount: 1,
      img1: '/static/before-images/test/sbbefore.png',
      img2: '/static/after-images/test/sbafter.png',
      diffImg: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let staticFiguresLimit = 6;
    let chairLimit = 2;
    let concreteLimit = 3;
    let scene;
    console.log('value: ', event.target.value)
    if (event.target.value === 'chair') {
      if(this.state.chairCount <= chairLimit ) {
        scene = this.state.chairCount + 'chair';
      }
      axios.post('/chair', {num: this.state.chairCount});
      this.setState({
        chairCount: this.state.chairCount >= chairLimit ? 1 : this.state.chairCount+1
      })
    } else if (event.target.value === 'concrete') {
      if(this.state.concreteCount <= concreteLimit ) {
        scene = this.state.concreteCount + 'concrete';
      }
      axios.post('/concrete', {num: this.state.concreteCount});
      this.setState({
        concreteCount: this.state.concreteCount >= concreteLimit ? 1 : this.state.concreteCount+1
      })
    } else if (event.target.value === 'staticFigures') {
      if(this.state.staticFiguresCount <= staticFiguresLimit) {
        scene = this.state.staticFiguresCount + 'elevator';
      }
      axios.post('/staticFigures', {num: this.state.staticFiguresCount});
      this.setState({
        staticFiguresCount: this.state.staticFiguresCount >= staticFiguresLimit ? 1 : this.state.staticFiguresCount+1
      })
    }
    let matchingBeforePicture = {
      chair: '/static/before-images/0chair.png',
      concrete: '/static/before-images/0concrete.png',
      staticFigures: '/static/before-images/0elevator.png'
    }

    this.setState({
      img1: matchingBeforePicture[event.target.value],
      img2: `/static/after-images/${scene}.png`
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar handleChange={this.handleChange} />
          <div style={{height: 56}}></div>
          <DemoContent
            percentOccupied={this.state.percentOccupied}
            img1={this.state.img1}
            img2={this.state.img2}
            imgDiff={this.state.imgDiff}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
