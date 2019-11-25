import React, {Component} from 'react';

import './Questions.css';


class Questions extends Component {
  render() {
    return (
      <div className="Questions">
        <Question question="Wtf is a ball ???">
          sadlvjev advlwebv flqb weqw D;QWEFN QWEFKJNQ  few efe  e frwe f wrtg a f wef eg rwt g ae fqe grwrt  eq we wrt  eqrg wg qe rqe wt w eg weg wt wrt gw egr er wtg w gwrt.
        </Question>
        <Question question="Wtf is a ball ???">
          sadlvjev advlwebv flqb weqw D;QWEFN QWEFKJNQ  few efe  e frwe f wrtg a f wef eg rwt g ae fqe grwrt  eq we wrt  eqrg wg qe rqe wt w eg weg wt wrt gw egr er wtg w gwrt.
        </Question>
        <Question question="Wtf is a ball ???">
          sadlvjev advlwebv flqb weqw D;QWEFN QWEFKJNQ  few efe  e frwe f wrtg a f wef eg rwt g ae fqe grwrt  eq we wrt  eqrg wg qe rqe wt w eg weg wt wrt gw egr er wtg w gwrt.
        </Question>
      </div>
    );
  }
}


class Question extends Component {
  render() {
    return (
      <div className="QuestionContainer">
        <div className="Question">
          {this.props.question}
        </div>
        <div className="Answer col-8">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Questions
