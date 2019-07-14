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
	padding: 0 5px;
	margin-bottom: 50px;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 5px;
	filter: brightness(70%);
	cursor: pointer;
	&:hover {
		filter: brightness(100%);
	}
`;

const Icon = styled(FaPlayCircle)`
	position: absolute;
	top: 50%;
	left: 50%;
`;

export default Trailer;
