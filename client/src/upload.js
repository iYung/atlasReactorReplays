import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Button,
  Icon,
  Image,
  List,
  Input
} from 'semantic-ui-react'

class DefaultPage extends Component {
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content='Upload a New Replay'
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
          <input type="file" id="input" style={{ textAlign: "center", display: "none"}} onChange={this.props.onChange}/>
          <Button as='a' primary size='large' onClick={this.props.uploadButtonPress}>
          Select an .arr file
          <Icon name='right arrow' />
          </Button>
      </Segment>
       <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Where Can I Find My Replays?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  There should be a folder called "Live" within your installation of Atlas Reactor. Inside, there should be another folder called "Replays". All your replays will be in there as .arr files.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  shape="rounded"
                  size='large'
                  src={require('./images/replaysFolder.png')}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

class UploadForm extends Component {
  
  copyToClipboard() {
    document.getElementById("sharingLink").select();
    document.execCommand('copy');
  }
  
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Input type='text' placeholder="Name your replay here" id="replayName" style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}>
        </Input>
        <br/>
        <Button as='a' primary size='large' download="file.arr" href={'data:text/plain;charset=utf-8,' + encodeURIComponent("HI")}>
        Upload Replay
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


class Upload extends Component {
  
  onChange = () => {
    var f = document.getElementById("input").files[0];
    var r = new FileReader();
    var self = this;
    r.onload = function(e) {
      try {
        var data = JSON.parse(JSON.parse(r.result)["m_teamInfo_Serialized"]);
        alert(data["TeamPlayerInfo"]);
        self.setState({fileChosen: true});
      } catch (error) {
        alert("Invalid file was uploaded!");
      }
    }
    r.readAsText(f);
  }
  
  uploadButtonPress () {
    document.getElementById("input").click();
  }
  
  constructor(props) {
    super(props);
    this.state = {
        fileChosen: false
    };
  }
  
  render() {
    if (this.state.fileChosen) {
      return (<UploadForm />);
    } else {
      return (<DefaultPage onChange={this.onChange} uploadButtonPress={this.uploadButtonPress}/>);
    }
  }
}

export default Upload;
