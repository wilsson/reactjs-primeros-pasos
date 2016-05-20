import React from 'react';
import ReactDOM from 'react-dom';

class Follower extends React.Component{
    constructor(props){
		super(props);
    }
    ClickMe(e){
        console.log(e.target,'-',this);
    	ReactDOM.unmountComponentAtNode(e.target);
    }
	render(){
		return <li onClick={this.ClickMe} className={this.props.className}>{this.props.children}</li>
    }
}
    
class GithubFollowers extends React.Component{
    constructor(props){
    	super(props);
    	this.state = {followers:[]};
    }
	componentWillMount() {  
    	fetch('https://api.github.com/users/wilsson/followers')
      		.then((response) => {
        	return response.json();
      	})
      	.then((followers) => {
        	this.setState({ followers: followers });
            console.log('->> followers',followers);
      	})
  	}
	render(){
        if(this.state.followers.length>0){
        	return <ul>{this.state.followers.map(function(follower){
                return <Follower id="seguidor" className={follower.login}><p>{follower.html_url}</p></Follower>
            })}</ul>
        }
        else{
            return <h1>Cargando seguidores!</h1>
        }
	}
}

ReactDOM.render(
	<GithubFollowers />,
    document.getElementById('container')
);