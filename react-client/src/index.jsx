import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/NavBar.jsx';
import DemoContent from './components/DemoContent.jsx';

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
          <NavBar handleChange={this.handleChange} />
          <div style={{height: 56}}></div>
          <DemoContent percentOccupied={this.state.percentOccupied} />
        </div>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
