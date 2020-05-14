import React from 'react';

export default function Hero({ children }) {
	return (
		<div className="hero">
			<div className="banner">
				<h1>Think, Code and Deploy</h1>
				<p>Embarace your choices - we do</p>
				{children}
			</div>
		</div>
	);
}
