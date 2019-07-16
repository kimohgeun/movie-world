import React, { useState, useEffect } from 'react';
import HomePresenter from './HomePresenter';
import { movies as api } from '../../api';

const HomeContainer: React.FC = () => {
	const [popular, setPopular] = useState<any[]>([]);
	const [upcoming, setUpcoming] = useState<any[]>([]);
	const [nowPlaying, setNowPlaying] = useState<any[]>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(1);
	const [loading, setLoading] = useState<boolean>(true);
	//영화 가져오기
	const getMovies = async (): Promise<any> => {
		try {
			const {
				data: { results: popular },
			} = await api.popular();
			const {
				data: { results: upcoming },
			} = await api.upcoming();
			const {
				data: { results: nowPlaying },
			} = await api.nowPlaying(page);
			const {
				data: { total_pages: totalPages },
			} = await api.nowPlaying(page);
			setPopular(popular.slice(0, 5));
			setUpcoming(upcoming);
			setNowPlaying(nowPlaying);
			setPage(page + 1);
			setTotalPages(totalPages);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	//추가 영화 가져오기
	const getMoteMovies = async (): Promise<any> => {
		try {
			setLoading(true);
			const {
				data: { results: moreNowPlaying },
			} = await api.nowPlaying(page);
			setNowPlaying([...nowPlaying, ...moreNowPlaying]);
			setPage(page + 1);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<HomePresenter
			popular={popular}
			upcoming={upcoming}
			nowPlaying={nowPlaying}
			page={page}
			totalPages={totalPages}
			getMoteMovies={getMoteMovies}
			loading={loading}
		/>
	);
};

export default HomeContainer;
