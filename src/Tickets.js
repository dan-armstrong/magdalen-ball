import React, {Component} from 'react';

import './Tickets.css';
import Page from './Page'


class Tickets extends Component {
  render() {
    const studentText = "You and a guest will experience Cambridge’s best Ball, an unrivalled showcase of revelry—unlimited food and drink, a stunning fireworks display, and a myriad of entertainments from chart-topping stars to world-class comedians to the finest classical and jazz musicians.";
    const alumniText = "You and a guest will experience Cambridge’s best Ball, an unrivalled showcase of revelry—unlimited food and drink, a stunning fireworks display, and a myriad of entertainments from chart-topping stars to world-class comedians to the finest classical and jazz musicians.You and a guest will experience Cambridge’s best Ball, an unrivalled showcase of revelry—unlimited food and drink, a stunning fireworks display, and a myriad of entertainments from chart-topping stars to world-class comedians to the finest classical and jazz musicians.";
    const generalText = "One of the most sought after tickets to be had in May Week. You and a guest will experience Cambridge’s best Ball, an unrivalled showcase of revelry—unlimited food and drink, a stunning fireworks display, and a myriad of entertainments from chart-topping stars to world-class comedians to the finest classical and jazz musicians.";
    return (
      <div className="Tickets row justify-content-center">
        <Ticket title="ALUMNI" price="£100" side="left">
          {studentText}
        </Ticket>
        <Ticket title="STUDENT" price="£120">
          {alumniText}
        </Ticket>
        <Ticket title="GENERAL" price="£110" side="right">
          {generalText}
        </Ticket>
      </div>
    );
  }
}


class Ticket extends Component {
  render() {
    return (
      <div className={"TicketContainer col-md-4 col-sm-10 col-xs-11 " + this.props.side}>
        <div className="Ticket">
          <div className="TicketTitle">
            {this.props.title}
          </div>
          <div className="TicketInfoContainer">
            <div className="TicketInfo">
              {this.props.children}
            </div>
          </div>
          <div className="TicketPrice">
            {this.props.price}
          </div>
        </div>
      </div>
    );
  }
}

export default Tickets
