import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from 'react-draggable';
import BackgroundGrid from './BackgroundGrid';
import GraphNode from './GraphNode';

class App extends Component {
  render() {
    return (
      <>
        <BackgroundGrid>
          <GraphNode />

        </BackgroundGrid>
      </>

    );
  }
}

export default App;
