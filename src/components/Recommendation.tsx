import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import back from '../assets/back.png';

interface Props {
	id: number;
	backdrop_path: string;
	title: string;
	release_date: string;
}

const Recommendation: React.FC<Props> = ({ id, backdrop_path, title, release_date }) => {
	// 날짜 설정
	const date: string[] = release_date.split('-');
	return (
		<Box>
			<Link to={`/detail/${id}`}>
				{backdrop_path !== null ? (
					<Image src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
				) : (
					<Image src={back} />
				)}
			</Link>
			<Date>{`${date[0]}.${date[1]}.${date[1]}`}</Date>
			<Title>{title}</Title>{' '}
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	margin-bottom: 10px;
	font-size: 0.8rem;
`;

const Image = styled.img`
	width: 100%;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Date = styled.span`
	display: inline-block;
	margin: 5px 0;
	color: #9e9e9e;
`;

const Title = styled.h3`
	font-weight: bold;
`;

export default Recommendation;
