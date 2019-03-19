import React from 'react';
import { withGraphNodes } from '../contexts/GraphNodeProvider';
import GraphNode from './GraphNode';


const GraphNodeRenderer = ({ nodes, grid }) => {

  return (
    <>
      {
        nodes && nodes.length > 0 &&
        nodes.map((node, i) => (
          <GraphNode key={i} {...node} grid={grid} />
        ))
      }
    </>
  )
}

export default withGraphNodes(GraphNodeRenderer);