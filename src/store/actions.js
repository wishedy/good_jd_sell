const actions = {
  setPhoneNum ({ commit, state }, num) {
    commit('setPhoneNum', num)
  },
  saveUser ({ commit, state }, user) {
    commit('saveUser', user)
  },
  changeCodeNum ({ commit, state }, num) {
    commit('changeCodeNum', num)
  },
  saveToken ({ commit, state }, token) {
    commit('saveToken', token)
  }
}
export default actions
