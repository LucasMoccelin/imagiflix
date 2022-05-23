const URL = 'https://api.themoviedb.org/3';
const IMAGEURL = 'https://image.tmdb.org/t/p'
const APIKEY = '4ff92608e8d6c03b222c169a4118b882';
const APISTRING = `?api_key=${APIKEY}&language=pt-BR`;
const EVENTS = {
  PosterClick: 'PosterClick',
  ModalClose: 'ModalClose',
};

export default {
  URL,
  IMAGEURL,
  APIKEY,
  APISTRING,
  EVENTS,
};