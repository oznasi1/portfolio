import React, { Component } from 'react';
import './Projects.css';
import CardTaki from './CardTaki';
import CardAutomation from './CardAutomation';
import CardGc4u from './CardGc4u';
import CardPortfolio from './CardPortfolio';
import ResponsivePlayer from './ResponsivePlayer';
import CardRiseUpAlarm from './CardRiseUpAlarm';

class Projects extends Component {
	constructor(props) {
		super(props);
		this.handlePlayClick = this.handlePlayClick.bind(this);
		this.state = { isPlayingVideo: false, url: '' };
	}

	handlePlayClick(url) {
		this.setState({ isPlayingVideo: true, url: url });
	}

	render() {
		if (this.state.isPlayingVideo) {
			return (
				<div className="wrapper-play">
					<ResponsivePlayer url={this.state.url} />
					<button type="button" className="btn" onClick={() => this.setState({ isPlayingVideo: false })}>
						Close video
					</button>
				</div>
			);
		} else {
			return (
				<div name="projects" style={{ padding:'0px 0px 50px 0px'}}>
					<div style={{display:'inline-flex'}}>
						<h5 style={{margin:'auto',padding:'0px 10px 0px 0px'}}>Some of </h5>
						<h3>my projects</h3>
					</div>
					<br />
					<div className="card-columns ">
						<CardGc4u handleClick={this.handlePlayClick} />
						<CardAutomation handleClick={this.handlePlayClick} />
						<CardRiseUpAlarm />
						<CardTaki />
						<CardPortfolio />
					</div>
				</div>
			);
		}
	}
}

export default Projects;
