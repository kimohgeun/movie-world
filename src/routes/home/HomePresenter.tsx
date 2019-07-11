import React from 'react';
import styled from 'styled-components';
import PopularSlider from '../../components/PopularSlider';

interface Props {
	popular: any[];
}

const HomePresenter: React.FC<Props> = ({ popular }) => {
	return (
		<Box>
			<PopularSlider popular={popular} />
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: 100%;
`;

export default HomePresenter;
