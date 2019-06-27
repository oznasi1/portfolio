import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ozPic from '../../assets/me.png';
class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-light">
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
							<Link to="/" className="nav-link active">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link active">
								Projects
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link active">
								CV
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-link active">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;

// <ul className="nav justify-content-center">
// <li className="nav-item">
//     <Link to="/" className="nav-link active">Home</Link>
// </li>
// <li className="nav-item">
//     <Link to="/" className="nav-link active">About</Link>
// </li>
// <li className="nav-item">
//     <Link to="/" className="nav-link active">Projects</Link>
// </li>
// <li className="nav-item">
//     <Link to="/" className="nav-link active">CV</Link>
// </li>
// <li className="nav-item">
//     <Link to="/" className="nav-link active">Contact</Link>
// </li>
// </ul>
