import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Item from './UpcomingSliderItem';

interface Props {
	upcoming: any[];
}

const UpcomingSlider: React.FC<Props> = ({ upcoming }) => {
	// 반응형 이미지 슬라이드 갯수 설정
	const [count, setCount] = useState<number>(0);
	window.addEventListener('resize', slideSetting);
	// 화살표 버튼 디스플레이 설정
	const [arrow, setArrow] = useState<boolean>(true);

	function slideSetting() {
		const width: number = window.innerWidth;
		if (720 >= width) {
			setCount(2);
		} else {
			setCount(3);
		}
		if (480 >= width) {
			setArrow(false);
		} else {
			setArrow(true);
		}
    }
    
	useEffect(() => {
		slideSetting();
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: count,
		slidesToScroll: 1,
		arrows: arrow,
	};
	return (
		<Box>
			<Slider {...settings}>
				{upcoming.map(item => (
					<Item
						key={item}
						backdrop_path={item.backdrop_path}
						title={item.title}
						release_date={item.release_date}
					/>
				))}
			</Slider>
		</Box>
	);
};

//스타일 컴포넌트
const Box = styled.div`
	width: calc(100% - 60px);
	margin: 0 auto;
	@media (max-width: 480px) {
		width: 100%;
	}
`;

export default UpcomingSlider;
