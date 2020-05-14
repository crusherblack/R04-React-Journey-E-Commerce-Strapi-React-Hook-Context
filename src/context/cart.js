import React from 'react';
import localCart from '../utils/localCart';

function getCartFromLocalStorage() {
	return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
}

const CartContext = React.createContext();

function CartProvider({ children }) {
	const [ cart, setCart ] = React.useState(getCartFromLocalStorage());
	const [ total, setTotal ] = React.useState(0);
	const [ cartItem, setcartItem ] = React.useState(0);

	//setiap kali ada update pada cart jalankan use effect
	React.useEffect(
		() => {
			//local storage
			localStorage.setItem('cart', JSON.stringify(cart));
			//cart items
			let newCartItems = cart.reduce((total, cartItem) => {
				return (total += cartItem.amount);
			}, 0);
			setcartItem(newCartItems);
			//cart total
			let newTotal = cart.reduce((total, cartItem) => {
				return (total += cartItem.amount * cartItem.price);
			}, 0);
			newTotal = parseFloat(newTotal.toFixed(2));
			setTotal(newTotal);
		},
		[ cart ]
	); //jalankan ini setiap kali cart update
	//remove item
	const removeItem = (id) => {
		setCart([ ...cart ].filter((item) => item.id !== id)); //filter id yang tidak diremove
	};

	//increase amount
	const increaseAmount = (id) => {
		const newCart = [ ...cart ].map((item) => {
			return item.id === id ? { ...item, amount: item.amount + 1 } : { ...item };
		});
		setCart(newCart);
	};

	//decrease amount
	const decreaseAmount = (id, amount) => {
		if (amount === 1) {
			//jika jumlah 1 maka remove
			removeItem(id);
			return;
		} else {
			const newCart = [ ...cart ].map((item) => {
				return item.id === id ? { ...item, amount: item.amount - 1 } : { ...item };
			});
			setCart(newCart);
		}
	};

	//add to cart
	const addToCart = (product) => {
		const { id, image: { url }, title, price } = product;
		const item = [ ...cart ].find((item) => item.id === id); //cari id yang sama pada cart state
		if (item) {
			//jika item sudah ada di cart maka nambah amount
			increaseAmount(id);
			return;
		} else {
			//jika item tidak ada di cart
			const newItem = { id, image: url, title, price, amount: 1 };
			const newCart = [ ...cart, newItem ]; //cara nambah array dalam spread operator
			setCart(newCart);
		}
	};

	//clear cart
	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, total, cartItem, removeItem, increaseAmount, decreaseAmount, addToCart, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };
