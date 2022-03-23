import './App.css';

import { searchArtworks } from '../utils/api';
import { SearchForm } from './SearchForm';

export function App() {
	function onSearchSubmit(query) {
		// Search for the users's query, then log the results
		// to the console.
		// NOTE: `searchArtworks` currently returns local data, so that we
		// don't make too many requests to the COIA API! Once we've built out
		// our UI, we need to make real requests to the API!
		// @see: ./src/uitls/api.js
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
