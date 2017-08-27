import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Button,
  Icon
} from 'semantic-ui-react'

class Upload extends Component {
  
  onChange () {
    var f = document.getElementById("input").files[0];
    var r = new FileReader();
    r.onload = function(e) {
      var data = JSON.parse(JSON.parse(r.result)["m_teamInfo_Serialized"]);
      alert(data["TeamPlayerInfo"]);
    }
    r.readAsText(f);
  }
  
  uploadButtonPress () {
    document.getElementById("input").click();
  }
  
  render() {
    return (
      <div>
      <Segment inverted basic style={{ margin: "0 auto",  textAlign: "center", paddingBottom: '2em' }}>
        <Header
            as='h1' inverted
            content='Upload a New Replay'
            style={{ fontSize: '3em', fontWeight: 'normal', textAlign: "center", paddingBottom: '.5em' }}
        />
          <input type="file" id="input" style={{ textAlign: "center", display: "none"}} onChange={this.onChange}/>
          <Button as='a' primary size='large' onClick={this.uploadButtonPress}>
          Select an .arr file
          <Icon name='right arrow' />
          </Button>
      </Segment>
       <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Where Can I Find My Replays?</Header>
                <p style={{ fontSize: '1.33em' }}>
                  There should be a folder called "Live" within your installation of Atlas Reactor. Inside, there should be another folder called "Replays". All your replays will be in there as .arr files.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Bananas That Can Dance</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Upload;