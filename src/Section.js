import React, {Component} from 'react';
import nextId from "react-id-generator";

import './Section.css';

class Section extends Component {
  constructor(props) {
    super(props);
    this.id1 = nextId();
    this.id2 = nextId();
  }

  render() {
    console.log(this.props.image);
    return (
      <div data-aos="section-on" data-aos-anchor={"#Anchor"+this.id2} data-aos-anchor-placement="bottom-bottom">
        <div className="SectionAnchor Top" id={"Anchor"+this.id1}/>
        <div className="SectionAnchor Bottom" id={"Anchor"+this.id2}/>
        <div className="Section row" data-aos="section-off" data-aos-anchor={"#Anchor"+this.id1} data-aos-anchor-placement="top-top">
          <SectionImage link={this.props.image} alt={this.props.alt}/>
          <SectionText>
            {this.props.children}
          </SectionText>
        </div>
      </div>
    );
  }
}


class SectionImage extends Component {
  render() {
    return (
      <img className="SectionImage col-5" src={this.props.link} alt={this.props.alt}/>
    );
  }
}


class SectionText extends Component {
  render() {
    return (
      <div className="SectionText col-7">
        {this.props.children}
      </div>
    );
  }
}


export default Section;
