import React, { Component } from 'react';
import seleniumImg from '../../assets/selenium_pic.png';
import ledScreenVideo from'../../assets/videos/led_screen_video.mp4';

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
						<a class="fas fa-play fa-lg"  onClick={()=>this.props.handleClick(ledScreenVideo)}/>
					</div>
				</div>
			</div>
		);
	}
}
