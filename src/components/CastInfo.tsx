import React from 'react';
import styled from 'styled-components';
import profile from '../assets/profile.png';

interface Props {
	profile_path: string;
	character: string;
	name: string;
}

const CastInfo: React.FC<Props> = ({ profile_path, character, name }) => {
	return (
		<Box>
			{profile_path !== null ? (
				<Image src={`https://image.tmdb.org/t/p/original${profile_path}`} />
			) : (
				<Image src={profile} />
			)}
			<Character>{character}</Character>
			<Name>{name}</Name>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 0.8rem;
`;

const Image = styled.img`
	width: 100%;
	height: 180px;
	@media (max-width: 600px) {
		height: 150px;
	}
`;

const Character = styled.span`
	display: inline-block;
	margin: 5px 0;
	color: #9e9e9e;
`;

const Name = styled.h3`
	font-weight: bold;
`;

export default CastInfo;
