import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import back from '../assets/back.png';
import poster from '../assets/poster.png';

interface Props {
	backdrop_path: string;
	poster_path: string;
	title: string;
	release_date: string;
	genres: any[];
	vote_average: number;
	overview: string;
	count: number;
}

const DetailInfo: React.FC<Props> = ({
	backdrop_path,
	poster_path,
	title,
	release_date,
	genres,
	vote_average,
	overview,
	count,
}) => {
	// 날짜 설정
	const date: string = release_date.split('-')[0];
	// 장르 설정
	const genresArr: string[] = genres.map((genre: any) => genre.name);
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
	console.log(backdrop_path);
	return (
		<Box count={count}>
			{backdrop_path !== null ? (
				<Image src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} count={count} />
			) : (
				<Image src={back} count={count} />
			)}
			{poster_path !== null ? (
				<Poster src={`https://image.tmdb.org/t/p/w300${poster_path}`} count={count} />
			) : (
				<Image src={poster} count={count} />
			)}
			<InfoBox count={count}>
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
				<Overview>{overview}</Overview>
			</InfoBox>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div<{ count: number }>`
	display: flex;
	flex-direction: ${props => (props.count === 2 ? 'column' : 'row')};
	padding: ${props => (props.count === 2 ? '0' : '50px 15px')};
`;

const Image = styled.img<{ count: number }>`
	width: 100%;
	display: ${props => (props.count === 3 ? 'none' : 'block')};
	margin-bottom: 40px;
`;

const Poster = styled.img<{ count: number }>`
	width: 200px;
	display: ${props => (props.count === 2 ? 'none' : 'block')};
`;

const InfoBox = styled.div<{ count: number }>`
	display: flex;
	flex-direction: column;
	margin-left: ${props => (props.count === 2 ? '0px' : '30px')};
	padding: ${props => (props.count === 2 ? '0 15px' : '0px')};
`;

const Title = styled.h2`
	margin-bottom: 5px;
	font-size: 2rem;
	font-weight: bold;
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
	margin: 5px 0;
	margin-right: 5px;
	padding: 5px 10px;
	background-color: #bdbdbd;
	color: #fff;
	font-size: 0.9rem;
	font-weight: bold;
	border-radius: 5px;
	@media (max-width: 600px) {
		font-size: 0.8rem;
	}
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

const Star = styled.span`
	display: inline-block;
	margin: 5px 0;
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

const Overview = styled.span`
	display: inline-block;
	margin: 5px 0;
	font-size: 0.8rem;
	line-height: 1rem;
`;

export default DetailInfo;
