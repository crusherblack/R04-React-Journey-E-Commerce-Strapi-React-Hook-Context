//Ini adalah product context
import React from 'react';
import axios from 'axios';
import url from '../utils/URL';
import { featuredProducts } from '../utils/helpers';

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
	//ini adalah state pada context karena function base
	const [ loading, setLoading ] = React.useState(false);
	const [ products, setProducts ] = React.useState([]);
	const [ featured, setFeatured ] = React.useState([]);

	React.useEffect(() => {
		setLoading(true); //sebelum get Api set loading true
		axios.get(`${url}/products`).then((response) => {
			const featuredData = featuredProducts(response.data);
			setProducts(response.data);
			setFeatured(featuredData);
			setLoading(false); //setelah berhasil get Api set loading false
		});
		//cleanup function
		return () => {};
	}, []); // [] agar user effect dijalankan sekali saja ketika component mounted

	return <ProductContext.Provider value={{ products, loading, featured }}>{children}</ProductContext.Provider>;
}
