import React from 'react';
import styled from 'styled-components';
import LatestSearchItem from './LatestSearchItem';

interface Props {
	latestSearch: string[];
	onClick(text: string): void;
	onRemove(text: string): void;
	toggle: boolean;
}

const LatestSearchList: React.FC<Props> = ({ latestSearch, onClick, toggle, onRemove }) => {
	return (
		<Box toggle={toggle}>
			{latestSearch.length !== 0 && <Title>최근 검색</Title>}
			{latestSearch.map((item: string, i: number) => (
				<LatestSearchItem key={i} item={item} onClick={onClick} onRemove={onRemove} />
			))}
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div<{ toggle: boolean }>`
	display: ${props => (props.toggle ? 'block' : 'none')};
`;

const Title = styled.span`
	display: inline-block;
	font-weight: bold;
	margin-top: 20px;
`;

export default LatestSearchList;
