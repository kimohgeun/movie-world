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
	width: 1080px;
	margin: 0 auto;
	box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2), 0 5px 5px rgba(0, 0, 0, 0.2);
	@media (max-width: 1080px) {
		width: 100%;
	}
`;

export default App;
