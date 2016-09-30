import Vue from 'vue'
import Vuex from 'vuex'
import { CreateAccountModel } from './models/create-account-model'

Vue.use(Vuex)

const state = {
  // count: 0,
  createAccount: new CreateAccountModel()
}

const mutations = {
  // INCREMENT (state) { state.count++ },
  // DECREMENT (state) { state.count-- },
  TESTACCOUNT (state) {
    console.log(state.createAccount);
  }

}

export default new Vuex.Store({
  state,
  mutations
})
