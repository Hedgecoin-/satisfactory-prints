import React from 'react';
import Draggable from 'react-draggable';


const GraphNode = () => (
  <Draggable grid={[10, 10]} >
    <div style={{
      width: 60,
      height: 80,
      border: '1px solid #999',
      cursor: 'pointer',
      backgroundColor: '#fff',
    }}>
      Iron Node
    </div>
  </Draggable>
)

export default GraphNode;