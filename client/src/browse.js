import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Input,
  Table,
  Popup,
  Image
} from 'semantic-ui-react'

class Browse extends Component {
  
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content='Browse Replays'
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
        <Input
          action={{ color: 'blue', labelPosition: 'right', icon: 'search', content: 'Search' }}
          placeholder='Enter a Trion Tag'
        />
      </Segment>
       <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <Grid.Column width={16}>
              
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Replay Name</Table.HeaderCell>
                      <Table.HeaderCell>Team 1</Table.HeaderCell>
                      <Table.HeaderCell>Team 2</Table.HeaderCell>
                      <Table.HeaderCell>Map</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>FileName</Table.Cell>
                      <Table.Cell>
                        <Popup key={"Blackburn"} 
                          trigger={<Image src={require('./images/chars/blackburn.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Blackburn"} 
                        />
                        <Popup key={"Aurora"} 
                          trigger={<Image src={require('./images/chars/aurora.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Aurora"} 
                        />
                        <Popup key={"Zuki"} 
                          trigger={<Image src={require('./images/chars/zuki.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Zuki"} 
                        />
                        <Popup key={"Quark"} 
                          trigger={<Image src={require('./images/chars/quark.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Quark"} 
                        />
                        <Popup key={"Titus"} 
                          trigger={<Image src={require('./images/chars/titus.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Titus"} 
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <Popup key={"Blackburn"} 
                          trigger={<Image src={require('./images/chars/blackburn.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Blackburn"} 
                        />
                        <Popup key={"Aurora"} 
                          trigger={<Image src={require('./images/chars/aurora.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Aurora"} 
                        />
                        <Popup key={"Zuki"} 
                          trigger={<Image src={require('./images/chars/zuki.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Zuki"} 
                        />
                        <Popup key={"Quark"} 
                          trigger={<Image src={require('./images/chars/quark.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Quark"} 
                        />
                        <Popup key={"Titus"} 
                          trigger={<Image src={require('./images/chars/titus.png')} avatar />} 
                          header={"disasterPony#8909"} 
                          content={"Titus"} 
                        />
                      </Table.Cell>
                      <Table.Cell>Reactor_Deathmatch</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Browse;
