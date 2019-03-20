import user from './modules/user'
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
const store = {
  modules: {
    user
  },
  getters,
  actions,
  mutations
}
export default store
