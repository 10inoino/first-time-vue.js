import { createStore } from 'vuex'

export default createStore({
  state: {
    updated: (new Date()).toLocaleTimeString(),
  },
  mutations: {
    setUpdated(state) {
			state.updated = (new Date()).toLocaleTimeString()
    }
	}
})
