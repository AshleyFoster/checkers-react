import React, { Component } from 'react';
import "./board.scss";
import io from 'socket.io-client'

export default class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: [],
      connected: false,
    };
  }
  componentDidMount() {
    this.socket = io('http://localhost:3001')
    this.socket.on('connect', () => {
      this.setState({ connected: true })
    })
  }

  render() {
    return (
      <div className="boardContainer">
        {this.state.connected.toString() === true}
        <h1 className="playerOne">Player 1</h1>
      </div>
    )
  }
}
