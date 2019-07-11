import React from 'react';
import styled from 'styled-components';

interface Props {
	backdrop_path: string;
	title: string;
	release_date: string;
}

const UpcomingSliderItem: React.FC<Props> = ({ backdrop_path, title, release_date }) => {
	const date: string[] = release_date.split('-');
	return (
		<Box>
			<Image src={`https://image.tmdb.org/t/p/original${backdrop_path}`} />
			<Date>{`${date[0]}.${date[1]}.${date[1]}`}</Date>
			<Title>{title}</Title>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	padding: 0 5px;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	filter: brightness(80%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Date = styled.span`
	font-size: 0.8rem;
	color: #9e9e9e;
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

const Title = styled.h3`
	font-weight: bold;
	font-size: 0.8rem;
	margin: 5px 0;
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;



export default UpcomingSliderItem;
