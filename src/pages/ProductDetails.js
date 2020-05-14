import React from 'react';
import { useParams } from 'react-router-dom'; //Mendapatkan parameter url dari react router
import { ProductContext } from '../context/products';
import { CartContext } from '../context/cart';

import { useHistory } from 'react-router-dom'; //untuk redirect page
import Loading from '../components/Loading';

export default function ProductDetails() {
	const { id } = useParams();
	const history = useHistory();

	const { products } = React.useContext(ProductContext);
	const { addToCart } = React.useContext(CartContext);

	const product = products.find((item) => item.id === parseInt(id)); //cari product berdasarkan id dari parameter
	if (products.length === 0) {
		return <Loading />;
	} else {
		const { image: { url }, title, price, description } = product;
		return (
			<section className="single-product">
				<img src={url} alt={title} className="single-product-image" />
				<article>
					<h1>{title}</h1>
					<h2>{price}</h2>
					<p>{description}</p>
					<button
						className="btn btn-primary btn-block"
						onClick={() => {
							//add to cart
							addToCart(product);
							//untuk redirect
							history.push('/cart');
						}}
					>
						Add to Cart
					</button>
				</article>
			</section>
		);
	}
}
