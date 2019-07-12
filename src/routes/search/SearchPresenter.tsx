import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar';

interface Props {
	onChange(e: any): void;
	input: string;
}

const SearchPresenter: React.FC<Props> = ({ onChange, input }) => {
	return (
		<Box>
			<SearchBar onChange={onChange} input={input} />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	min-height: calc(100vh - 50px);
	display: flex;
	flex-direction: column;
`;

export default SearchPresenter;
