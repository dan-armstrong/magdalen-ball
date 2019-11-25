import React, {Component} from 'react';

import './Team.css';
//ADD MAILING LIST

class Team extends Component {
  render() {
    return (
      <div className="Team">
        <TeamRow breaks="col-12 col-lg-10 col-xl-8">
          <TeamMember name="Arthur James" title="CHAIR" email="arthur@magdalenball.com" breaks="col-12 col-md-4"/>
          <TeamMember name="Mark Bäcker" title="VICE-CHAIR" email="mark@magdalenball.com" breaks="d-none d-xxs-inline col-6 col-md-4"/>
          <TeamMember name="Toby Morrison & Nils Lovegren" title="TREASURER" email="toby@magdalenball.com" breaks="col-12 col-xxs-6 col-md-4"/>
        </TeamRow>
        <TeamRow breaks="col-12 col-lg-10">
          <TeamMember name="Eden Smith & Kieran Jones" title="ADMINISTRATION LEAD" email="eden@magdalenball.com" breaks="col-12 col-xxs-6 col-md-4 col-xl-3"/>
          <TeamMember name="Lorenz Kipp" title="CREATIVE LEAD" email="lorenz@magdalenball.com" breaks="col-12 col-xxs-6 col-md-4 col-xl-3"/>
          <TeamMember name="Will Butler-Denby" title="OPERATIONS LEAD" email="william@magdalenball.com" breaks="col-12 col-xxs-6 col-md-4 col-xl-3"/>
          <TeamMember name="Tom Farmer" title="TICKETING" email="thomas@magdalenball.com"/>
          <TeamMember name="Rasmus Haure-Peterson" title="SPONSORSHIP" email="rasmus@magdalenball.com"/>
          <TeamMember name="George Rushton & Rupert Jackson" title="MUSIC" email="george@magdalenball.com"/>
          <TeamMember name="Rebecca Dunn & Libby Gower Isaac" title="ENTERTAINMENT" email="rebecca@magdalenball.com"/>
          <TeamMember name="Charlotte Smith" title="SECURITY" email="charlotte@magdalenball.com"/>
          <TeamMember name="Lizzie Craig & Christos Katsifis" title="FOOD" email="lizzie@magdalenball.com"/>
          <TeamMember name="Rachael Brown & Sophie Moles" title="DRINK" email="rachael@magdalenball.com"/>
          <TeamMember name="Alice Stubbings & Ruth Palethorpe" title="SITE" email="alice@magdalenball.com"/>
          <TeamMember name="Francesca Gardener & Dan Armstrong" title="MARKETING" email="francesca@magdalenball.com"/>
        </TeamRow>
      </div>
    );
  }
}


class TeamRow extends Component {
  render() {
    return (
      <div className={"TeamRow row " + this.props.breaks}>
        {this.props.children}
      </div>
    );
  }
}


class TeamMember extends Component {
  render() {
    return (
      <a className={"Member " + (this.props.breaks ? this.props.breaks : "d-none d-xxs-inline col-6 col-md-4 col-xl-3")} href={"mailto:" + this.props.email}>
        <div className="MemberTitle">
          {this.props.title}
        </div>
        <div className="MemberName">
          {this.props.name}
        </div>
        <div className="MemberEmail">
          {this.props.email}
        </div>
      </a>
    );
  }
}


export default Team;
