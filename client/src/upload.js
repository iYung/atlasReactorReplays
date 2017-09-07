import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Button,
  Icon,
  Image,
  List,
  Input,
  Label
} from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

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
  
  //upload file
  upload = () => {
    const players = this.props.team1.concat(this.props.team2);
    const name = document.getElementById("replayName").value;
    if (!name || name === "") {
      alert("Please enter a value.");
    } else if (/^[a-z0-9]*$/.test(name) === false) {
      alert("Please enter a name with only lower case letters.");
    } else {
      Axios.post('/api/replay/', Qs.stringify({ 'map': this.props.map, 'name': name, 'players': players }))
        .then(res => {
          if (res.data.success) {
            
          } else {
            alert (res.data.error);
          }
        });
    }
  }
  
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Input labelPosition='right' type='text' placeholder="Name your replay here" id="replayName" style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}>
          <input/>
          <Label>.arr</Label>
        </Input>
        <br/>
        <Button as='a' primary size='large' onClick={this.upload} >
        Upload Replay
        </Button>
      </Segment>
       <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='top'>
          <Grid.Row>
              <Grid.Column width={5}>
                <Header as='h3' style={{ fontSize: '2em' }}>Team 1</Header>
                <List>
                  { this.props.team1.map((player) => (
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
                  { this.props.team2.map((player) => (
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
                  {this.props.map}
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
        var mapData = JSON.parse(JSON.parse(r.result)["m_gameInfo_Serialized"])["GameConfig"]["Map"];
        var playerData = JSON.parse(JSON.parse(r.result)["m_teamInfo_Serialized"])["TeamPlayerInfo"];
        var team1 = []; var team2 = [];
        for (var i = 0; i < 8; i++) {
          var team = playerData[i]["TeamId"];
          var player = { handle: playerData[i]["Handle"], char: playerData[i]["CharacterInfo"]["CharacterType"], team: team};
          if (team < 1) {
            team1.push(player);
          } else {
            team2.push(player);
          }
        }
        self.setState({fileChosen: true, map: mapData, team1: team1, team2: team2});
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
      return (<UploadForm map={this.state.map} team1={this.state.team1} team2={this.state.team2}/>);
    } else {
      return (<DefaultPage onChange={this.onChange} uploadButtonPress={this.uploadButtonPress}/>);
    }
  }
}

export default Upload;
