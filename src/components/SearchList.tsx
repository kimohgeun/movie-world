import React from 'react';
import styled from 'styled-components';
import Item from './SearchListItem';

interface Props {
	search: any[];
}

const SearchList: React.FC<Props> = ({ search }) => {
	console.log(search);
	return (
		<Box>
			{search.map(item => (
				<Item
					key={item.id}
					poster_path={item.poster_path}
					title={item.title}
					release_date={item.release_date}
				/>
			))}
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	padding: 0 15px;
`;

export default SearchList;
