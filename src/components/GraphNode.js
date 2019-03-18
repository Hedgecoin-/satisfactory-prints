import React from 'react';
import Draggable from 'react-draggable';


const GraphNode = ({ x, y, name }) => {
  console.log(y);
  return (
    <Draggable
      grid={[10, 10]}
      defaultPosition={{ x: x, y: y }}
    >
      <div style={{
        position: 'absolute',
        width: 60,
        height: 80,
        border: '1px solid #999',
        cursor: 'pointer',
        backgroundColor: '#fff',
      }}>
        {name}
      </div>
    </Draggable>
  )
}

export default GraphNode;