import React, {Component} from 'react';
import AOS from 'aos';
import MailchimpSubscribe from "react-mailchimp-subscribe"

import {Poem, Stanza} from './Poem'
import Team from './Team'
import Page from './Page'
import About from './About'
import Tickets from './Tickets'
import Sponsors from './Sponsors'
import Questions from './Questions'

import './App.css';
import './aos.css';
import 'aos/dist/aos.css';

import nbLink from './images/NBBlack.png';

class App extends Component {
  componentDidMount() {
    AOS.init({offset: 0, delay: 0, duration: 300})
  }

  render() {
    return (
      <>
        <Landing/>
        <Sponsors/>
        <About/>
        <Tickets/>
        <Questions/>
        <Team/>
        <Footer/>
      </>
    );
  }
}

class Landing extends Component {
  render() {
    return (
      <Page>
        <div className="Landing">
        <NewBuildings/>
          <h1 className="Title">
            MAGDALEN BALL
          </h1>
        </div>
      </Page>
    );
  }
}


class NewBuildings extends Component {
  render() {
    return (
      <img className="NewBuildings" src={nbLink} alt={"New Buildings"}/>
    );
  }
}



class Footer extends Component {
  render() {
    return (
      <div className="Footer row justify-content-center">
        <div className="col">
          2019 Magdalen Ball Committee
        </div>
        <div className="col">
          Magdalen College, High Street, Oxford, OX1 4AU
        </div>
        <div className="col Subscribe">
          <MailchimpSubscribe
            url={"https://magdalenball.us4.list-manage.com/subscribe/post?u=391e3e7605c9abbf41de699dd&amp;id=4715bb18dc"}
            render={({ subscribe, status, message }) => (
              <SubmitForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      </div>
    );
  }
}



const SubmitForm = ({ status, message, onValidated }) => {
  let email, name;
  console.log(status);
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className={status}>
      <input ref={node => (email = node)} type="email" placeholder="Email"/>
      <button onClick={submit}>Subscribe</button>
    </div>
  );
};


export default App;
