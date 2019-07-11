import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { movies as api } from '../../api';

const HomeContainer: React.FC = () => {
	const [popular, setPopular] = useState<any[]>([]);
	//영화 가져오기
	const getMovies = async (): Promise<any> => {
		try {
			const {
				data: { results: popular },
			} = await api.popular();
			setPopular(popular.slice(0, 5));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	return <HomePresenter popular={popular} />;
};

export default HomeContainer;
