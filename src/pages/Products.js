import React from 'react';
import { ProductContext } from '../context/products';
import Loading from '../components/Loading';
import ProductList from '../components/Products/ProductList';

export default function Products() {
	//console.log(React.useContext(ProductContext)); Cara cek apa aja isi dari Product Context dari context\product

	const { products, loading } = React.useContext(ProductContext);
	//console.log(products);

	if (loading) {
		return <Loading />;
	}
	return <ProductList title="our Product" products={products} />;
}
