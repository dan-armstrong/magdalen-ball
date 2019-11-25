import React, {Component} from 'react';

import './Page.css';


class Page extends Component {
  render() {
    return (
      <div className="PageContainer row">
        <div className="Page my-auto">
          {this.props.children}
        </div>
      </div>
    );
  }
}


export default Page
