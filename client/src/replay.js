import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Button,
  List,
  Image
} from 'semantic-ui-react'

class Replay extends Component {
  
  onChange () {
    var f = document.getElementById("input").files[0];
    var r = new FileReader();
    r.onload = function(e) {
      try {
        var data = JSON.parse(JSON.parse(r.result)["m_teamInfo_Serialized"]);
        alert(data["TeamPlayerInfo"]);
      } catch (error) {
        alert("Invalid file was replayed!");
      }
    }
    r.readAsText(f);
  }
  
  replayButtonPress () {
    document.getElementById("input").click();
  }
  
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content='Replay Title'
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
          <Button as='a' primary size='large'>
          Download
          </Button>
      </Segment>
       <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='top'>
          <Grid.Row>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '2em' }}>Team 1</Header>
                <List>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '2em' }}>Team 2</Header>
                <List>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <Image avatar src={require('./images/blackburn.png')} />
                    <List.Content>
                      <List.Header>Blackburn</List.Header>
                      <List.Description>disasterPony#0214</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>Game Map</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Reactor_Deathmatch
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Date Uploaded</Header>
                <p style={{ fontSize: '1.33em' }}>
                  May 5, 2017
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Replay;
