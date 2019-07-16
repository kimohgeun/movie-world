import React from 'react';
import styled from 'styled-components';
import { FaTimesCircle } from 'react-icons/fa';

interface Props {
	onChange(e: any): void;
	onCancel(): void;
	input: string;
}

const SearchBar: React.FC<Props> = ({ onChange, input, onCancel }) => {
	return (
		<Form
			onSubmit={(e: React.FormEvent<HTMLElement>) => {
				e.preventDefault();
			}}
		>
			<Input placeholder="제목을 입력하세요.." onChange={onChange} value={input} />
			<Icon input={input} onClick={onCancel} />
		</Form>
	);
};

//스타일 컴포넌트
const Form = styled.form`
	width: 100%;
	margin-top: 20px;
	position: relative;
`;

const Input = styled.input`
	width: 100%;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #9e9e9e;
	font-size: 1.5rem;
	font-weight: bold;
	color: #424242;
	padding-bottom: 15px;
	@media (max-width: 600px) {
		font-size: 1.2rem;
		padding-bottom: 10px;
	}
	@media (max-width: 480px) {
		font-size: 1rem;
		padding-bottom: 5px;
	}
`;

const Icon = styled(FaTimesCircle)<{ input: string }>`
	display: ${props => (props.input !== '' ? 'block' : 'none')};
	position: absolute;
	right: 0;
	bottom: 15px;
	color: #9e9e9e;
	opacity: 0.7;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
	@media (max-width: 600px) {
		bottom: 10px;
	}
	@media (max-width: 480px) {
		bottom: 5px;
	}
`;

export default SearchBar;
