import React from 'react';
import styled from 'styled-components';
import DetailInfo from '../../components/DetailInfo';
import CashInfo from '../../components/CastInfo';
import Trailer from '../../components/Trailer';
import Recommendation from '../../components/Recommendation';

interface Props {
	detail: any;
	recommendation: any[];
	count: number;
}

const DetailPresenter: React.FC<Props> = ({ detail, recommendation, count }) => {
	const castArr = detail.credits.cast.filter((cast: any) => cast.character !== '').slice(0, 5);
	const trailerArr = detail.videos.results.slice(0, 3);
	const recommendationArr = recommendation.slice(0, 3);
	window.scrollTo(0, 0);
	return (
		<Box>
			<DetailInfo
				poster_path={detail.poster_path}
				title={detail.title}
				release_date={detail.release_date}
				genres={detail.genres}
				vote_average={detail.vote_average}
				overview={detail.overview}
			/>
			<Title>출연</Title>
			<CastBox>
				{castArr.map((item: any, i: number) => (
					<CashInfo key={i} profile_path={item.profile_path} character={item.character} name={item.name} />
				))}
			</CastBox>
			<Title>예고편</Title>
			<TrailerBox count={count}>
				{trailerArr.map((item: any, i: number) => (
					<Trailer key={i} yuotubue_key={item.key} />
				))}
			</TrailerBox>
			<Title>추천</Title>
			<RecommendationBox count={count}>
				{recommendationArr.map((item: any, i: number) => (
					<Recommendation
						key={item.id}
						id={item.id}
						backdrop_path={item.backdrop_path}
						title={item.title}
						release_date={item.release_date}
					/>
				))}
			</RecommendationBox>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: 100%;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	font-weight: bold;
	margin: 80px 0;
`;

const CastBox = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 150px);
	grid-gap: 50px;
	padding: 0 30px;
`;

const TrailerBox = styled.div<{ count: number }>`
	width: calc(100% - 50px);
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(${props => props.count}, calc(100% / ${props => props.count}));
`;

const RecommendationBox = styled.div<{ count: number }>`
	width: calc(100% - 50px);
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(${props => props.count}, calc(100% / ${props => props.count}));
`;

export default DetailPresenter;
