import React from 'react';
import styled from 'styled-components';
import PopularSlider from '../../components/PopularSlider';
import UpcomingSlider from '../../components/UpcomingSlider';
import NowPlayingList from '../../components/NowPlayingList';

interface Props {
	popular: any[];
	upcoming: any[];
	nowPlaying: any[];
}

const HomePresenter: React.FC<Props> = ({ popular, upcoming, nowPlaying }) => {
	return (
		<Box>
			{popular.length !== 0 && <PopularSlider popular={popular} />}
			{upcoming.length !== 0 && (
				<>
					<Title>개봉 예정</Title>
					<UpcomingSlider upcoming={upcoming} />
				</>
			)}
			{nowPlaying.length !== 0 && (
				<>
					<Title>현재 상영 중</Title>
					<NowPlayingList nowPlaying={nowPlaying} />
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

export default HomePresenter;
