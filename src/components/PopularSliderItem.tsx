import React from 'react';
import styled from 'styled-components';
import genres from '../genres';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
	id: number;
	title: string;
	release_date: string;
	backdrop_path: string;
	genre_ids: number[];
	vote_average: number;
}

const PopularSliderItem: React.FC<Props> = ({ title, release_date, backdrop_path, genre_ids, vote_average }) => {
	const date: string = release_date.split('-')[0];
	const genresArr: string[] = genre_ids.map(genre => genres[genre]);
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
			<ContentBox>
				<Title>{title}</Title>
				<Date>{date}</Date>
				<AverageBox>
					{stars.map((star, i) => (
						<Star key={i}>{star}</Star>
					))}
				</AverageBox>
				<GenresBox>
					{genresArr.map(genre => (
						<Genre key={genre}>{genre}</Genre>
					))}
				</GenresBox>
				<ButtonBox>
					<Button>더 보기</Button>
					<Button>예고편</Button>
				</ButtonBox>
			</ContentBox>
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

const ContentBox = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	top: 40%;
	left: 20px;
	@media (max-width: 720px) {
		top: 30%;
	}
	@media (max-width: 480px) {
		top: 20%;
	}
`;

const Title = styled.h2`
	font-size: 2rem;
	font-weight: bold;
	@media (max-width: 720px) {
		width: 100%;
		font-size: 1.5rem;
	}
	@media (max-width: 480px) {
		width: 100%;
		font-size: 1rem;
	}
`;

const Date = styled.span`
	display: inline-block;
	padding: 5px 0;
	font-weight: 500;
	@media (max-width: 720px) {
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		font-size: 0.8rem;
	}
`;

const AverageBox = styled.div`
	color: #fbc02d;
	margin: 2px 0;
`;

const Star = styled.span`
	margin-right: 2px;
`;

const GenresBox = styled.div`
	margin: 2px 0;
`;

const Genre = styled.span`
	display: inline-block;
	font-size: 0.9rem;
	color: #000;
	background-color: #fff;
	padding: 3px 7px;
	border-radius: 3px;
	margin-right: 10px;
	font-weight: 500;
	@media (max-width: 720px) {
		font-size: 0.8rem;
	}
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

const ButtonBox = styled.div`
	width: 180px;
	display: flex;
	justify-content: space-between;
	margin: 10px 0;
`;

const Button = styled.button`
	width: 80px;
	height: 30px;
	border-radius: 3px;
	border: 2px solid #fff;
	background-color: transparent;
	font-weight: 500;
	font-size: 0.9rem;
	color: #fff;
	cursor: pointer;
	z-index: 1;
`;

export default PopularSliderItem;
