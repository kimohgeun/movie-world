import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
	id: number;
	poster_path: string;
	title: string;
	release_date: string;
	latestSearch: string[];
}

const SearchListItem: React.FC<Props> = ({ id, poster_path, title, release_date, latestSearch }) => {
	const date: string[] = release_date.split('-');
	return (
		<Link to={`/detail/${id}`}>
			<Box
				onClick={() => {
					latestSearch = latestSearch.filter(item => item !== title);
					localStorage.setItem('MOVIE_WORLD', JSON.stringify([...latestSearch, title]));
				}}
			>
				<Image src={`https://image.tmdb.org/t/p/original${poster_path}`} />
				<TitleBox>
					<Date>{`${date[0]}.${date[1]}.${date[1]}`}</Date>
					<Title>{title}</Title>
				</TitleBox>
			</Box>
		</Link>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Image = styled.img`
	width: 80px;
`;

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 30px;
`;

const Date = styled.span`
	display: inline-block;
	margin: 10px 0;
	font-size: 0.8rem;
	color: #9e9e9e;
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 0.8rem;
`;

export default SearchListItem;
