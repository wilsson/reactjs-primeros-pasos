import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  render(){
    return <div>MyComponent {this.props.name}</div>
  }
}

ReactDOM.render(
  <MyComponent name="Jupiter" />,
  document.getElementById('container')
);