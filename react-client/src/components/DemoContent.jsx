import React from 'react';
import SpaceThreshold from './SpaceThreshold.jsx';

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
  height: '100%'
}

const imgSrc = '/static/beforeTurtle.jpeg';

const styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '400px 400px',
    gridGap: 10
  },
  one: {
    gridColumn: 1 / 2,
    gridRow: 1 / 2
  },
  two: {
    gridColumn: 2 / 3,
    gridRow: 1 / 2
  },
  three: {
    gridColumn: 1 / 2,
    gridRow: 2 / 3
  },
  four: {
    gridColumn: 2 / 3,
    gridRow: 2 / 3
  },

};

class DemoContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <div style={styles.wrapper}>
        <div style={styles.one}><img src={this.props.img1} style={picStyle}/></div>
        <div style={styles.two}><img src={`data:image/png;base64, ${this.props.diffImg}`} style={picStyle}/></div>
        <div style={styles.three}><img src={this.props.img2} style={picStyle}/></div>
        <div style={styles.four}>
          <SpaceThreshold percentOccupied={this.props.percentOccupied} />
        </div>
      </div>
    )
  }
}

export default DemoContent;




