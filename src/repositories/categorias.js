import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (response) => {
    const resposta = await response.json();
    return resposta;
  });
} 

 function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (response) => {
    const resposta = await response.json();
    return resposta;
  });
} 

export default {
  getAllWithVideos,
  getAll,
}
