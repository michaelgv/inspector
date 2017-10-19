// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

/* State & Mutations */
const state = {
  callstacks: [],
  activeCallstack: {},
  consoleLogs: [],
  rawDom: '',
  rawDomHistory: [],
  visibleWindow: {
    id: 1,
    name: 'whatsnewview'
  },
}

const mutations = {
  add_callstack (state, callstackDetails) {
    state.callstacks.push(callstackDetails); 
  },
  select_callstack (state, callstackDetails) {
    state.activeCallstack = callstackDetails;
  },
  set_visible_window (state, visibleWindowDetails) {
    state.visibleWindow = visibleWindowDetails;
  },
  addmessagelog (state, details) {
    state.consoleLogs.push(details); 
  },
}

const VuexStore = new Vuex.Store({
  state,
  mutations,
})
/* End State & Mutations */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store: VuexStore
})
