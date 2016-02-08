import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps ',nextProps.name);
    console.log('props ',this.props.name);
  }
  render() {
    return <div>Bar {this.props.name}!</div>;
  }
}

ReactDOM.render(<MyComponent name="jupiter" />, document.getElementById('container'));

ReactDOM.render(<MyComponent name="saturno" />, document.getElementById('container'));

ReactDOM.render(<MyComponent name="ganimedes" />, document.getElementById('container'));