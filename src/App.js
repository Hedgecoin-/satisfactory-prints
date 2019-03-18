import React, { Component } from 'react';
import './App.css';
import BackgroundGrid from './BackgroundGrid';
import SidebarMenu from './components/SidebarMenu';
import GraphNodeProvider from './contexts/GraphNodeProvider';
import GraphNodeRenderer from './components/GraphNodeRenderer';

class App extends Component {
  render() {
    return (
      <>
        <GraphNodeProvider>
          <SidebarMenu>
            <BackgroundGrid>
              <GraphNodeRenderer />
            </BackgroundGrid>
          </SidebarMenu>
        </GraphNodeProvider>
      </>
    );
  }
}

export default App;
