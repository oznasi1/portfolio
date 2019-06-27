import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<Home />
					<Projects/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
