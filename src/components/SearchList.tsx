import React from 'react';
import Item from './SearchListItem';

interface Props {
	search: any[];
	latestSearch: string[];
}

const SearchList: React.FC<Props> = ({ search, latestSearch }) => {
	return (
		<div>
			{search.map((item: any, i: number) => (
				<Item
					key={i}
					id={item.id}
					poster_path={item.poster_path}
					title={item.title}
					release_date={item.release_date}
					latestSearch={latestSearch}
				/>
			))}
		</div>
	);
};

export default SearchList;
