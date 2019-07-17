import React, { useState, useEffect } from 'react';
import SearchPresenter from './SearchPresenter';
import { movies as api } from '../../api';

const SearchContainer: React.FC = () => {
	const [input, setInput] = useState<string>('');
	const [search, setSearch] = useState<any[]>([]);
	const [latestSearch, setLatestSearch] = useState<string[]>([]);
	const [toggle, setToggle] = useState<boolean>(true);

	const onChange = (e: React.FormEvent<HTMLInputElement>): void => {
		apiClear();
		const { value } = e.currentTarget;
		setInput(value);
	};

	//검색창 입력 지우기
	const onCancel = (): void => {
		setInput('');
	};

	//최근 검색 결과 클릭
	const onClick = (text: string): void => {
		setInput(text);
		setToggle(false);
	};

	//최근 검색 결과 삭제
	const onRemove = (text: string): void => {
		const newLatestSearch = latestSearch.filter(item => item !== text);
		setLatestSearch(newLatestSearch);
		localStorage.setItem('MOVIE_WORLD', JSON.stringify(newLatestSearch));
	};

	//검색 영화 가져오기
	let apiCallTime: any;
	useEffect(() => {
		apiCall();
	}, [input]);

	function apiCall() {
		apiCallTime = setTimeout(() => {
			const searchMovies = async (): Promise<any> => {
				try {
					const {
						data: { results: search },
					} = await api.search(input);
					setSearch(search);
					console.log(123);
				} catch (error) {
					console.log(error);
				}
			};
			if (input === '') {
				setToggle(true);
				setSearch([]);
			} else {
				searchMovies();
				setToggle(false);
			}
		}, 300);
	}

	function apiClear() {
		clearTimeout(apiCallTime);
	}

	//최근 검색 가져오기
	useEffect(() => {
		const getLatestSearch = async (): Promise<any> => {
			try {
				const latestSearch: any = await localStorage.getItem('MOVIE_WORLD');
				if (latestSearch === null) {
					setLatestSearch([]);
				} else {
					setLatestSearch(JSON.parse(latestSearch).reverse());
				}
			} catch (error) {
				console.log(error);
			}
		};
		getLatestSearch();
	}, []);
	return (
		<SearchPresenter
			onChange={onChange}
			input={input}
			search={search}
			latestSearch={latestSearch}
			onClick={onClick}
			toggle={toggle}
			onRemove={onRemove}
			onCancel={onCancel}
		/>
	);
};

export default SearchContainer;
