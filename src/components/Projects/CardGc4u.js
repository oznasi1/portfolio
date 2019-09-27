import React, { Component } from 'react';
import reactAdminImg from '../../assets/photos/react_admin_pic.png';
import reactAdminVideo from'../../assets/videos/react_admin_video.mp4';


export default class CardGc4u extends Component {

	render() {
		return (
			<div className="card text-left">
				<img className="card-img-top" src={reactAdminImg} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Dashboard  for admins</h5>
					<p className="card-text">
						I was hired as a freelancer by a small company called GC4U. During my job there I built a custom
						dashboard  that is in use for the admins of the company.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Technologies:
							<br />
							react admin, react js, redux, javascript
						</small>
					</p>
					<div className="wrapper-play">
						<a  className="fas fa-play fa-lg" onClick={()=>this.props.handleClick(reactAdminVideo)}/>
					</div>
				</div>
			</div>
		);
	}
}
