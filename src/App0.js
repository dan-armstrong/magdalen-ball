import React, {Component} from 'react';
import AOS from 'aos';
import nextId from "react-id-generator";
import {Poem, Stanza} from './Poem'
import {Team, TeamMember} from './Team'

import './App.css';
import './aos.css';
import 'aos/dist/aos.css';

import dafyddLink from './images/Dafydd.jpg';


class App extends Component {
  componentDidMount() {
    AOS.init({offset: 0, delay: 0, duration: 300})
  }

  render() {
    return (
      <div>
        <Title anchor="#TitleAnchor"/>

        <Poem>
          <Stanza>
            <p id="TitleAnchor"> I heard in Addison’s Walk a bird sing clear: <br/>
                This year the summer will come true. This year. This year. </p>
          </Stanza>
          <Stanza>
            <p> This year time’s nature will no more defeat you, <br/>
                Nor all the promised moments in their passing cheat you. </p>
          </Stanza>
          <Stanza>
            <p> This year, this year, as all these flowers foretell, <br/>
                We shall escape the circle and undo the spell. </p>
          </Stanza>
          <Stanza>
            <p> Often deceived, yet open once again your heart. <br/>
                Quick quick, quick, quick – the gates are drawn apart. </p>
          </Stanza>
          <Stanza>
            <p> C. S. LEWIS </p>
          </Stanza>
        </Poem>

        <Team>
          <TeamMember name="Dan Armstrong" title="IT" email="dan@magdalenball.com"/>
          <TeamMember name="Dan Armstrong" title="IT" email="dan@magdalenball.com"/>
          <TeamMember name="Dan Armstrong" title="IT" email="dan@magdalenball.com"/>
        </Team>
      </div>
    );
  }
}


class StuckTitle extends Component {
  constructor(props) {
    super(props);
    this.id = nextId();
    console.log(this.id);
  }

  render() {
    return (
      <div className="Title">
        <h1 className="TitleText" data-aos="title-off" data-aos-anchor={this.props.anchor}
            data-aos-anchor-placement="top-bottom" data-aos-duration="600">
          MAGDALEN BALL
        </h1>
      </div>
    );
  }
}

class Tickets extends Component {
  render() {
    return (
      <div className="TicketsContainer">
      </div>
    );
  }
}

export default App;
