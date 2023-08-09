import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_6pSKRboySWbbUVzhZK0GmvcHpXjZ2jwlVVY9nclqHJFk4LaUET5TjmfpBsT9kKPP';

import { fetchBreeds } from './cat-api';

fetchBreeds()
  .then(data => console.log(data))
  .catch(err => console.log(err));

//. У разі успішного запиту, необхідно наповнити select.breed-select опціями так,
//  щоб value опції містило id породи, а в інтерфейсі користувачеві відображалася назва породи.

const refs = {
  select: document.querySelector('.js-breed-select'),
};
console.log(refs.select);
