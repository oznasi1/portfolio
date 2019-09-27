import React, { Component } from 'react';
import riseUpAlarmImg from '../../assets/photos/rise_up_alarm.png';

export default class CardRiseUpAlarm extends Component {
	render() {
		return (
			<div className="card text-left">
				<img className="card-img-top" src={riseUpAlarmImg} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Rise-Up Alarm</h5>
					<p className="card-text">
						Rise Up Alarm is an amazing alarm clock that surprises you every day with a new song!
						<br />
						How does it do it? it start from a list of 30 song that reported as the best ones to wake up with.<br/>
						At the end of every alarm the user has two options:<br/>
						LIKE or UNLIKE, and according to the user's choice his future list updates.
						<br />
						Just schedule your alarms, it’s EASY.
						<br />
						4.9 stars at google play store.
						Hundreds of users.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Technologies:
							<br />
							java, android studio, firebase cloud function written in node js and noSql database.
						</small>
					</p>
					<div className="wrapper-play">
						<a  href="https://play.google.com/store/apps/details?id=our.amazing.clock" class="fas fa-play fa-lg" />
					</div>
					<p className="card-text">
						<small className="text-muted">
							Contributors: Alex Perry
						</small>
						<a href="https://www.linkedin.com/in/alex-perry-801870108/" class="fab fa-linkedin fa-sm" />
					</p>
				</div>
			</div>
		);
	}
}
