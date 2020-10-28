// import React from 'react'
// import largeNumber from 'large-number-yunhao'
// import './search.less'
// import logo from '../images/logo.jpg'
const React = require('react');
const largeNumber = require('large-number-yunhao');
const logo = require('../images/logo.jpg').default;
require('./search.less');

class Search extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      Text: null,
    };
  }

  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumber('1', '999');
    return (
            <div className="search-text">
                {
                    Text ? <Text /> : null
                }
                Search Component
                {
                    addResult
                }
                <img src={ logo } onClick={this.loadComponent.bind(this)} />
            </div>
    );
  }
}
module.exports = <Search/>;
