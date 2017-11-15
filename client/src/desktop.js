import React, { Component } from 'react';
import {
  Header,
  Image,
  Segment,
  Button,
  Grid
} from 'semantic-ui-react'

class Desktop extends Component {

render(){
    return <div> 
    <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content={"Desktop Client"}
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
          <Button as='a' primary size='large' href={'https://s3.amazonaws.com/arreplaysdesktop/atlasReactorReplaysDesktop.zip'}>
          Download
          </Button>
      </Segment>
      
      <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>What is the AR Replays Desktop Client?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  The AR Replays desktop client makes it easy to watch replays in Atlas Reactor. The client lists all replays in your replays folder and allows you to play them with a simple click.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>How do I install and use the desktop client?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Unzip the download to wherever you wish to keep the client. Click the .exe file inside to launch the client. Point the client to your replays folder, select a replay, and click play to start the replay in game. Atlas Reactor must be running for the replay to work.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  shape="rounded"
                  size='large'
                  src={require('./images/arReplayDesktop.png')}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        
      </div> }}
export default Desktop;