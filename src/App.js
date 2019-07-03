import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import NiceToHave from './components/NiceToHave/NiceToHave';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<Home />
					<About/>
					<Projects/>
					<NiceToHave/>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
