import axios from 'axios';

const API_KEY =
  'live_6pSKRboySWbbUVzhZK0GmvcHpXjZ2jwlVVY9nclqHJFk4LaUET5TjmfpBsT9kKPP';
axios.defaults.headers.common['x-api-key'] = API_KEY;

const BASE_URL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(resp => {
    return resp.data;
  });
  // return fetch(`${BASE_URL}/breeds?api_key=${API_KEY}`).then(resp => {
  //   if (!resp.ok) {
  //     throw new Error(resp.statusText);
  //   }
  //   return resp.json();
  // });
}
function fetchCatByBreed(breedId) {
  const params = new URLSearchParams({
    breed_ids: breedId,
  });

  return axios.get(`${BASE_URL}/images/search?${params}`).then(resp => {
    if (!resp.data.length) {
      throw new Error(resp.statusText);
    }
    return resp.data;
  });

  // return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&${params}`).then(
  //   resp => {
  //     if (!resp.ok) {
  //       throw new Error(resp.statusText);
  //     }
  //     return resp.json();
  //   }
  // );
}

export { fetchBreeds, fetchCatByBreed };
