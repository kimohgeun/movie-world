import React, { useState } from 'react';
import SearchPresenter from './SearchPresenter';

const SearchContainer: React.FC = () => {
	const [input, setInput] = useState<string>('');
    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setInput(value);
    };
    return <SearchPresenter onChange={onChange} input={input}/>;
};

export default SearchContainer;
