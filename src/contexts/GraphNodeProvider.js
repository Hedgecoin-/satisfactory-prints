import React, { Component } from 'react';

export const GraphNodeContext = React.createContext('node');

export default class GraphNodeProvider extends Component {

  state = {
    nodes: [],
    createNode: node => this.setState(prevState => ({ nodes: [...prevState.nodes, node] }))
  }


  render() {
    console.log(this.state.nodes)
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
          {(context) => <WrappedComponent nodes={context.nodes} createNode={context.createNode} {...this.props} />}
        </GraphNodeContext.Consumer>
      )
    }
  }
}