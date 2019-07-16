import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from '../routes/home/HomeContainer';
import Search from '../routes/search/SearchContainer';
import Detail from "../routes/detail/DetailContainer";

const Router: React.FC = () => {
	return (
		<HashRouter>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/search" component={Search} />
				<Route path="/detail/:id" component={Detail} />
				<Redirect from="*" to="/" />
			</Switch>
		</HashRouter>
	);
};

export default Router;
