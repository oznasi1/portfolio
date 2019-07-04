import React, { Component } from 'react';
import superNasiPic from '../../assets/photos/super_nasi_pic.png';

export default class CardSuperNasi extends Component {

	render() {
		return (
			<div className="card text-left">
				<img className="card-img-top" src={superNasiPic} alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Image website for Super Nasi</h5>
					<p className="card-text">
						Part of my job in the family bussiness, i built this website using wix editor.
						Simple and clean - shows every month the best promotion. 
						Taking care of all the graphic design inside.
					</p>
					<p className="card-text">
						<small className="text-muted">
							Technologies:
							<br />
							Wix
						</small>
					</p>
					<div className="wrapper-play">
						<a  className="fas fa-play fa-lg" href="https://www.supernasi.co.il/"/>
					</div>
				</div>
			</div>
		);
	}
}
