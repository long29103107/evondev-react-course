export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "405def94fe2b3f0e43afd7cc55071ef8";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
const tmdbSearchEndpoint = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
    getMovieList: (type, page = 1) => `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
    getMovieDetails: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
    getMovieCredits: (movieId) => `${tmdbEndpoint}/${movieId}/credits?api_key=${apiKey}`,
    getMovieVideos: (movieId) => `${tmdbEndpoint}/${movieId}/videos?api_key=${apiKey}`,
    getMovieSimilar: (movieId) => `${tmdbEndpoint}/${movieId}/similar?api_key=${apiKey}`,
    getMovieSearch: (query, page = 1) => `${tmdbSearchEndpoint}?api_key=${apiKey}&query=${query}&page=${page}`,
    image500: (path) => `https://image.tmdb.org/t/p/w500${path}`,
    imageOriginal: (path) => `https://image.tmdb.org/t/p/original${path}`,
}