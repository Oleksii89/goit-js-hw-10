function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1';

  return fetch(`${BASE_URL}/breeds`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
fetchBreeds()
  .then(data => console.log(data))
  .catch(err => console.log(err));

export { fetchBreeds };
