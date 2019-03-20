
import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'
import user from './modules/user'
import permission from './modules/permission'
const store = {
  modules: {
    user,
    permission
  },
  getters,
  actions,
  mutations
}
export default store
