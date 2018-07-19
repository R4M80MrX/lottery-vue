import Vue from 'vue';
import Vuex from 'vuex'
import user from './user.js'
import cart from './cart.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    cart
  }
});
