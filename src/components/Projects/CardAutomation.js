import React, { Component } from 'react';
import seleniumImg from '../../assets/selenium_pic.png';

export default class CardAutomation extends Component {
	render() {
		return (
			<div className="card text-left">
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
					<div className="wrapper-play">
						<a href="https://tranquil-waters-72140.herokuapp.com" class="fas fa-play fa-lg" />
					</div>
				</div>
			</div>
		);
	}
}
