import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Elevator from './components/Elevator.jsx';
import UpAndDownPanel from './components/UpAndDownPanel.jsx';
import FloorsPanel from './components/FloorsPanel.jsx';
import BeforeImage from './components/BeforeImage.jsx';
// import AfterImage from './components/AfterImage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
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

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
      <Elevator/>
      <UpAndDownPanel />
      <FloorsPanel />
      <BeforeImage />
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));