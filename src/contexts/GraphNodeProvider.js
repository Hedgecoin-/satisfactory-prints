import React, { Component } from 'react';

export const GraphNodeContext = React.createContext('node');

export default class GraphNodeProvider extends Component {

  state = {
    nodes: [],
    grid: [10, 10],
    createNode: node => this.setState(prevState => ({ nodes: [...prevState.nodes, node] }))
  }


  render() {
    return (
      <GraphNodeContext.Provider value={this.state}>
        {this.props.children}
      </GraphNodeContext.Provider>
    )
  }
}


export function withGraphNodes(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <GraphNodeContext.Consumer>
          {(context) => <WrappedComponent nodes={context.nodes} createNode={context.createNode} grid={context.grid} {...this.props} />}
        </GraphNodeContext.Consumer>
      )
    }
  }
}