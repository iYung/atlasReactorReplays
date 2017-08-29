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

const Banner = () => { 
  return <h1 style={{ color: 'white', fontSize: '4em', fontWeight: 'normal', paddingBottom: 0, textAlign: "center"}}>
      <Image src={require('./images/logo.png')} style={{paddingBottom: '1.5em'}} inline size='tiny'/>R Replays
    </h1> }

const Home = () => { return <div> <Segment inverted basic style={{ margin: 0,  textAlign: "center", paddingBottom: '2em' }}>
      
        <Banner/>
        <Header
                as='h1' inverted
                content='Share Your Favorite Atlas Reactor Games'
                style={{ fontSize: '2em', fontWeight: 'normal', paddingBottom: '.5em', textAlign: "center"}}
              />
        <Link to="/upload">
        <Button as='a' primary size='large'>
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
                  There should be a folder called "Live" within your installation of Atlas Reactor. Inside, there should be another folder called "Replays". All your replays will be in there as .arr files.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>How do you watch replays?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Replays can be watched ingame with the chat command /playreplay followed by the name of the replay. The replay must be in the Replays folder.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        
      </div> }

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
        
            <Nav/>
            
            <Segment basic style={{marginTop: 0, padding: 0}}>
              <div>
                <Route exact path="/" component={Home}/>
                <Route path="/browse" component={Browse}/>
                <Route path="/upload" component={Upload}/>
                <Route path="/replay/:id" component={Replay}/>
              </div>
            </Segment>
          
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
