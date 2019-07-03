import React, { Component } from 'react';
import takiImg from '../../assets/photos/taki_pic.png';

export default class CardTaki extends Component {
	render() {
		return (
			<div className="card text-left">
				<img className="card-img-top" src={takiImg} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Online Taki game</h5>
					<p className="card-text">
						Multiplayer Taki game that is served on Heroku servers. You can log in up to 4 player.
						Originaly this game was build with vanila js against bot and later refactor to javascript es6 and react JS.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Technologies:
							<br />
							HTML5, css, vanila javascript and latest version, react JS ,express js ,etc.
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
