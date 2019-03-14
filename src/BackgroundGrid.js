import React from 'react';

const BackgroundGrid = ({ children }) => (
  <div style={{
    height: '100vh',
    backgroundSize: '80px 80px',
    backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)'
  }}>
    {children}
  </div>
)

export default BackgroundGrid;