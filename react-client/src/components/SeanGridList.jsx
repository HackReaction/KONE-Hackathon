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
    margin: '2% auto'
  },
  gridList: {
    width: 300,
    height: 350,
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
  }
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const SeanGridList = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList} 
      cols={1}
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