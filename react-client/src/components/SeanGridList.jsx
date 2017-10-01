import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    margin: '2% auto',
    marginLeft: '5%'
  },
  gridList: {
    width: '90%',
    height: '100%',
  },
};

const tilesData = [
  {
    img: '/static/beforeTurtle.jpeg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '/static/beforeTurtle.jpeg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '/static/beforeTurtle.jpeg',
    title: 'Tasty burger',
    author: 'pashminu',
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const SeanGridList = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={300}
      style={styles.gridList} 
      cols={2}
      padding={10}
    >
      {tilesData.map((tile, idx) => (
        <GridTile
          key={idx}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default SeanGridList;