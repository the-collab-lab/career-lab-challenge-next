import './App.css';

import { SearchForm } from './SearchForm';

export function App() {
	function onFormSubmit(query) {
		console.log('The user searched for: ' + query);
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onFormSubmit={onFormSubmit} />
		</div>
	);
}
