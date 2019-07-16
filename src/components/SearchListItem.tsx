import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import poster from '../assets/poster.png';

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
				{poster_path !== null ? (
					<Image src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
				) : (
					<Image src={poster} />
				)}
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
	font-size: 0.8rem;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Image = styled.img`
	width: 70px;
	@media (max-width: 600px) {
		width: 60px;
	}
	@media (max-width: 480px) {
		width: 50px;
	}
`;

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 30px;
`;

const Date = styled.span`
	display: inline-block;
	margin: 5px 0;
	color: #9e9e9e;
`;

const Title = styled.h3`
	font-weight: bold;
`;

export default SearchListItem;
