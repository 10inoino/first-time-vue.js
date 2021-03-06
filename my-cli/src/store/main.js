import { createStore } from 'vuex'

export default createStore({
  state: {
    updated: (new Date()).toTimeString(),
  },
  mutations: {
    setUpdated(state) {
			state.updated = (new Date()).toTimeString()
		}
	},
	getters: {
		localUpdated(state) {
			return state.updated
		}
	}
})
