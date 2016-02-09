import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  componentWillUpdate(){
    console.log('Update MyComponent');
  }
  render(){
    return <div>my Component {this.props.name}</div>
  }
}

ReactDOM.render(<MyComponent name="jupiter"/>,document.getElementById('container'));
ReactDOM.render(<MyComponent name="neptuno"/>,document.getElementById('container'));
