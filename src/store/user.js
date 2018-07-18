let defaultUser = localStorage.getItem('user');
if (!defaultUser) {
  defaultUser = null;
}
const state = {
  user: defaultUser
};

const getters = {
  //判断用户是否登录
  isLogin: (state) => state.user != null,
  //获取用户信息
  user: (state) => state.user
};

const actions = {
  //保存用户信息
  setUser: (context, user) => {
    context.commit('mSetUser', user);
  }
};

const mutations = {
  mSetUser: (state, user) => {
    console.log(user);
    state.user = user;
    localStorage.setItem('user', user);
  }
};

export default {
  state, getters, actions, mutations
}
