import React from 'react';
import DemoConfigs from './DemoConfigs.jsx';
import IconButton from 'material-ui/IconButton';
import ActionHelp from 'material-ui/svg-icons/action/help';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const styles = {
  demoConfigs: {
    marginLeft: 40,
    color: 'black'
  },
  toolbar: {
    position: 'fixed',
    width: '100%',
    top: 0
  },
  text: {
    color: 'black'
  }
};

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 3
    };
  }

  handleChange(event, index, value) {
    this.setState({value})
  };

  render() {
    return (
       <Toolbar style={styles.toolbar}>
        <ToolbarGroup firstChild={false}>
          <ToolbarTitle text="VolumeIQ" style={styles.text}/>
          <ToolbarSeparator />
          <ToolbarTitle text="Select a demo elevator:" style={styles.demoConfigs} />
          <DemoConfigs
            handleChange={this.props.handleChange}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <IconButton href="https://github.com/HackReaction/KONE-Hackathon" >
            <ActionHelp />
          </IconButton>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default NavBar;