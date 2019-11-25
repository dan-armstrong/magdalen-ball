import React, {Component} from 'react';

import './Sponsors.css';

import spon1Link from './images/Sponsor1.png';


class Sponsors extends Component {
  render() {
    return (
      <div className="Sponsors row justify-content-center col-md-11">
        <Sponsor link={spon1Link}/>
        <Sponsor link={spon1Link}/>
        <Sponsor link={spon1Link}/>
        <Sponsor link={spon1Link}/>
        <Sponsor link={spon1Link}/>
        <Sponsor link={spon1Link}/>
      </div>
    );
  }
}


class Sponsor extends Component {
  render() {
    return (
      <div className="Sponsor col-4 col-xs-3 col-sm-2">
        <img src={this.props.link} alt="Sponsor 1"/>
      </div>
    );
  }
}


export default Sponsors
