import API_DATA from './API_DATA.json';
const stringifiedData = JSON.stringify(API_DATA, null, 2);

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
	// TODO: replace `getLocalData` with fetch API call to `/artworks/search/`,
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
 * Get local data from `API_DATA.json`.
 *
 * This behaves as if we've made a fetch request. You can use `response.ok`,
 * `response.status`, `response.json()`, etc.
 *
 * Use this function while building out your UI, to avoid hammering
 * the public API with too many requests.
 * @returns {Promise<Response>}
 */
function getLocalData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				new Response(
					new Blob([stringifiedData], {
						type: 'application/json',
					})
				)
			);
		}, 250);
	});
}
