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
    let diffEncoded;
    let endpoint = 'http://localhost:3000';
    let matchingBeforePicture = {
      chair: '/static/before-images/0chair.png',
      concrete: '/static/before-images/0concrete.png',
      staticFigures: '/static/before-images/0elevator.png'
    };
    if (event.target.value === 'chair') {
      if(this.state.chairCount <= chairLimit ) {
        scene = this.state.chairCount + 'chair';
      }
      axios.post(endpoint+'/chair', {num: this.state.chairCount})
        .then(data => {
          diffEncoded = JSON.stringify(data.data);
          this.setState({
            chairCount: this.state.chairCount >= chairLimit ? 1 : this.state.chairCount+1,
            img1: matchingBeforePicture[event.target.value],
            img2: `/static/after-images/${scene}.png`,
            diffImg: diffEncoded
          });
        });
    } else if (event.target.value === 'concrete') {
      if(this.state.concreteCount <= concreteLimit ) {
        scene = this.state.concreteCount + 'concrete';
      }
      axios.post(endpoint+'/concrete', {num: this.state.concreteCount})
        .then(data => {
          diffEncoded = JSON.stringify(data.data);
          this.setState({
            concreteCount: this.state.concreteCount >= concreteLimit ? 1 : this.state.concreteCount+1,
            img1: matchingBeforePicture[event.target.value],
            img2: `/static/after-images/${scene}.png`,
            diffImg: diffEncoded
          });
        });
    } else if (event.target.value === 'staticFigures') {
      if(this.state.staticFiguresCount <= staticFiguresLimit) {
        scene = this.state.staticFiguresCount + 'elevator';
      }
      console.log('go')
      axios.post(endpoint+'/staticFigures', {num: this.state.staticFiguresCount})
        .then((data)=>{
          diffEncoded = JSON.stringify(data.data);
          this.setState({
            staticFiguresCount: this.state.staticFiguresCount >= staticFiguresLimit ? 1 : this.state.staticFiguresCount+1,
            img1: matchingBeforePicture[event.target.value],
            img2: `/static/after-images/${scene}.png`,
            diffImg: diffEncoded
          });
        })
        .catch((err)=> {
          console.log('err: ', err)
        });
      }
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
            diffImg={this.state.diffImg}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
