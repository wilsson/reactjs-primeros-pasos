import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    console.log('Before mount...');  
  }
  render(){
    return <div>My Component</div>
  }
}

ReactDOM.render(
  <MyComponent />, 
  document.getElementById('container')
);