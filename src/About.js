import React, {Component} from 'react';

import './About.css';

import magdLink from './images/Magd.jpg';
import dafyddLink from './images/Dafydd.jpg';
import stonesLink from './images/Stones.jpg';

class About extends Component {
  render() {
    return (
      <div className="About justify-content-center">
        <AboutParagraph img={magdLink} title="ABOUT">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AboutParagraph>
        <AboutParagraph img={stonesLink} flip={true} title="ENTERTAINMENT">
          Magdalen is famed for booking some of the biggest acts around. The Rolling Stones (pictured playing at the '64 Ball), Fleetwood Mac, Pink Floyd and more recently Pharrell Williams have all played to sold-out crowds in Magdalen's beautiful quads. Watch our Facebook page for announcements on this year's headline act!
        </AboutParagraph>
        <AboutParagraph img={dafyddLink} title="FOOD & DRINK">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AboutParagraph>
        <AboutParagraph img={dafyddLink} flip={true} title="CHARITY">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </AboutParagraph>
      </div>
    );
  }
}


class AboutParagraph extends Component {
  render() {
    return (
      <div className="AboutParagraph row col-lg-11 justify-content-center">
        <AboutData small={true} title={this.props.title}>
          {this.props.children}
        </AboutData>

        {!this.props.flip && <img className="AboutImg col-11 col-xs-9 col-sm-8 col-md-6 col-xll-5" src={this.props.img} alt="About"/>}
        {!this.props.flip && <div className="d-none d-xll-inline col-1"/>}

        <AboutData small={false} title={this.props.title}>
          {this.props.children}
        </AboutData>

        {this.props.flip && <div className="d-none d-xll-inline col-1"/>}
        {this.props.flip && <img className="AboutImg col-11 col-xs-9 col-sm-8 col-md-6 col-xll-5 flipped" src={this.props.img} alt="About"/>}
      </div>
    );
  }
}


class AboutData extends Component {
  render() {
    return (
      <div className={"AboutData col-11 col-xs-9 col-sm-9 col-md-5 " + (this.props.small ? "d-md-none" : "d-none d-md-inline")}>
        <div className="AboutTitle">
          {this.props.title}
        </div>
        <div className="AboutText">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default About
