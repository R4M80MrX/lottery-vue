<template>
  <div>
    <title-bar title="登录"></title-bar>

    <div class="row" style="margin-top: 32px;">
      <!--空列-->
      <div class="col-xs-1"></div>
      <!--内容部分-->
      <div class="col-xs-10">
        <!--2.登录注册的标题-->
        <div class="row">
          <div class="col-xs-6 text-center" style="color: green;">登录</div>
          <div class="col-xs-6 text-center" onclick="">注册</div>
        </div>

        <!--3.水平分割线-->
        <hr style="border: 2px solid gainsboro;"/>

        <!--4.表单输入项-->
        <div class="form-group">
          <input type="text" v-model="email" class="form-control" placeholder="请输入您的邮箱...">
        </div>
        <!--5.密码-->
        <div class="form-group">
          <input type="password" v-model="password" class="form-control" placeholder="请输入您的密码...">
        </div>


        <!--9.登录-->
        <div class="form-group">
          <input type="button" class="form-control btn btn-success" value="登录"
                 @click="handleLogin()">
        </div>

        <!--跳转去登录-->
        <div style="margin-top: 15px;">
          <a href="#" style="color: green;">忘记密码</a>&nbsp;|&nbsp;<a href="#" style="color: green;">去注册</a>
        </div>

      </div>
      <!--空列-->
      <div class="col-xs-1"></div>
    </div>
  </div>
</template>

<script>
  import TitleBar from '@/pages/common/TitleBar'
  import {mapActions} from 'vuex'

  import axios from 'axios'

  export default {
    name: "login-page",
    components: {
      TitleBar
    },
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      ...mapActions(['setUser']),
      handleLogin() {
        axios.get('/api/login', {
          params: {
            email: this.email,
            password: this.password
          }
        }).then(res => {
          this.setUser(res.data.data);
          this.$router.push('/my');
        })
      }
    }
  }
</script>

<style scoped>

</style>
