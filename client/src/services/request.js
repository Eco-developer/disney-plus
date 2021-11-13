const API_KEY = '36019a4cba6e62436d08c55a99ce386b';

 const requests = {
	fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchRomaceMovies :  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchComedyMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchMistery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
	fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchTv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
}
export default requests;