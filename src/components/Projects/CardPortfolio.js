import React, { Component } from 'react';

export default class CardPortfolio extends Component {
	render() {
		return (
			<div  id="cardPortfolio" className="card bg-primary text-white text-center p-3">
						<blockquote className="blockquote mb-0">
							<h5>Ofcurse this website too</h5>
							<p className="card-text">
								<small className="text-muted">
									Technologies:
									<br />
									HTML5, javascript, CSS, react js and hosted by github pages.
								</small>
							</p>
						</blockquote>
					</div>
		);
	}
}

