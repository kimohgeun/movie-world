import React from 'react';
import styled from 'styled-components';
import Iframe from 'react-iframe';
import { FaTimes } from 'react-icons/fa';

interface Props {
	toggle: boolean;
	youtubeKey: string;
	onToggle(id: string): void;
}

const TrailerModal: React.FC<Props> = ({ toggle, youtubeKey, onToggle }) => {
	return (
		<Box toggle={toggle}>
			<Icon onClick={() => onToggle('')} />
			<Container>
				<TitleBox />
				<VideoBox>
					<Video allowFullScreen url={`https://www.youtube.com/embed/${youtubeKey}`} />
				</VideoBox>
			</Container>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div<{ toggle: boolean }>`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	display: ${props => (props.toggle ? 'flex' : 'none')};
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 1;
`;

const Icon = styled(FaTimes)`
	position: absolute;
	top: 15px;
	right: 15px;
	color: #fff;
	font-size: 1.5rem;
	cursor: pointer;
	opacity: 0.7;
	&:hover {
		opacity: 1;
	}
	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
	z-index: 1;
`;

const Container = styled.div`
	width: 720px;
	@media (max-width: 720px) {
		width: 100%;
	}
`;

const TitleBox = styled.div``;

const VideoBox = styled.div`
	position: relative;
	width: 100%;
	height: 0;
	padding-bottom: 56.25%;
`;

const Video = styled(Iframe)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export default TrailerModal;
