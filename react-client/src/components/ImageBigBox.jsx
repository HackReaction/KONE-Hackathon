import React, { Component } from 'react'

import SeanImgBox from './SeanImgBox.jsx';
import JerryImgBox from './JerryImgBox.jsx';

const someheight = {
  height: '96%',
}

const someStyle = { display: 'inline-block' }

export default class ImageBigBox extends Component {
  render() {
    return (
      <div style={someheight}>
        <SeanImgBox style={someStyle}/>
        <JerryImgBox style={someStyle}/>
      </div>
    )
  }
}
