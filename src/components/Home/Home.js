import React, { Component } from 'react';
import './Home.css';
import {animateScroll as scroller } from 'react-scroll';

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
					Hi everybody, my name is oz and I’m B.Sc. computer science graduate.
					<br />
					I'm very passionate about web development and technology enthusiast.
					<br />
				</p>
				<div className="wrap-arrow">
					<i className="fas fa-angle-double-down fa-3x" ></i>
				</div>
			</div>
		);
	}
}

export default Home;
