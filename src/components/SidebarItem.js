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
    createNode({
      x: e.offsetX,
      y: e.offsetY,
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