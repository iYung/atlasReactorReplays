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
import Axios from 'axios';

class Browse extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        replays: [],
    };
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
      34:["Nev3","nev3"],
      35:["Isadora","isadora"]
    }
    if (char > charArray.length) {
      var errorArray = ["Error fetching character", "error"];
      return errorArray[img];
    }
    return charArray[char][img];
  }
  
  goToReplay(name){
    window.location.replace('/replay/'+name);
  }
  
  search = () => {
    const self = this;
    const namesearch = document.getElementById("searchInput").value;
    Axios.get('/api/search/' + encodeURIComponent(namesearch))
        .then(res => {
          self.setState({replays: res.data});
        });
  }
  
  componentWillMount() {
    const self = this;
    Axios.get('/api/replay/')
        .then(res => {
          self.setState({replays: res.data});
        });
  }
  
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content='Browse Replays'
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
        <Input id="searchInput"
          action={{ color: 'blue', labelPosition: 'right', icon: 'search', content: 'Search', onClick: this.search }}
          placeholder='Enter a Trion Tag'
        />
      </Segment>
       <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <Grid.Column width={16}>
              
                <Table celled selectable textAlign="center">
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Replay Name</Table.HeaderCell>
                      <Table.HeaderCell>Team 1</Table.HeaderCell>
                      <Table.HeaderCell>Team 2</Table.HeaderCell>
                      <Table.HeaderCell>Map</Table.HeaderCell>
                      <Table.HeaderCell>Upload Date</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                  { [...this.state.replays].reverse().map((replay) => {
                      const team1 = []; const team2 = [];
                      replay.players.forEach(function(player){
                        var team = player.team;
                        var playerData = { handle: player.handle, char: player.char, team: team };
                        if (team < 1) {
                          team1.push(playerData);
                        } else {
                          team2.push(playerData);
                        }
                      });
                      
                      const date = new Date(replay.time); 
                      const d = date.toDateString()
                      
                      return (
                    <Table.Row key ={replay.name} onClick={() => this.goToReplay(replay.name)}>
                      <Table.Cell>{replay.name}</Table.Cell>
                      <Table.Cell>
                      { team1.map((player) => (
                        <Popup key={this.getCharName(player.char,0)+player.handle} 
                          trigger={<Image avatar src={require('./images/chars/'+this.getCharName(player.char,1)+'.png')} />}
                          header={player.handle} 
                          content={this.getCharName(player.char,0)} 
                        />
                      ))}
                      </Table.Cell>
                      <Table.Cell>
                        { team2.map((player) => (
                        <Popup key={this.getCharName(player.char,0)+player.handle} 
                          trigger={<Image avatar src={require('./images/chars/'+this.getCharName(player.char,1)+'.png')} />}
                          header={player.handle} 
                          content={this.getCharName(player.char,0)} 
                        />
                      ))}
                      </Table.Cell>
                      <Table.Cell>{replay.map}</Table.Cell>
                      <Table.Cell>{d}</Table.Cell>
                    </Table.Row>
                  );})}
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
