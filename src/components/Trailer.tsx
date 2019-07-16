import React from 'react';
import styled from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';

interface Props {
	youtube_key: string;
	onToggle(id: string): void;
}

const Trailer: React.FC<Props> = ({ youtube_key, onToggle }) => {
	return (
		<Box>
			<Image
				src={`https://img.youtube.com/vi/${youtube_key}/mqdefault.jpg`}
				onClick={() => onToggle(youtube_key)}
			/>
			<Icon />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	margin-bottom: 10px;
	font-size: 0.8rem;
	position: relative;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Image = styled.img`
	width: 100%;
`;

const Icon = styled(FaPlayCircle)`
	color: #fff;
	position: absolute;
	font-size: 2rem;
	top: calc(50% - 1rem);
	left: calc(50% - 1rem);
	@media (max-width: 480px) {
		font-size: 1rem;
		top: calc(50% - 0.5rem);
		left: calc(50% - 0.5rem);
	}
`;

export default Trailer;
