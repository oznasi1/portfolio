import React, { Component } from 'react';
import './Projects.css';
import CardTaki from './CardTaki';
import CardAutomation from './CardAutomation';
import CardGc4u from './CardGc4u';
import CardPortfolio from './CardPortfolio';
import ResponsivePlayer from './ResponsivePlayer';


class Projects extends Component {

	constructor(props) {
		super(props);
		this.handlePlayClick = this.handlePlayClick.bind(this);
		this.state = {isPlayingVideo:false,url:''} 
	  }
	
	  handlePlayClick(url){
		this.setState({isPlayingVideo:true,url:url});
	}



	render() {
		if(this.state.isPlayingVideo){
			return(
				<div className="wrapper-play">
				<ResponsivePlayer url={this.state.url}/>
				<button type="button" class="btn" onClick={()=>this.setState({isPlayingVideo:false})}>Close video</button>	
				</div>				
			)
		}
		else{
			return (
				<div name="projects">
					<h3>My Projects</h3>
					<br />
					<div className="card-columns">
						<CardTaki/>
						<CardAutomation handleClick={this.handlePlayClick}/>
						<CardPortfolio/>
						<CardGc4u handleClick={this.handlePlayClick}/>
					</div>
				</div>
			);
		}
		
	}
}

export default Projects;
