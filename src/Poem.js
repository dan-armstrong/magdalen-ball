import React, {Component} from 'react';

import './Poem.css';


export class Poem extends Component {
  render() {
    return (
      <div className="Poem">
        <div className="PoemBlocker"/>
        <div className="PoemFader Top"/>
        {this.props.children}
        <div className="PoemFader Bottom"/>
      </div>
    );
  }
}


export class Stanza extends Component {
  render() {
    return (
      <div className="Stanza">
        {this.props.children}
      </div>
    );
  }
}
