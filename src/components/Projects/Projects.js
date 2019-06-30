import React, { Component } from 'react';
import './Projects.css';
import CardTaki from './CardTaki';
import CardAutomation from './CardAutomation';
import CardGc4u from './CardGc4u';
import CardPortfolio from './CardPortfolio';
class Projects extends Component {
	render() {
		return (
			<div name="projects">
				<h3>My Projects</h3>
				<br />
				<div className="card-columns">
					<CardTaki/>
					<CardAutomation/>
					<CardPortfolio/>
					<CardGc4u/>
				</div>
			</div>
		);
	}
}

export default Projects;
