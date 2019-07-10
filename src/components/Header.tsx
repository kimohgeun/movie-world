import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Header: React.FC = () => {
	return (
		<Box>
			<Link to="/">
				<Title>Movie World</Title>
			</Link>
			<Link to="search">
				<SearchIcon />
			</Link>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: 1080px;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h1`
	font-weight: bold;
	cursor: pointer;
`;

const SearchIcon = styled(FaSearch)`
	opacity: 0.5;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

export default Header;
