import React from 'react';
import { Link } from 'react-router-dom';

//get props
export default function Product({ image, title, id, price }) {
	const url = image.url; //get image url

	return (
		<article className="product">
			<div className="img-container">
				<img src={url} alt={title} />
				<Link to={`/products/${id}`} className="btn btn-primary product-link">
					Details
				</Link>
				<div className="product-footer">
					<p className="product-title">{title}</p>
					<p className="product-price">{price} $</p>
				</div>
			</div>
		</article>
	);
}
