import React from 'react';
import ReactDOM from 'react-dom';
import '../../common';
import largeNumber from 'large-number-yunhao';
import './search.less';
import logo from '../images/logo.jpg';

class Search extends React.Component {
  constructor() {
    super();

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

ReactDOM.render(<Search/>, document.querySelector('#root'));
