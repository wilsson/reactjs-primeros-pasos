import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {name:'Ganimedes'};
  }  
  render(){
    return <div>My Component {this.state.name}</div>;
  }
};

ReactDOM.render(
  <MyComponent />,
  document.getElementById('container')
);