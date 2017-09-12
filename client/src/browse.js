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
                        <Popup key={this.props.getCharName(player.char,0)+player.handle} 
                          trigger={<Image avatar src={require('./images/chars/'+this.props.getCharName(player.char,1)+'.png')} />}
                          header={player.handle} 
                          content={this.props.getCharName(player.char,0)} 
                        />
                      ))}
                      </Table.Cell>
                      <Table.Cell>
                        { team2.map((player) => (
                        <Popup key={this.props.getCharName(player.char,0)+player.handle} 
                          trigger={<Image avatar src={require('./images/chars/'+this.props.getCharName(player.char,1)+'.png')} />}
                          header={player.handle} 
                          content={this.props.getCharName(player.char,0)} 
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
