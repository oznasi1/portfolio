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
						RiseUp Alarm is an amazing alarm clock that surprises you every day with a new song!
						<br />
						How does he do it? it start from a list of 30 song that reported as best one to wake up with.<br/>
						Every alarm the user has two option:<br/>
						like or unlike, and according to that his future list updates.
						<br />
						Just schedule your alarms, it’s EASY.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Technologies:
							<br />
							java, android studio, firebase cloud function written in node js and noSql database.
						</small>
					</p>
					<div className="wrapper-play">
						<a class="fas fa-play fa-lg" />
					</div>
				</div>
			</div>
		);
	}
}
