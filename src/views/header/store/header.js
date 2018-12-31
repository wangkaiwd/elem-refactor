import { TOGGLE_LOADING } from './mutationType'
const state = {
  loading: false
}

const mutations = {
  [TOGGLE_LOADING](state, loading) {
    state.loading = loading
  }
}


export default {
  state,
  mutations
}