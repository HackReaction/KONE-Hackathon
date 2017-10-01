import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Elevator from './components/Elevator.jsx';
import UpAndDownPanel from './components/UpAndDownPanel.jsx';
import FloorsPanel from './components/FloorsPanel.jsx';
import BeforeImage from './components/BeforeImage.jsx';
import SpaceThreshold from './components/SpaceThreshold.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SeanGridList from './components/SeanGridList.jsx';
import JerryGridList from './components/JerryGridList.jsx';
// import AfterImage from './components/AfterImage.jsx';

const seanBigBox = {
  marginRight: '2%',
  marginLeft: '2%',
  width: '96%',
  border: '1px dotted red',
  height: '100vh',
  display: 'inline-block'
}

const testStyleBox = {
  width: '45%',
  height: '50%',
  marginLeft: '2%',
  marginBottom: '2%',
  border: '1px dotted red',
  display: 'inline-block',
}

const picStyle = {
  width: '100%',
  height: '100%',
}

const imgSrc = '/static/beforeTurtle.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      percentOccupied: 20,
      name: '',
      count: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name,event.target.value)
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <h1>Item List</h1>
              {/* <SeanGridList /> */}

          <div style={seanBigBox}>
            <div>
              <div style={testStyleBox}><img src={imgSrc} style={picStyle}/></div>
              <div style={testStyleBox}><img src={imgSrc} style={picStyle}/></div>
            </div>
            <div style={testStyleBox}><img src={imgSrc} style={picStyle}/></div>
            <div style={testStyleBox}>

              <SpaceThreshold percentOccupied={this.state.percentOccupied} />
              {/* <p>Placeholder for testing occupancy %</p> */}
              {/* <input
                type="number"
                name="percentOccupied"
                value={this.state.percentOccupied}
                onChange={this.handleChange.bind(this)}
              >
              </input> */}


            </div>

          </div>



          <Elevator/>
          <UpAndDownPanel
            handleChange={this.handleChange}
          />
          <FloorsPanel />
          <BeforeImage />
          <SpaceThreshold percentOccupied={this.state.percentOccupied} />
          <p>Placeholder for testing occupancy %</p>
          <input
            type="number"
            name="percentOccupied"
            value={this.state.percentOccupied}
            onChange={this.handleChange.bind(this)}
          >
          </input>
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
