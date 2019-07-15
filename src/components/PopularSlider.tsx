import React from 'react';
import Slider from 'react-slick';
import Item from './PopularSliderItem';

interface Props {
	popular: any[];
}

const PopularSlider: React.FC<Props> = ({ popular }) => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<Slider {...settings}>
			{popular.map((item: any, i: number) => (
				<Item
					key={i}
					id={item.id}
					title={item.title}
					release_date={item.release_date}
					backdrop_path={item.backdrop_path}
					genre_ids={item.genre_ids}
					vote_average={item.vote_average}
				/>
			))}
		</Slider>
	);
};

export default PopularSlider;
