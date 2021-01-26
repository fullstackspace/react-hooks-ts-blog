import React, { Component } from 'react';
import tabOne from './tabOne';
import './index.scss'
class ScrollTab extends Component {
  constructor(prop: any) {
    super(prop)
  }

  render() {
    return (
      <div>
        {
          React.createElement(tabOne)
        }
      </div>
    )
  }
}

export default ScrollTab