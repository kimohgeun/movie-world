import React from 'react';
import styled from 'styled-components';

const Null: React.FC = () => {
	return (
		<Box>
			<Text>정보가 없습니다.</Text>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: 100%;
	text-align: center;
`;

const Text = styled.span`
	display: inline-block;
	padding: 50px 0;
	color: #9e9e9e;
	font-size: 0.8rem;
`;

export default Null;
