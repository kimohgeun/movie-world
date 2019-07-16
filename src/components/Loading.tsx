import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

interface Props {
	loading: boolean;
}

const Loading: React.FC<Props> = ({ loading }) => {
	return (
		<Box loading={loading}>
			<Icon>Loading...</Icon>
		</Box>
	);
};

const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

//스타일 컴포넌트
const Box = styled.div<{ loading: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	display: ${props => (props.loading ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	z-index: 1;
`;

const Icon = styled(FaSpinner)`
	font-size: 1.5rem;
	color: #fff;
	animation: ${spin} 1s linear infinite;
`;

export default Loading;
