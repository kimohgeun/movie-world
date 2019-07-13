import React from 'react';
import styled from 'styled-components';

interface Props {
	profile_path: string;
	character: string;
	name: string;
}

const CastInfo: React.FC<Props> = ({ profile_path, character, name }) => {
	return (
		<Box>
			<Image src={`https://image.tmdb.org/t/p/original${profile_path}`} />
			<Name>{name}</Name>
			<Character>{character}</Character>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	display: flex;
	flex-direction: column;
`;

const Image = styled.img`
	width: 100%;
	border-radius: 5px;
`;

const Character = styled.span`
	font-weight: bold;
	font-size: 0.8rem;
`;

const Name = styled.span`
	display: inline-block;
	margin: 10px 0;
	font-size: 0.8rem;
	color: #9e9e9e;
`;

export default CastInfo;
