import React, { Component } from 'react';
import Editor from 'for-editor';
export default class MarkDown extends Component {
	constructor() {
    super()
    this.state = {
      value: ''
    }
  }

  handleChange(value) {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state
    return <Editor value={value} onChange={this.handleChange.bind(this)} />
  }
}
