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
			<PopularSlider popular={popular} />
			<Title>개봉 예정</Title>
			<UpcomingSlider upcoming={upcoming} />
			<Title>현재 상영 중</Title>
			<NowPlayingList nowPlaying={nowPlaying} />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: 100%;
`;

const Title = styled.div`
	font-size: 1.2rem;
	font-weight: bold;
	text-align: center;
	margin: 100px 15px;
	@media (max-width: 720px) {
		margin: 50px 15px;
	}
	@media (max-width: 480px) {
		font-size: 1rem;
		margin: 20px 15px;
		font-size: 0.9rem;
	}
`;

export default HomePresenter;
