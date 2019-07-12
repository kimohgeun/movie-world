import React from 'react';
import styled from 'styled-components';

interface Props {
	poster_path: string;
	title: string;
	release_date: string;
}

const SearchListItem: React.FC<Props> = ({ poster_path, title, release_date }) => {
	const date: string[] = release_date.split('-');
	return (
		<Box>
			<Image src={`https://image.tmdb.org/t/p/original${poster_path}`} />
			<TitleBox>
				<Date>{`${date[0]}.${date[1]}.${date[1]}`}</Date>
				<Title>{title}</Title>
			</TitleBox>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	margin: 20px 0;
	display: flex;
	align-items: center;
	filter: brightness(80%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Image = styled.img`
	width: 50px;
	border: 3px;
`;

const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 30px;
`;

const Date = styled.span`
	display: inline-block;
	margin-bottom: 5px;
	font-size: 0.8rem;
	color: #9e9e9e;
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

const Title = styled.span`
	font-weight: bold;
	font-size: 0.8rem;
	@media (max-width: 480px) {
		font-size: 0.7rem;
	}
`;

export default SearchListItem;
