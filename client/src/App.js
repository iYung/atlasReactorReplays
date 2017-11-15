import React, { Component } from 'react';
import {
  Header,
  Image,
  Segment,
  Button,
  Icon,
  Grid
} from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import Upload from './upload'
import Browse from './browse'
import Nav from './nav'
import Replay from './replay'
import Desktop from './desktop'

const Banner = () => { 
  return <h1 style={{ color: 'white', fontSize: '4em', fontWeight: 'normal', paddingBottom: 0, textAlign: "center"}}>
      <Image src={require('./images/logo.png')} style={{paddingBottom: '1.5em'}} inline size='tiny'/>R Replays
    </h1> }

class Home extends Component {

render(){
    return <div> <Segment inverted basic style={{ margin: 0,  textAlign: "center", paddingBottom: '2em' }}>
      
        <Banner/>
        <Header
                as='h1' inverted
                content='Share Your Favorite Atlas Reactor Games'
                style={{ fontSize: '2em', fontWeight: 'normal', paddingBottom: '.5em', textAlign: "center"}}
              />
        <Link to="/upload">
        <Button as='a' primary size='large' name='upload' onClick={this.props.handleItemClick}>
          Upload a replay
          <Icon name='right arrow' />
        </Button>
        </Link>
      
      </Segment> 
      
      <Segment style={{ padding: '5em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Welcome to AR Replays</Header>
                <p style={{ fontSize: '1.33em' }}>
                  AR Replays is a replay sharing website for Atlas Reactor. Anyone can upload their Atlas Reactor replays to share with friends and family. Replays will be stored for 30 days.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>How do you watch replays?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Replays can be watched ingame using our desktop client or the chat command /playreplay followed by the name of the replay. The replay must be in the Replays folder.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  shape="rounded"
                  size='large'
                  src={require('./images/playReplay.png')}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        
      </div> }}

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        page: "home"
    };
  }
  
  handleItemClick = (e, { name }) => this.setState({ page: name })
  
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
      16:["",""],
      17:["Rampart","rampart"],
      18:["Titus","titus"],
      19:["Elle","elle"],
      20:["Dr. Finn","drfinn"],
      21:["Juno","juno"],
      22:["Blackburn","blackburn"],
      23:["Orion","orion"],
      24:["Su-Ren","suren"],
      25:["",""],
      26:["Phaedra","phaedra"],
      27:["Brynn","brynn"],
      28:["Khita","khita"],
      29:["",""],
      30:["",""],
      31:["Tol-Ren","tolren"],
      32:["",""],
      33:["Meridian","meridian"],
      34:["Nev3","nev3"],
      35:["Isadora","isadora"],
      36:["",""],
      37:["Magnus","magnus"]
    }
    if (char > Object.keys(charArray).length + 1) {
      var errorArray = ["Error fetching character", "error"];
      return errorArray[img];
    }
    return charArray[char][img];
  }
    
  render() {
    return (
      <div>
        <Router>
          <div>
        
            <Nav page={this.state.page} handleItemClick={this.handleItemClick}/>
            
            <Segment basic style={{marginTop: 0, padding: 0}}>
              <div>
                <Route exact path="/" render={()=>(<Home handleItemClick={this.handleItemClick}/>)}/>
                <Route path="/browse" render={()=>(<Browse getCharName={this.getCharName}/>)}/>
                <Route path="/upload" render={()=>(<Upload getCharName={this.getCharName}/>)}/>
                <Route path="/desktop" render={()=>(<Desktop getCharName={this.getCharName}/>)}/>
                <Route path="/replay/:id" render={()=>(<Replay getCharName={this.getCharName}/>)}/>
              </div>
            </Segment>
          
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
