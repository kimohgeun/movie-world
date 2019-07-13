import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from '../routes/home/HomeContainer';
import Search from '../routes/search/SearchContainer';
import Detail from "../routes/detail/DetailContainer";

const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/detail/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
