import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';

const styles = {
  uploadButton: {
    verticalAlign: 'middle',
  },
  uploadInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
  button: {
    marginLeft: 24
  },
  separator: {

  }
};

class DemoConfigs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upIsPressed: false,
      downIsPressed: false
    }
    this.handleChairClick = this.handleChairClick.bind(this);
    this.handleFiguresClick = this.handleFiguresClick.bind(this);
    this.handleConcreteClick = this.handleConcreteClick.bind(this);
  }

  componentDidMount() {

  }

  handleChairClick() {
    console.log("chairs clicked");
    this.props.handleChange({target:{name:'name',value:'chairs'}});
  }

  handleFiguresClick() {
    console.log("figures clicked");
    this.props.handleChange({target:{name:'name',value:'figures'}});
  }

  handleConcreteClick() {
    console.log("concrete clicked");
    this.props.handleChange({target:{name:'name',value:'concrete'}});
  }
  render () {
    return (
      <div>
        <RaisedButton
          label="Figures"
          labelPosition="before"
          primary={true}
          style={styles.button}
          onClick={this.handleFiguresClick}
        />
       <RaisedButton
         label="Chair"
         labelPosition="before"
         primary={true}
         style={styles.button}
         onClick={this.handleChairClick}
       />
       <RaisedButton
         label="Concrete"
         labelPosition="before"
         primary={true}
         style={styles.button}
         onClick={this.handleConcreteClick}
       />
     </div>
    )
  }
}

export default DemoConfigs;
