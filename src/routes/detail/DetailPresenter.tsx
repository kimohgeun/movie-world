import React from 'react';
import styled from 'styled-components';
import DetailInfo from '../../components/DetailInfo';
import CashInfo from '../../components/CastInfo';
import Trailer from '../../components/Trailer';
import Recommendation from '../../components/Recommendation';
import TrailerModal from '../../components/TrailerModal';
import Loading from '../../components/Loading';
import Null from '../../components/Null';

interface Props {
	detail: any;
	recommendation: any[];
	count: number;
	toggle: boolean;
	youtubeKey: string;
	onToggle(id: string): void;
	loading: boolean;
	onLoading(): void;
}

const DetailPresenter: React.FC<Props> = ({
	detail,
	recommendation,
	count,
	toggle,
	youtubeKey,
	onToggle,
	loading,
	onLoading,
}) => {
	return (
		<Box>
			<Loading loading={loading} />
			{Object.keys(detail).length !== 0 && (
				<DetailInfo
					backdrop_path={detail.backdrop_path}
					poster_path={detail.poster_path}
					title={detail.title}
					release_date={detail.release_date}
					genres={detail.genres}
					vote_average={detail.vote_average}
					overview={detail.overview}
					count={count}
				/>
			)}
			{Object.keys(detail).length !== 0 && (
				<>
					<Title>출연</Title>
					{detail.credits.cast.length === 0 ? (
						<Null />
					) : (
						<CastBox>
							{detail.credits.cast.slice(0, 6).map((item: any, i: number) => (
								<CashInfo
									key={i}
									profile_path={item.profile_path}
									character={item.character}
									name={item.name}
								/>
							))}
						</CastBox>
					)}
				</>
			)}
			{Object.keys(detail).length !== 0 && (
				<>
					<Title>예고편</Title>
					<TrailerModal toggle={toggle} youtubeKey={youtubeKey} onToggle={onToggle} />
					{detail.videos.results.length === 0 ? (
						<Null />
					) : (
						<TrailerBox count={count}>
							{detail.videos.results.slice(0, 3).map((item: any, i: number) => (
								<Trailer key={i} youtube_key={item.key} onToggle={onToggle} />
							))}
						</TrailerBox>
					)}
				</>
			)}
			{Object.keys(detail).length !== 0 && (
				<>
					<Title>추천</Title>
					{recommendation.length === 0 ? (
						<Null />
					) : (
						<RecommendationBox count={count}>
							{recommendation.slice(0, 3).map((item: any, i: number) => (
								<Recommendation
									key={i}
									id={item.id}
									backdrop_path={item.backdrop_path}
									title={item.title}
									release_date={item.release_date}
									onLoading={onLoading}
								/>
							))}
						</RecommendationBox>
					)}
				</>
			)}
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: 100%;
	min-height: calc(100vh - 60px);
	padding-bottom: 50px;
`;

const Title = styled.h2`
	padding: 15px;
	font-weight: bold;
	margin-top: 100px;
	margin-bottom: 10px;
	@media (max-width: 600px) {
		margin-top: 50px;
	}
`;

const CastBox = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 120px);
	grid-gap: 25px;
	padding: 0 15px;
	@media (max-width: 600px) {
		grid-template-columns: repeat(auto-fill, 100px);
	}
`;

const TrailerBox = styled.div<{ count: number }>`
	width: 100%;
	padding: 0 15px;
	display: grid;
	grid-template-columns: repeat(
		${props => props.count},
		calc(((100% - ${props => (props.count - 1) * 10}px) / ${props => props.count}))
	);
	grid-gap: 10px;
`;

const RecommendationBox = styled.div<{ count: number }>`
	width: 100%;
	padding: 0 15px;
	display: grid;
	grid-template-columns: repeat(
		${props => props.count},
		calc(((100% - ${props => (props.count - 1) * 10}px) / ${props => props.count}))
	);
	grid-gap: 10px;
`;

export default DetailPresenter;
