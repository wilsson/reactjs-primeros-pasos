import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props){
    super(props);
    console.log('El componente aun no está disponible en el DOM');
  }

  componentDidMount(){
    console.log('ya se a montado mi componente');
  }

  render(){
    return <div>Soy un component</div>
  }
}

ReactDOM.render(
  <MyComponent />, 
  document.getElementById('container')
);