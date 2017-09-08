import React, { Component } from 'react';
import {
  Menu,
  Segment
} from 'semantic-ui-react'
import {
  Link
} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
            <Segment basic inverted style={{marginBottom: 0}}>
              <Menu inverted pointing secondary>
                <Link to="/">
                  <Menu.Item name='home' active={this.props.page==="home"} onClick={this.props.handleItemClick}/>
                </Link>
                <Link to="/browse">
                  <Menu.Item name='browse' active={this.props.page==="browse"} onClick={this.props.handleItemClick}/>
                </Link>
                <Link to="/upload">
                  <Menu.Item name='upload' active={this.props.page==="upload"} onClick={this.props.handleItemClick}/>
                </Link>
              </Menu>
            </Segment>
    );
  }
}

export default Nav;
