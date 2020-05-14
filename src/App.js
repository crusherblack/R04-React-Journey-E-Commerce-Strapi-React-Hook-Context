import React from 'react';

//React Router DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import About from './pages/About';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';

//Components
import Header from './components/Header';

export default function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/cart">
					<Cart />
				</Route>
				<Route path="/checkout">
					<Checkout />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route exact path="/products">
					<Products />
				</Route>
				<Route path="/products/:id" children={<ProductDetails />} />
				<Route>
					<Error path="*" />
				</Route>
			</Switch>
		</Router>
	);
}
