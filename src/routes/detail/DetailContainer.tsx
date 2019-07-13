import React, { useState, useEffect } from 'react';
import DetailPresenter from './DetailPresenter';
import { movies as api } from '../../api';

interface Props {
	match: any;
}

const DetailContainer: React.FC<Props> = ({ match }) => {
	const [detail, setDetail] = useState<any>({});
	const [recommendation, setRecommendation] = useState<any>([]);
	const [count, setCount] = useState<number>(0);
	window.addEventListener('resize', slideSetting);
	function slideSetting() {
		const width: number = window.innerWidth;
		if (720 >= width) {
			setCount(2);
		} else {
			setCount(3);
		}
	}
	useEffect(() => {
		const getDetail = async (): Promise<any> => {
			const { id } = match.params;
			try {
				const { data: detail } = await api.detail(id);
				const {
					data: { results: recommendation },
				} = await api.recommendation(id);
				setDetail(detail);
				setRecommendation(recommendation);
			} catch (error) {
				console.log(error);
			}
		};
		getDetail();
		slideSetting();
	}, [match]);
	return Object.keys(detail).length === 0 ? (
		<></>
	) : (
		<DetailPresenter detail={detail} recommendation={recommendation} count={count} />
	);
};

export default DetailContainer;
