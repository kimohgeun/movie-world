import React, { useState, useEffect } from 'react';
import DetailPresenter from './DetailPresenter';
import { movies as api } from '../../api';

interface Props {
	match: any;
}

const DetailContainer: React.FC<Props> = ({ match }) => {
	// API 정보 가져오기
	const [detail, setDetail] = useState<any>({});
	const [recommendation, setRecommendation] = useState<any>([]);
	// 반응형 이미지 갯수
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
	// 모달창 토글
	const [toggle, setToggle] = useState<boolean>(false);
	const [youtubeKey, setYoutubeKey] = useState<string>('');
	const onToggle = (id: string): void => {
		setToggle(!toggle);
		setYoutubeKey(id);
	};
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
		<DetailPresenter
			detail={detail}
			recommendation={recommendation}
			count={count}
			toggle={toggle}
			youtubeKey={youtubeKey}
			onToggle={onToggle}
		/>
	);
};

export default DetailContainer;
