import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component{
  render(){
    return <div>Hello world!</div>
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('container')
);