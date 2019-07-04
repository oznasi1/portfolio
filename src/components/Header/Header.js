import React, { Component } from 'react';
import './Header.css';
import ozPic from '../../assets/photos/me.png';
import { animateScroll as scroll, scroller } from 'react-scroll';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-md navbar-light">
				<img className="card-img-me" src={ozPic} alt="Card image cap" />
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a  className="nav-link active" onClick={() =>
									scroller.scrollTo('about', {
										duration: 1500,
										delay: 100,
										smooth: true,
										offset: -20,
									})
								}>
								About
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								onClick={() =>
									scroller.scrollTo('projects', {
										duration: 1000,
										delay: 100,
										smooth: true,
										offset: -30,
									})
								}
							>
								Projects
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link active"
								onClick={() =>
									scroller.scrollTo('niceToHave', {
										duration: 1500,
										delay: 100,
										smooth: true,
										offset: -30,
									})
								}
							>
								Nice to have
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" onClick={() => scroll.scrollToBottom()}>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
