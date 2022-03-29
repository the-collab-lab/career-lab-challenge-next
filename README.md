# 🗒️ Let’s look at some art

Your team has been developing an app that allows users to search the Chicago Institute of Art (AIC)'s APIs for public domain artwork. You've inherited some code from a teammate – a React application with some components and some functions for interating with one of the APIs. Your job is to finish the rest of the tasks your team has agreed on! We've listed those acceptance criteria in this document, as well as some tips for working with the COIA's APIs.

## Local development setup

To get started, you'll need to initialize a new repo using this repo as a template. You can do that **with the Github GUI** or with the **GitHub CLI**. After that, proceed to the **Acceptance criteria** section.

### Initialize your repo from this template with the GitHub GUI

[TODO: add screenshots]

1. Click the "Use this template" button on the GitHub page for this repo. It's located above this readme, and above the preview of the project's file structure.
2. On the next page, give your new repo a name. Make sure the repository is public!
3. Click "Create repository from template". Your repository will generate and you will be navigated to its GitHub page.
4. Click the "Code" button to reveal the command you can run to clone your repo to your computer, then click the "copy" button (it looks like a clipboard).
   <img src="https://camo.githubusercontent.com/36eafd97d2b6b3cf1c6b33f008063f50b87ae5eed76d9ff3ed650595534da4eb/68747470733a2f2f63646e2e7a617070792e6170702f66646462353531666534393462666331386431386533303039633435356233302e706e67" width="600" alt="">
5. Run that code in your terminal
6. `cd` into your new directory
7. Run `npm ci` to install the project's dependencies

Now, to develop the app locally, run `npm start`. To run your tests, run `npm test`.

### Initialize your repo from this template with the GitHub CLI

In your terminal, `cd` into the folder you want your project to live in and run the following commands:

```
# Generate a new repo from this template with the name `take-home-assignment`
# and clone it to your computer in a new folder named `take-home-assignment`
gh repo create take-home-assignment --template mxmason/career-lab-assignment-next --public --clone
# Move into this new folder and install the project's dependencies
cd take-home-assignment && npm ci
```

Now, to develop the app locally, run `npm start`. To run your tests, run `npm test`.

## Acceptance criteria

Your team has agreed on the following requirements for the app's MVP (minimum viable product). Your teammate has implemented a couple of these criteria already. Start with `./src/components/App.jsx` to familiarize yourself with their work, then build on top of it. You're gonna do great!

- [x] Create a `searchArtworks` function for making GET requests to `/search/artworks/`. See `src/utils/api.js`
  - [x] Request a local copy of data in `searchArtworks` to avoid making too many requests to the COIA `/artworks/search/` endpoint
  - [ ] **When the UI is minimally complete**, ensure that `searchArtworks` makes requests to the AIC `/artworks/search/` endpoint, as described in "Working with the API"
- [x] Create a `SearchForm` component that will allow the user to perform a search. See `src/components/SearchForm.jsx`
- [ ] Fix a known bug: the whole app refreshes when `SearchForm` is submitted
- [ ] In the `App` component render
  - the `SearchForm` component and
  - a list of results including _the name of the piece_ and _the artist who created the piece_.
- [ ] Render a new view when a user chooses a result. It could be called `ImageDetailsPage`.
- [ ] In the `ImageDetailsPage` component, render
  - a back button💡 that allows the user to return to their search, and
  - the artwork whose title they just clicked on

💡 Render **your own back button** that allows the user to return to their search results. Don't worry about supporting the browser's backward and forward navigation buttons in your MVP.

## 💻 Working with the API

AIC maintains two distinct APIs: one for requesting data from its catalog, and one for requesting the images from the catalog. These APIs have some dense documentation; we’ve outlined the things you should know.

**⚠️ Read this section carefully.** You will need data from the catalog in order to request the images you want to show to the user!

### Requesting data from the catalog

You’ll make requests to the `/artworks/search/` endpoint provided by the COIA. You can build a search with a URL like the following:

> `https://api.artic.edu/api/v1/artworks/search?q={USER_QUERY}&query[term][is_public_domain]=true&fields=artist_title,date_display,id,image_id,thumbnail.alt_text,thumbnail.width,thumbnail.height,title`

These URLs are quite long, but you don't need to worry about exactly what each part means. You'll need to replace `{USER_QUERY}` with the thing your user searched for in the catalog. If your user searches for “cats”, your request url becomes:

> `https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true&fields=artist_title,date_display,id,image_id,thumbnail.alt_text,thumbnail.width,thumbnail.height,title`.

Try it our for yourself: [open the “cats” query in your browser](https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true&fields=artist_title,date_display,id,image_id,thumbnail.alt_text,thumbnail.width,thumbnail.height,title).

#### Working with data returned from the catalog

Requests to the `/artworks/seearch/` endpoint return **a JSON object**. This object has _a lot_ of information. You should focus on the `data` property, which is an array of objects. Each object is shaped as follows:

- `artist_title`: a string indicating the known artist of the piece
- `date_display`: a string indicating the known production date of the piece
- `id`: a number representing the item’s unique id
- `image_id`: a string referencing the id of the full image for this catalog item
- `thumbnail`: an object with the following properties: `alt_text`, `width`, and `height`
- `title`: a string indicating the title of the piece

### 🖼️ Requesting an image

The COIA provides an endpoint dedicated to serving images. You can make requests from it as follows:

```
https://www.artic.edu/iiif/2/{IMAGE_ID}/full/843,/0/default.jpg
```

You should replace `{IMAGE_ID}` with an image ID from the data you retrieve from the `/artworks/search/` endpoint. For instance, you can view Georges Seurat’s _La grande jette_ at the following URL:

```
https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
```

You can also [open that image in your browser](https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg), if you’d like!
