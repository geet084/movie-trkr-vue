import axios from 'axios'

export const actions = {
  getMovieData({ commit }, { type, selection }) {
    const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
    const urlPrefix = `https://api.themoviedb.org/3`
    const urlSuffix = `api_key=${apiKey}&language=en-US`
    let url = ''
    
    if (type === 'movieDetails') url = urlPrefix + `/movie/${selection}?` + urlSuffix
    else if (type === 'moviesList') url = urlPrefix + `/movie/${selection}?page=1&` + urlSuffix
    else if (type === 'search') url = urlPrefix + `/search/movie?query=${selection}&` + urlSuffix

    axios.get(url).then(res => {
      if (type === 'movieDetails') commit('setMovieDetails', res.data)
      else if (type === 'moviesList') commit('setMoviesList', res.data.results)
      else if (type === 'search') commit('moviesList', res.data.results)
    })
  }
}