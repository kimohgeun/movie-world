import React from 'react';
import styled from 'styled-components';

export const PrevButton = (props: any) => {
	const { className, style, onClick } = props;
	return <Button className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

export const NextButton = (props: any) => {
	const { className, style, onClick } = props;
	return <Button className={className} style={{ ...style, display: 'block' }} onClick={onClick} />;
};

//스타일 컴포넌트
const Button = styled.div`
	&:before {
		color: #000;
	}
`;
