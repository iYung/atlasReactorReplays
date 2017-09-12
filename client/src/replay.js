import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Button,
  List,
  Image,
  Input,
  Label,
  Popup
} from 'semantic-ui-react'
import Axios from 'axios';

class Replay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        players: [],
        map: "",
        name: "",
        date: ""
    };
  }
  
  copyToClipboard() {
    document.getElementById("sharingLink").select();
    document.execCommand('copy');
  }
  
  componentWillMount() {
    const name = window.location.pathname.replace("/replay/", "");
    const self = this;
    Axios.get('/api/replay/' + name)
        .then(res => {
          if (res.data.success) {
            const date = new Date(res.data.time); 
            const d = date.toDateString()
            self.setState({name: res.data.name, players: res.data.players, map: res.data.map, date: d });
          } else {
            alert (res.data.error);
            window.location.replace('/upload');
          }
        });
  }
  
  render() {
    
    const team1 = []; const team2 = [];
    this.state.players.forEach(function(player){
      var team = player.team;
      var playerData = { handle: player.handle, char: player.char, team: team };
      if (team < 1) {
        team1.push(playerData);
      } else {
        team2.push(playerData);
      }
    });
    
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content={this.state.name+'.arr'}
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
          <Button as='a' primary size='large' href={'https://s3-us-west-2.amazonaws.com/arreplays/' + this.state.name + '.arr'}>
          Download
          </Button>
      </Segment>
       <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='top'>
          <Grid.Row>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '2em' }}>Team 1</Header>
                <List>
                { team1.map((player) => (
                  <List.Item key={this.props.getCharName(player.char,1) + "_" + player.handle}>
                    <Image avatar src={require('./images/chars/'+this.props.getCharName(player.char,1)+'.png')} />
                    <List.Content>
                      <List.Header>{this.props.getCharName(player.char,0)}</List.Header>
                      <List.Description>{player.handle}</List.Description>
                    </List.Content>
                  </List.Item>
                ))}
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '2em' }}>Team 2</Header>
                <List>
                { team2.map((player) => (
                  <List.Item key={this.props.getCharName(player.char,1) + "_" + player.handle}>
                    <Image avatar src={require('./images/chars/'+this.props.getCharName(player.char,1)+'.png')} />
                    <List.Content>
                      <List.Header>{this.props.getCharName(player.char,0)}</List.Header>
                      <List.Description>{player.handle}</List.Description>
                    </List.Content>
                  </List.Item>
                ))}
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as='h3' style={{ fontSize: '2em' }}>Game Map</Header>
                <p style={{ fontSize: '1.33em' }}>
                  {this.state.map}
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Date Uploaded</Header>
                <p style={{ fontSize: '1.33em' }}>
                  {this.state.date}
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Sharing Link</Header>
                    <Input labelPosition='right' type='text' defaultValue={window.location.href} id="sharingLink">
                      <input/>
                      <Popup trigger={
                        <Label as="a" color='blue' onClick={this.copyToClipboard}>Copy</Label>
                      }
                      position="top center"
                      on='click'
                      content={"Copied!"} 
                    />
                    </Input>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Replay;
