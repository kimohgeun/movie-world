import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

interface Props {
	item: string;
	onClick(text: string): void;
	onRemove(text: string): void;
}

const LatestSearchItem: React.FC<Props> = ({ item, onClick, onRemove }) => {
	return (
		<Box>
			<Title onClick={() => onClick(item)}>{item}</Title>
			<Icon onClick={() => onRemove(item)} />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.9rem;
`;

const Title = styled.span`
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

const Icon = styled(FaTimes)`
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

export default LatestSearchItem;
