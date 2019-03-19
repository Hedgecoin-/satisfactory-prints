import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import Draggable from 'react-draggable';
import { withGraphNodes } from '../contexts/GraphNodeProvider';

class SidebarItem extends Component {
  state = {
    x: 0,
    y: 0,
  }

  createGraphNodeAtPosition = (e, n) => {
    console.log(e, n)
    const { name, createNode } = this.props

    let grid = 10;
    let x = FitToGrid(e.offsetX, grid);
    let y = FitToGrid(e.offsetY, grid);

    createNode({
      x: x,
      y: y,
      name: name,
    })
  }

  render() {
    const { x, y } = this.state
    const { name } = this.props;

    return (
      <Draggable onStop={this.createGraphNodeAtPosition} position={{ x: x, y: y }}>
        <Menu.Item>
          {name}
        </Menu.Item>
      </Draggable>
    )
  }
}

export default withGraphNodes(SidebarItem);


function FitToGrid(n, grid) {
  let halfGrid = (grid / 2) | 0;
  let remainder = n % grid;

  if (remainder > halfGrid) {
    return n + (grid - remainder);
  }
  else {
    return n - remainder;
  }
}