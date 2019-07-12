import React, { useState, useEffect } from 'react';
import SearchPresenter from './SearchPresenter';
import { movies as api } from '../../api';

const SearchContainer: React.FC = () => {
	const [input, setInput] = useState<string>('');
	const [search, setSearch] = useState<any[]>([]);

	const onChange = (e: React.FormEvent<HTMLInputElement>) => {
		const { value } = e.currentTarget;
		setInput(value);
	};

	//검색 결과 가져오기
	useEffect(() => {
		const searchMovies = async (): Promise<any> => {
			try {
				const {
					data: { results: search },
				} = await api.search(input);
				setSearch(search);
			} catch (error) {
				console.log(error);
			}
		};
		if (input !== '') {
			searchMovies();
		} else {
			setSearch([]);
		}
	}, [input]);

	return <SearchPresenter onChange={onChange} input={input} search={search} />;
};

export default SearchContainer;
