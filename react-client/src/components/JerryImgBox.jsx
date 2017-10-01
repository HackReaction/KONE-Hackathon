import React, { Component } from 'react'

const jerryBoxStyle = {
  width: '47%',
  height: '100%',
  margin: '1%',
  // width: '48%',
  // height: '98%',
  border: '1px dotted red',
  display: 'inline-block',
}

export default class JerryImgBox extends Component {
  render() {
    return (
      <div style={jerryBoxStyle}>
        <h1>Jerry Box</h1>
      </div>
    )
  }
}
