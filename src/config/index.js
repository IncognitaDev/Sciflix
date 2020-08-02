const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:3333'
    : 'https://sci-flix.herokuapp.com';

export default {
    URL
} 