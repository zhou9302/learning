export default {
  state: {
    obj: {
      name: 'ying'
    }
  },
  getters: {
    getObj: (state) => {
      return state.obj
    }
  },
  mutations: {
    SET_OBJ (state, parm) {
      state.obj = parm
    }
  },
  actions: {
    SET_OBJ (context, data) {
      context.commit('SET_OBJ', data)
    }
  }
}
