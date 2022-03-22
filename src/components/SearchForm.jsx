import './SearchForm.css';

import { useState } from 'react';


export function SearchForm({ onFormSubmit }) {
	const [query, setQuery] = useState('');

	function handleInputChange(evt) {
		setQuery(evt.target.value);
	}

	function handleFormSubmit(evt) {
		evt.preventDefault();

		onFormSubmit(query)
	}

	return (
		<form className="Form" onSubmit={handleFormSubmit} role="search">
			<label htmlFor="search-field" className="label">
				Search for some art
			</label>
			<input
				type="search"
				id="search-field"
				name="query"
				className="input"
				value={query}
				onChange={handleInputChange}
			/>
			<button type="submit" className="button">
				Search
			</button>
		</form>
	);
}

