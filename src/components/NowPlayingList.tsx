import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Item from './NowPlayingItem';

interface Props {
	nowPlaying: any[];
}

const NowPlayingList: React.FC<Props> = ({ nowPlaying }) => {
	// 반응형 이미지 리스트 갯수 설정
	const [count, setCount] = useState<number>(0);
	function slideSetting() {
		const width: number = window.innerWidth;
		if (600 >= width) {
			setCount(2);
		} else {
			setCount(3);
		}
	}
	useEffect(() => {
		slideSetting();
		window.addEventListener('resize', slideSetting);
	}, []);
	return (
		<Box count={count}>
			{nowPlaying.map((item: any, i: number) => (
				<Item
					key={i}
					id={item.id}
					backdrop_path={item.backdrop_path}
					title={item.title}
					release_date={item.release_date}
				/>
			))}
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div<{ count: number }>`
	width: 100%;
	padding: 0 15px;
	display: grid;
	grid-template-columns: repeat(
		${props => props.count},
		calc(((100% - ${props => (props.count - 1) * 10}px) / ${props => props.count}))
	);
	grid-gap: 10px;
`;

export default NowPlayingList;
