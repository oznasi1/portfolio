import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
	render() {
		return (
			<div className="jumbotron-fluid">
				<h1>Oz Nasi</h1>
				<div className="typewriter">
					<h4 className="typewriter-text">{'<Fullstack web developer/>'}</h4>
				</div>
				<hr className="my-4" />
				<p>
					Hi everbody, my name is oz and i'm B.Sc computer science graduate.
					<br />
					I'm very passionate about web developement and looking my next home to grow up with.
					<br />
					Here you can see some of my cool projects :)
				</p>
				<i className="fas fa-angle-double-down fa-3x"/>
			</div>
		);
	}
}

export default Home;
