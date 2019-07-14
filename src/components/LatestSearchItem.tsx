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
`;

const Title = styled.span`
	font-size: 0.9rem;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Icon = styled(FaTimes)`
	font-size: 0.9rem;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

export default LatestSearchItem;
