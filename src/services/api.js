import axios from 'axios';

//Base da URL https://api.themoviedb.org/3
// URL da API https://api.themoviedb.org/3/movie/now_playing?api_key=f9261560796a63450d2e55fa40ded231

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;