import React, { Component } from 'react'

const seanBoxStyle = {
  width: '47%',
  height: '100%',
  margin: '1%',
  marginLeft: '1.5%',
  border: '1px dotted red',
  display: 'inline-block',
}

export default class SeanImgBox extends Component {
  render() {
    return (
      <div style={seanBoxStyle}>
        <h1>Sean Box</h1>
      </div>
    )
  }
}
