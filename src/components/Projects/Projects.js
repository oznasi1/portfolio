import React, { Component } from 'react';
import './Projects.css';
import takiImg from '../../assets/taki_pic.png';
import seleniumImg from '../../assets/selenium_pic.png';
import reactAdminImg from '../../assets/react_admin_pic.png';

class Projects extends Component {
	render() {
		return (
			<div>
				<h3>My Projects</h3>
				<br />
				<div className="card-columns">
					<div className="card">
						<img className="card-img-top" src={takiImg} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Online Taki game</h5>
							<p className="card-text">
								Multiplayer Taki game that is served on Heroku servers. You can log in up to 4 player.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Technologies:
									<br />
									HTML5, pure javascript and latest version, react JS ,express js ,etc.
								</small>
							</p>
							<a href="https://tranquil-waters-72140.herokuapp.com" class="fas fa-play fa-lg" />
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={seleniumImg} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Automation tool</h5>
							<p className="card-text">
								An automation tool that updates commersial LED screen in the food industry.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Technologies:
									<br />
									node js, selenium
								</small>
							</p>
							<a href="https://tranquil-waters-72140.herokuapp.com" class="fas fa-play fa-lg" />
						</div>
					</div>
					<div className="card">
						<img className="card-img-top" src={reactAdminImg} alt="Card image cap" />
						<div className="card-body">
							<h5 className="card-title">Dashborad for admins</h5>
							<p className="card-text">
								I was hired as freelancer by a small company called GC4U. During my job there i built
								custom dashbord that is in use for the admins of the company.
							</p>
							<p className="card-text">
								<small className="text-muted">
									Technologies:
									<br />
									react admin, react js, redux, javascript
								</small>
							</p>
							<a href="https://tranquil-waters-72140.herokuapp.com" class="fas fa-play fa-lg" />
						</div>
					</div>
					<div class="card bg-primary text-white text-center p-3">
						<blockquote class="blockquote mb-0">
							<p>Ofcurse this website too</p>
							<p className="card-text">
								<small className="text-muted">
									Technologies:
									<br />
									HTML5, javascript, CSS, react js and hosted by github pages.
								</small>
							</p>
						</blockquote>
					</div>
					<div class="card text-center">
						<div class="card-body">
							<h5 class="card-title">Card title</h5>
							<p class="card-text">
								This card has a regular title and short paragraphy of text below it.
							</p>
							<p class="card-text">
								<small class="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
