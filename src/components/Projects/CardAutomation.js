import React, { Component } from 'react';
import seleniumImg from '../../assets/photos/selenium_pic.png';
import ledScreenVideo from'../../assets/videos/led_screen_video.mp4';

export default class CardAutomation extends Component {
	render() {
		return (
			<div className="card text-left">
				<img className="card-img-top" src={seleniumImg} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Automation tool</h5>
					<p className="card-text">
						An automation tool that updates commercial  LED screen in the food industry.
						With a little configuration at the beginning such as: selecting the type of upload, photos or videos, 
						choosing a directory to upload from and an email aderess.<br/>
						At the end of the process an email is sent with the status.
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
