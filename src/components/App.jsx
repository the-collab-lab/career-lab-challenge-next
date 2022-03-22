import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';

export function App() {
	function onSearchSubmit(query) {
		searchArtworks(query).then((json) => {
			console.log(json);
		});
	}

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
		</div>
	);
}
