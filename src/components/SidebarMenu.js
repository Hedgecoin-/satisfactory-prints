import React, { Component } from 'react'
import { Sidebar, Menu } from 'semantic-ui-react';

import SidebarItem from './SidebarItem';

class SidebarMenu extends Component {
  state = {
    visible: true,
  }

  handleSidebarHide = () => this.setState({ visible: false })
  handleSidebarOpen = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state
    const { children } = this.props
    return (

      <div>
        <Sidebar.Pushable>
          <Sidebar as={Menu}
            animation='push'
            icon='labeled'
            inverted
            vertical
            visible={visible}
            width='thin'
          >
            <SidebarItem name='Iron Node' />
            <SidebarItem name='Miner' />
            <SidebarItem name='Smelter' />
            <SidebarItem name='Constructor' />
          </Sidebar>

          <Sidebar.Pusher>
            <Menu fixed='top'>
              {
                visible &&
                <Menu.Item onClick={this.handleSidebarHide}>
                  Close
                </Menu.Item>
              }
              {
                !visible &&
                <Menu.Item onClick={this.handleSidebarOpen}>
                  Open
                </Menu.Item>
              }
            </Menu>


            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SidebarMenu