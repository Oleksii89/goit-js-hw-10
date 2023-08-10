import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_6pSKRboySWbbUVzhZK0GmvcHpXjZ2jwlVVY9nclqHJFk4LaUET5TjmfpBsT9kKPP';

import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(data => {
    refs.select.innerHTML = createList(data);
  })
  .catch(err => console.log(err));

refs.select.addEventListener('change', onSelectBreed);
function onSelectBreed(event) {
  const breedId = event.currentTarget.value;
  fetchCatByBreed(breedId)
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function createList(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function createMarkup(data) {
  const card = data
    .map(el => {
      return `<li><img src="" alt="" width="" height="" /><h2></h2><p></p><h3>Temperament</h3><p></p></li>`;
    })
    .join('');
}
