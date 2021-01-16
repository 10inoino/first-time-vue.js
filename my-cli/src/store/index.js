import { createStore } from 'vuex'
import MainModule from './main'
import SubModule from './sub'

export default createStore({
  modules: {
    main: MainModule,
    sub : SubModule
  },

  state: {
    hoge: 0
  },
  mutations: {
    hoge(state) {
      state.hoge++;
    }
  }
})
