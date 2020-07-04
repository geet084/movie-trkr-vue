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
      updatedCurr = this.displayToShow.previous
    } else if (exitFaves) {
      updatedCurr = 'showAll'
      updatedPrev = nextDisplay
    }

    state.displayToShow = {
      current: updatedCurr,
      previous: updatedPrev
    }

  }
}