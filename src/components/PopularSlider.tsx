import React from 'react';
import Slider from 'react-slick';
import Item from './PopularSliderItem';

interface Props {
	popular: any[];
}

const PopularSlider: React.FC<Props> = ({ popular }) => {
	const settings = {
		arrows: false,
		dots: false,
		fade: true,
		infinite: true,
		speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
	};
	return (
		<Slider {...settings}>
			{popular.map(item => (
				<Item
					key={item.id}
					id={item.id}
					title={item.title}
					release_date={item.release_date}
					backdrop_path={item.backdrop_path}
					genre_ids={item.genre_ids}
					vote_average={item.vote_average}
				/>
			))}
			{console.log(popular)}
		</Slider>
	);
};

export default PopularSlider;
