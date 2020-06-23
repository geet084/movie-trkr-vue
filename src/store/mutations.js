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
  }
}