import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import cv from '../../assets/Oz Nasi CV.pdf';
//TODO: phone link

const Footer = () => {
	return (
		<div>
			<a href="https://github.com/oznasi1" className="fab fa-github fa-2x" ></a>
			<a href="https://www.linkedin.com/in/oz-nasi-034a10b3/" className="fab fa-linkedin-in fa-2x" ></a>
			<a href="https://www.facebook.com/oznasi1" className="fab fa-facebook-f fa-2x" ></a>
			{/* <a href="/"  className="fas fa-phone-alt fa-2x" ></a> */}
			<a href={cv} className="fas fa-file fa-2x" ></a>
		</div>
	);
};

export default Footer;
