import config from '../config';

const URL_CATEGORIES = `${config.URL}/videos`;

 function create(videoObj) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(videoObj)
  }).then(async (response) => {
    const resposta = await response.json();
    return resposta;
  });
} 

export default {
  create,
}
