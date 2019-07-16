import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../components/SearchBar';
import SearchList from '../../components/SearchList';
import LatestSearchList from '../../components/LatestSearchList';

interface Props {
	onChange(e: any): void;
	onClick(text: string): void;
	onRemove(text: string): void;
	onCancel(): void;
	input: string;
	search: any[];
	latestSearch: string[];
	toggle: boolean;
}

const SearchPresenter: React.FC<Props> = ({ onChange, input, search, latestSearch, onClick, toggle, onRemove, onCancel }) => {
	return (
		<Box>
			<SearchBar onChange={onChange} input={input} onCancel={onCancel} />
			<SearchList search={search} latestSearch={latestSearch} />
			<LatestSearchList latestSearch={latestSearch} onClick={onClick} toggle={toggle} onRemove={onRemove} />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: calc(100vh - 60px);
	padding: 0 15px;
`;

export default SearchPresenter;
