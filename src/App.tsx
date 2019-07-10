import React from 'react';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Router from './components/Router';

const App: React.FC = () => {
	return (
		<Box>
			<GlobalStyles />
			<Router />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default App;
