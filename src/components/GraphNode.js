import React from 'react';
import Draggable from 'react-draggable';

import styled from 'styled-components'
import { NodeImageFromName } from '../utils/utils'


const NodeContainer = styled.div.attrs(({ nodeName }) => ({
  backgroundImageUrl: NodeImageFromName(nodeName)
}))`
  position: absolute;
  text-align: center;
  width: 60px;
  height: 80px;
  border: 1px solid #999;
  cursor: pointer;
  background-color: #fff;
  background-image: url(${props => props.backgroundImageUrl});
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
`

const GraphNode = ({ x, y, name, grid }) => {
  console.log(y);
  return (
    <Draggable
      grid={grid}
      defaultPosition={{ x: x, y: y }}
    >
      <NodeContainer nodeName={name}>
      </NodeContainer>
    </Draggable>
  )
}

export default GraphNode;