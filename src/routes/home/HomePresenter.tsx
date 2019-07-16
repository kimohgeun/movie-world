import React from 'react';
import styled from 'styled-components';
import PopularSlider from '../../components/PopularSlider';
import UpcomingSlider from '../../components/UpcomingSlider';
import NowPlayingList from '../../components/NowPlayingList';
import Loading from '../../components/Loading';

interface Props {
	popular: any[];
	upcoming: any[];
	nowPlaying: any[];
	page: number;
	totalPages: number;
	getMoteMovies(): Promise<any>;
	loading: boolean;
}

const HomePresenter: React.FC<Props> = ({
	popular,
	upcoming,
	nowPlaying,
	page,
	totalPages,
	getMoteMovies,
	loading,
}) => {
	return (
		<Box>
			<Loading loading={loading} />
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
					<ButtonBox page={page} totalPages={totalPages}>
						<Button onClick={getMoteMovies}>더 보기</Button>
					</ButtonBox>
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

const ButtonBox = styled.div<{ page: number; totalPages: number }>`
	text-align: center;
	margin-top: 50px;
	display: ${props => (props.page > props.totalPages ? 'none' : 'block')};
`;

const Button = styled.button`
	border: none;
	padding: 5px 20px;
	border-radius: 20px;
	background-color: #bdbdbd;
	color: #fff;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
	opacity: 0.7;
	&:hover {
		opacity: 1;
	}
`;

export default HomePresenter;
