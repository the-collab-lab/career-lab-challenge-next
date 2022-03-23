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
	/**
	 * Get data from `ARTWORKS_SEARCH_RESULT.json`, whuch is served by our
	 * local server.
	 * TODO: replace with path to `/artworks/search/` endpoint,
	 * as described in README.md.
	 */
	const requestUrl = `${process.env.PUBLIC_URL}/ARTWORKS_SEARCH_RESULT.json`;

	return fetch(requestUrl).then((res) => {
		if (res.ok) {
			return res.json();
		}
	});
}
