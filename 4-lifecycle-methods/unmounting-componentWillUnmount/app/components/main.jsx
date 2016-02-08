import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log('Mount');
  }
  componentWillUnmount(){
    console.log('Unmount');
  }
  render(){
    console.log('Rendering');
    return <div>I am component</div>
  }
}

class MyApp extends React.Component{
  constructor(pros){
    super(pros);
  }

  mount(){
    ReactDOM.render(<MyComponent />,document.getElementById('component'));
  }

  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('component'));
  }

  render(){
    return( 
      <div>
        <button onClick={this.mount.bind(this)}>Mount component</button>
        <button onClick={this.unmount.bind(this)}>Unmount component</button>
        <div id="component"></div>
      </div>
    )
  }
}

ReactDOM.render(<MyApp />, document.getElementById('container'));