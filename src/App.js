import React, { Component } from 'react';
import './App.css';

import Board from './Board';

class App extends Component {
  state = {
    showBoard: false,
  }

  constructor(props) {
    super(props)

    this.showBoard = this.showBoard.bind(this)
  }

  showBoard() {
    this.setState({ showBoard: true })
  }

  render() {
    const { showBoard } = this.state;

    if (showBoard) {
      return <Board />
    } else {
      return (
        <div className="App">
          <h1 className="logo">Checkers</h1>
          <button onClick={this.showBoard}>
            Start a Game
          </button>
        </div>
      );
    }
  }
}

export default App;
