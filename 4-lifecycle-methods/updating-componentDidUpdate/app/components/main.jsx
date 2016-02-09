import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  componentDidUpdate(prevProps,prevState){
    console.log('prevPros or prevState');
  }
  render(){
    return <div>my Component {this.props.name}</div>
  }
}

ReactDOM.render(<MyComponent name="jupiter"/>,document.getElementById('container'));
ReactDOM.render(<MyComponent name="neptuno"/>,document.getElementById('container'));
