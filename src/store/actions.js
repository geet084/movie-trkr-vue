import axios from 'axios'

export const actions = {
  getMovieData({ commit }, { type, selection }) {
    const url = createUrl(type, selection)

    axios.get(url).then(res => {
      if (type === 'movieDetails') commit('setMovieDetails', res.data)
      else if (type === 'moviesList') commit('setMoviesList', res.data.results)
      else if (type === 'search') commit('setMoviesList', res.data.results)
    })
  },
  handleSearch({ commit }, queryStr) {
    if (queryStr !== '') commit('setSearchQuery', queryStr)
    else commit('setCategory', 'now_playing')
  },
  updateCategory({ commit }, category) {
    commit('setCategory', category)
    commit('setDisplay', 'showAll')
  }
}


const createUrl = (type, selection) => {
  const apiKey = process.env.VUE_APP_MOVIE_DB_API_KEY
  const urlPrefix = `https://api.themoviedb.org/3`
  const urlSuffix = `api_key=${apiKey}&language=en-US`

  if (type === 'movieDetails') return urlPrefix + `/movie/${selection}?` + urlSuffix
  else if (type === 'moviesList') return urlPrefix + `/movie/${selection}?page=1&` + urlSuffix
  else if (type === 'search') return urlPrefix + `/search/movie?query=${selection}&` + urlSuffix
}