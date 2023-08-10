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
    .then(data => createMarkup(data))
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
      return `<li><img src="${el.url}" alt="${el.breeds[0].name}" width="400"/><h2>${el.breeds[0].name}</h2><p>${el.breeds[0].description}</p><h3>Temperament</h3><p>${el.breeds[0].temperament}</p></li>`;
    })
    .join('');
  refs.catInfo.innerHTML = card;
}
