import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/Products/FeaturedProducts';

export default function Home() {
	return (
		<React.Fragment>
			<Hero>
				<Link to="/products" className="btn btn-primary btn-hero">
					Our Product
				</Link>
			</Hero>
			<FeaturedProducts />
		</React.Fragment>
	);
}
