 const API_KEY = '36019a4cba6e62436d08c55a99ce386b';

const requests = {
 	movie: {
 		baseUrl: `/discover/movie?api_key=${API_KEY}&include_adult=false`,
 		genres: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
 		detailBase: '/movie/',
 		detailQueries: `?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
 	},
 	series: {
 		baseUrl: `/discover/tv?api_key=${API_KEY}&include_null_first_air_dates=false`,
 		genres: `/genre/tv/list?api_key=${API_KEY}&language=en-US`,
 		detailBase: '/tv/',
 		detailQueries: `?api_key=${API_KEY}&language=en-US&append_to_response=videos`,
 	},
}
export default requests;