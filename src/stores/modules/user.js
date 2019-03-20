import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 用户名登录
    async LoginByUsername({commit}, userInfo) {
      const username = userInfo.username.trim()
      // let result = await loginByUsername(username, userInfo.password)
      let result = {
        token: '123',
        status: 0
      }
      commit('SET_TOKEN', result.token)
      setToken(result.token)
      return result
    },
    // 获取用户信息
    async GetUserInfo(commit, state) {
      let result = await getUserInfo(state.token)
      let data = result.data
      commit('SET_ROLES', data.roles)
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar)
      commit('SET_INTRODUCTION', data.introduction)
    },
    // 第三方验证登录
    async LoginByThirdparty({ commit, state }, code) {
      commit('SET_CODE', code)
      let result = await loginByThirdparty(state.status, state.email, state.code)
      let data = result.data
      commit('SET_TOKEN', data.token)
      setToken(data.token)
    },
    // 登出
    async LogOut({ commit, state }) {
      let result = await logout(state.token)
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
    },
    // 前端登出
    async FedLogOut({ commit }) {
      commit('SET_TOKEN', '')
      removeToken()
    },
    // 动态修改权限
    async ChangeRoles({ commit, dispatch }, role) {
      commit('SET_TOKEN', role)
      setToken(role)
      let result = await getUserInfo(role)
      const data = result.data
      commit('SET_ROLES', data.roles)
      commit('SET_NAME', data.name)
      commit('SET_AVATAR', data.avatar)
      commit('SET_INTRODUCTION', data.introduction)
      dispatch('GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
    }
  }
}
export default user
