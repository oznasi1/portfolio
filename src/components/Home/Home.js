import React, { Component } from 'react';
import './Home.css';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

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
					I'm very passionate about web development  and looking my next home to grow up with.
					<br />
				</p>
				<div className="wrap-arrow">
					<i className="fas fa-angle-double-down fa-3x" onClick={() =>
									scroller.scrollTo('about', {
										duration: 1500,
										delay: 100,
										smooth: true,
										offset: -20,
									})
								}></i>
				</div>
			</div>
		);
	}
}

export default Home;
