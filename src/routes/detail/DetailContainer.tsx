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
	const [loading, setLoading] = useState<boolean>(true);

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
		window.scrollTo(0, 0);
	}, []);
	// 모달창 토글
	const [toggle, setToggle] = useState<boolean>(false);
	const [youtubeKey, setYoutubeKey] = useState<string>('');
	const onToggle = (id: string): void => {
		setToggle(!toggle);
		setYoutubeKey(id);
	};
	useEffect(() => {
		setDetail([]);
		setRecommendation([]);
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
			} finally {
				setLoading(false);
			}
		};
		getDetail();
		slideSetting();
	}, [match]);
	return (
		<DetailPresenter
			detail={detail}
			recommendation={recommendation}
			count={count}
			toggle={toggle}
			youtubeKey={youtubeKey}
			onToggle={onToggle}
			loading={loading}
		/>
	);
};

export default DetailContainer;
