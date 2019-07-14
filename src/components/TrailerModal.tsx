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
			<ExitBox>
				<Icon onClick={() => onToggle('')} />
			</ExitBox>
			<Video allowFullScreen url={`https://www.youtube.com/embed/${youtubeKey}`} />
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
	background-color: #000;
	z-index: 1;
`;

const ExitBox = styled.div`
	width: 720px;
	background-color: #000;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Icon = styled(FaTimes)`
	color: #fff;
	font-size: 1.5rem;
	cursor: pointer;
	opacity: 0.7;
	&:hover {
		opacity: 1;
	}
`;

const Video = styled(Iframe)`
	width: 720px;
	height: 56.25%;
`;

export default TrailerModal;
