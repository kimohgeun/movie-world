import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	);
};

export default Router;
