export const mutations = {
  signInUser: (state, user) => {
    state.userInfo = user
  },
  signOutUser: state => {
    state.userInfo = {
      name: '',
      email: ''
    }
  },
  setMovieDetails: (state, movieDetails) => {
    state.movieDetails = movieDetails
  },
  setMoviesList: (state, moviesList) => {
    state.moviesList = moviesList
  },
  setSearchQuery: (state, searchQuery) => {
    state.searchQuery = searchQuery
  },
  setCategory: (state, category) => {
    state.category = category
  },
  setDisplay: (state, nextDisplay) => {
    const current = state.displayToShow.current
    const exitDetails = current === 'showDetails' && nextDisplay === 'showDetails'
    const exitFaves = current === 'showFaves' && nextDisplay === 'showFaves'

    let updatedCurr = nextDisplay
    let updatedPrev = current

    if (exitDetails) {
      updatedCurr = state.displayToShow.previous
    } else if (exitFaves) {
      updatedCurr = 'showAll'
      updatedPrev = nextDisplay
    }

    state.displayToShow = {
      current: updatedCurr,
      previous: updatedPrev
    }
  },
  toggleStarredMovie: (state, movieId) => {
    let movie = state.movieDetails
    let updatedList = state.favesList
    const notAlreadyStarred = !state.favesList.find(fave => fave.id === movieId)

    if (notAlreadyStarred) updatedList.push(movie)
    else updatedList = state.favesList.filter(fave => fave.id !== parseInt(movieId))

    state.favesList = updatedList
  }
}