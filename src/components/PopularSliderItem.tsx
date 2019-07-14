import React from 'react';
import styled from 'styled-components';
import genres from '../genres';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {
	id: number;
	title: string;
	release_date: string;
	backdrop_path: string;
	genre_ids: number[];
	vote_average: number;
}

const PopularSliderItem: React.FC<Props> = ({ id, title, release_date, backdrop_path, genre_ids, vote_average }) => {
	// 날짜 설정
	const date: string = release_date.split('-')[0];
	// 장르 설정
	const genresArr: string[] = genre_ids.map(genre => genres[genre]);
	// 평점 설정
	const average: string = (vote_average / 2).toFixed(1);
	const int: number = parseInt(average.split('.')[0]);
	const decimal: number = parseInt(average.split('.')[1]);
	const stars: any[] = [];
	for (let i = 0; i < int; i++) {
		stars.push(<FaStar />);
	}
	if (decimal >= 5) {
		stars.push(<FaStarHalfAlt />);
	}
	return (
		<Box>
			<Image src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
			<InfoBox>
				<Title>
					{title}
					<Date>({date})</Date>
				</Title>
				<GenresBox>
					{genresArr.map((genre, i) => (
						<Genre key={i}>{genre}</Genre>
					))}
				</GenresBox>
				<AverageBox>
					{stars.map((star, i) => (
						<Star key={i}>{star}</Star>
					))}
				</AverageBox>
				<Link to={`/detail/${id}`}>
					<Button>자세히</Button>
				</Link>
			</InfoBox>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	filter: brightness(90%);
`;

const InfoBox = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 35%;
	left: 20px;
`;

const Title = styled.h2`
	font-size: 2rem;
	font-weight: bold;
`;

const Date = styled.span`
	font-size: 1.5rem;
	font-weight: 400;
`;

const GenresBox = styled.div`
	margin: 10px 0;
`;

const Genre = styled.span`
	display: inline-block;
	padding: 5px 10px;
	background-color: #fff;
	font-size: 0.8rem;
	font-weight: bold;
	color: #424242;
	border-radius: 5px;
	margin-right: 5px;
`;

const AverageBox = styled.div`
	color: #fbc02d;
	font-size: 1.5rem;
`;

const Star = styled.span`
	margin-right: 5px;
`;

const Button = styled.button`
	width: 150px;
	border: none;
	border: 2px solid #fff;
	border-radius: 5px;
	padding: 5px 0;
	margin: 10px 0;
	background-color: transparent;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

export default PopularSliderItem;
