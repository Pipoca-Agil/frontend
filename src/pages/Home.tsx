import React from 'react';
import Header from '../components/Header/Header';
const HomePage: React.FC = () => {
	const page = 'Home';
	return (
		<div>
			<Header/>
			<h1>{`${page} a ser construída`}</h1>
		</div>

	);
};

export default HomePage;
