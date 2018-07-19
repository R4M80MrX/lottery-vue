//从浏览器内置的存储去获取数据
let jsonStr = localStorage.getItem('carts');
//将json字符串转换为json数组
let defaultCarts = JSON.parse(jsonStr);
if (defaultCarts == null) {
  defaultCarts = [];
}

//保存数据
const state = {
  carts: defaultCarts
};

//提供访问数据的方法
const getters = {
  cartSize: state => state.carts.length,
  getCarts: state => state.carts,
  totalMoney: state => {
    let totalCount = 0;
    state.carts.forEach(item => {
      totalCount += item.count;
    });
    return totalCount * 2;
  }
};

//提供修改数据的方法
const actions = {
  /**
   * 添加商品
   * {red:'01,02,03,04,05,06',blue:"16",count:1}
   * 传递过来的数据是 {redBalls:this.redBalls,blueBall:this.blueBall,count:1};
   * @param context
   * @param data
   */
  addToCart(context, data) {
    console.log("actions中addToCart被调用");
    console.log("action提交数据给mutations去修改");
    console.log("data:" + data);
    let redBalls = data.redBalls;
    let red = '';
    console.log('redBalls:' + redBalls);
    redBalls.forEach((item) => {
      red += "," + item;
    });
    red = red.substr(1);

    let cartItem = {
      red: red,
      blue: data.blueBall,
      count: data.count
    };

    context.commit('mAddToCart', cartItem);
  },

  /**
   * 清空购物车
   * @param context
   */
  clearCarts(context) {
    context.commit('mClearCarts');
  },

  /**
   * 删除某条记录
   * @param context
   * @param cartItem
   */
  deleteItem(context, cartItem) {
    context.commit('mDeleteItem', cartItem);
  }
};


//真正修改数据的方法
const mutations = {
  mAddToCart(state, cartItem) {
    console.log("mutations中修改数据:" + cartItem);
    state.carts.push(cartItem);

    //将内存中的数据保存到浏览器本地
    localStorage.setItem('carts', JSON.stringify(state.carts));
  },

  mClearCarts(state) {
    state.carts = [];
  },

  mDeleteItem(state, cartItem) {
    let index = state.carts.indexOf(cartItem);
    state.carts.slice(index, 1);

    localStorage.setItem('carts', JSON.stringify(state.carts));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
