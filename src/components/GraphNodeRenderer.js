import React from 'react';
import { withGraphNodes } from '../contexts/GraphNodeProvider';
import GraphNode from './GraphNode';


const GraphNodeRenderer = ({ nodes }) => {

  return (
    <>
      {
        nodes && nodes.length > 0 &&
        nodes.map((node, i) => (
          <GraphNode key={i} {...node} />
        ))
      }
    </>
  )
}

export default withGraphNodes(GraphNodeRenderer);