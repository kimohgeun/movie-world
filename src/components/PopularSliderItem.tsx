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
			<Image src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
			<InfoBox>
				<Title>
					{title}
					<Date>({date})</Date>
				</Title>
				<div>
					{genresArr.map((genre, i) => (
						<Genre key={i}>{genre}</Genre>
					))}
				</div>
				<div>
					{stars.map((star, i) => (
						<Star key={i}>{star}</Star>
					))}
				</div>
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
	filter: brightness(80%);
`;

const InfoBox = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 150px;
	top: calc(50% - 75px);
	left: 15px;
	@media (max-width: 600px) {
		height: 130px;
		top: calc(50% - 65px);
	}
	@media (max-width: 480px) {
		height: 110px;
		top: calc(50% - 55px);
	}
`;

const Title = styled.h2`
	font-size: 2rem;
	font-weight: bold;
	color: #fff;
	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

const Date = styled.span`
	font-size: 1.5rem;
	font-weight: bold;
	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
	@media (max-width: 480px) {
		font-size: 1rem;
	}
`;

const Genre = styled.span`
	display: inline-block;
	padding: 5px 10px;
	background-color: #fff;
	font-size: 0.9rem;
	font-weight: bold;
	color: #424242;
	border-radius: 5px;
	margin-right: 5px;
	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

const Star = styled.span`
	margin-right: 5px;
	color: #f1c40f;
	font-size: 1.5rem;
	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
	@media (max-width: 480px) {
		font-size: 1rem;
	}
`;

const Button = styled.button`
	width: 150px;
	border: 2px solid #fff;
	border-radius: 5px;
	padding: 5px 0;
	background-color: transparent;
	font-size: 1rem;
	font-weight: bold;
	color: #fff;
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
	@media (max-width: 600px) {
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

export default PopularSliderItem;
