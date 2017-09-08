import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Button,
  List,
  Image,
  Input,
  Label
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
  
  //char is char number, img (0/1) dictates to get image name of char name
  getCharName(char, img){
    var charArray = {
      1:["Asana","asana"],
      2:["Zuki","zuki"],
      3:["Aurora","aurora"],
      4:["Gremolitions Inc","gremolitionsinc"],
      5:["Helio","helio"],
      6:["Rask","rask"],
      7:["PuP","pup"],
      8:["Lockwood","lockwood"],
      9:["Nix","nix"],
      10:["Garrison","garrison"],
      11:["Quark","quark"],
      12:["Kaigin","kaigin"],
      13:["Celeste","celeste"],
      14:["Grey","grey"],
      15:["Oz","oz"],
      17:["Rampart","rampart"],
      18:["Titus","titus"],
      19:["Elle","elle"],
      20:["Dr. Finn","drfinn"],
      21:["Juno","juno"],
      22:["Blackburn","blackburn"],
      23:["Orion","orion"],
      24:["Su-Ren","suren"],
      26:["Phaedra","phaedra"],
      27:["Brynn","brynn"],
      28:["Khita","khita"],
      31:["Tol-Ren","tolren"],
      33:["Meridian","meridian"],
      34:["Nev3","nev3"]
    }
    if (char > charArray.length) {
      var errorArray = ["Error fetching character", "error"];
      return errorArray[img];
    }
    return charArray[char][img];
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
            alert (res.data.success);
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
            content='Replay Title'
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
          <Button as='a' primary size='large' download="file.arr" href={'data:text/plain;charset=utf-8,' + encodeURIComponent("HI")}>
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
                  <List.Item>
                    <Image avatar src={require('./images/chars/'+this.getCharName(player.char,1)+'.png')} />
                    <List.Content>
                      <List.Header>{this.getCharName(player.char,0)}</List.Header>
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
                  <List.Item>
                    <Image avatar src={require('./images/chars/'+this.getCharName(player.char,1)+'.png')} />
                    <List.Content>
                      <List.Header>{this.getCharName(player.char,0)}</List.Header>
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
                  <Label as="a" color='blue' onClick={this.copyToClipboard}>Copy</Label>
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
