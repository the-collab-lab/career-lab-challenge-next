import ARTWORKS_SEARCH_DATA from '../data/ARTWORKS_SEARCH.json';

/**
 * Throughout this file are blocks of comments containing keywords
 * prefixed with `@`. These are JSDoc comments, and they help us
 * describe variables, functions, and other aspects of our code.
 * @see: https://jsdoc.app/
 */

/**
 * An individual piece of artwork found at the `/artworks/search/` endpoint.
 * @typedef {Object} Artwork
 * @property {string} artist_title
 * @property {string} date_display
 * @property {string} image_id
 * @property {{alt_text: string, height: number, width: number}} thumbnail
 * @property {string} title
 * @property {number} _score
 *
 *
 * @typedef {Object} ArtworkSearchResult
 * @property {Array<Artwork>} data
 */

/**
 * Search the Chicago Institute of Art's `/artworks/search/` endpoint
 * and get a Promise containing the JSON-encoded response.
 * @param {string} query
 * @returns {Promise<ArtworkSearchResult>}
 */
export function searchArtworks(query) {
	// TODO: replace `getLocalData` with fetch request to `/artworks/search/`,
	// as described in README.md.
	// This function currently returns data as if the user
	// has searched for `cats`.
	return getLocalData().then((res) => {
		if (res.ok) {
			return res.json();
		}
	});
}

/**
 * Get the data in `ARTWORKS_SEARCH.json`.
 *
 * This function simulates a request with the Fetch API – you can use
 * `response.ok`, `response.status`, `response.json()`, etc.
 *
 * Use this function while building out your UI, to avoid hammering
 * the public API with too many requests.
 * @returns {Promise<Response>}
 */
function getLocalData() {
	/**
	 * A Blob is a file-like object of raw data. We need this special object
	 * in order to simulate a Fetch API response.
	 * @see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
	 */
	const blob = new Blob([JSON.stringify(ARTWORKS_SEARCH_DATA, null, 2)], {
		type: 'application/json',
	});

	/**
	 * The fetch API returns a special Response object. We make one here
	 * to simulate using the Fetch API.
	 * @see: https://developer.mozilla.org/en-US/docs/Web/API/Response
	 */
	const response = new Response(blob);

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(response);
		}, 250);
	});
}
