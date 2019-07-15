import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Item from './UpcomingSliderItem';

interface Props {
	upcoming: any[];
}

const UpcomingSlider: React.FC<Props> = ({ upcoming }) => {
	const settings = {
		className: 'center',
		centerMode: true,
		infinite: true,
		slidesToShow: 3,
		speed: 500,
		prevArrow: <PrevArrow />,
		nextArrow: <NextArrow />,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					arrows: false,
				},
			},
		],
	};
	return (
		<Box>
			<Slider {...settings}>
				{upcoming.map((item: any, i: number) => (
					<Item
						key={i}
						id={item.id}
						backdrop_path={item.backdrop_path}
						title={item.title}
						release_date={item.release_date}
					/>
				))}
			</Slider>
		</Box>
	);
};

function PrevArrow(props: any) {
	const { className, onClick } = props;
	return <PrevButton className={className} onClick={onClick} />;
}

function NextArrow(props: any) {
	const { className, onClick } = props;
	return <NextButton className={className} onClick={onClick} />;
}

//스타일 컴포넌트
const Box = styled.div`
	width: 100%;
	padding: 0 15px;
`;

const PrevButton = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: calc(50% - 1rem);
	left: 10px;
	&:before {
		font-size: 2rem;
		opacity: 1;
	}
	z-index: 1;
`;

const NextButton = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	top: calc(50% - 1rem);
	right: 10px;
	&:before {
		font-size: 2rem;
		opacity: 1;
	}
	z-index: 1;
`;

export default UpcomingSlider;
