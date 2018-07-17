const key = 'user';

const state = {
  user: null
};

const getters = {
  isLogin: (state) => state.user !== null,
  user: (state) => state.user
};

const actions = {
  loadLocalUser: (context) => {
    let user = localStorage.getItem(key);
    context.commit('setUser', user);
  },
  setUser: (context, user) => {
    context.commit('setUser', user);
  },
  logout: (context) => {
    localStorage.removeItem(key);
    context.commit('setUser', null);
  }
};

const mutations = {
  setUser: (state, user) => {
    state.user = user;
    //保存
    localStorage.setItem(key, user);
  }
};

export default {
  state, getters, actions, mutations
}
