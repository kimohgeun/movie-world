import React from 'react';
import styled from 'styled-components';

interface Props {
	onChange(e: any): void;
	input: string;
}

const SearchBar: React.FC<Props> = ({ onChange, input }) => {
	return (
		<Form
			onSubmit={(e: React.FormEvent<HTMLElement>) => {
				e.preventDefault();
			}}
		>
			<Input placeholder="제목을 입력하세요.." onChange={onChange} value={input} />
		</Form>
	);
};

//스타일 컴포넌트
const Form = styled.form`
	width: 100%;
	padding: 0 15px;
`;

const Input = styled.input`
	width: 100%;
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #757575;
	font-size: 1.5rem;
	font-weight: 500;
	color: #fff;
	padding-bottom: 20px;
	margin: 20px 0;
	@media (max-width: 480px) {
		font-size: 1.2rem;
	}
`;

export default SearchBar;
