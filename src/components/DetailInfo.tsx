import React from 'react';
import styled from 'styled-components';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface Props {
	poster_path: string;
	title: string;
	release_date: string;
	genres: any[];
	vote_average: number;
	overview: string;
}

const DetailInfo: React.FC<Props> = ({ poster_path, title, release_date, genres, vote_average, overview }) => {
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
	return (
		<Box>
			<Image src={`https://image.tmdb.org/t/p/original${poster_path}`} />
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
				<Overview>{overview}</Overview>
			</InfoBox>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	display: flex;
	margin: 50px 0;
`;

const Image = styled.img`
	width: 250px;
	border-radius: 5px;
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 50px;
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

const Overview = styled.span`
	display: inline-block;
	margin: 10px 0;
	font-size: 0.8rem;
	line-height: 1rem;
`;

export default DetailInfo;
