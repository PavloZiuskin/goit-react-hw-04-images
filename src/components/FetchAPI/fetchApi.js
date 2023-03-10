export async function fetchApi(searchValue, pageStore = 1) {
  const API_KEY = '33081721-c69091c559654a3cd3e6be9dd';
  const GET_API = 'https://pixabay.com/api/?';
  const OPTIONS_SEARCH =
    'image_type=photo&orientation=horizontal&safesearch=true';
  const response = await fetch(
    `${GET_API}key=${API_KEY}&q=${searchValue}&${OPTIONS_SEARCH}&per_page=12&page=${pageStore}`
  );

  return response;
}
