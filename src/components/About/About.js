import React, { Component } from 'react';
import './About.css';

export default class About extends Component {
	render() {
		return (
			<div name="about" className="jumbotron-fluid">
				<h3>About me</h3>
				<p>
					I’m 27 years old, born and raised in Holon.
					<br />
					Until now, I was working in our family business - supermarket Ahim Nasi Ltd.
					<br />
					During my time there, I took on the roles of an operational manager and later, a marketing and
					innovation leader - in charge of making sure our supermarket keeps up to modern demands.
					<br />
					Currently working and evolving at "Devalore" as a frontend web developer.
					<br />
					<br />
				</p>
			</div>
		);
	}
}
