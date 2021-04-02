<template>
  <div class="bg-banner">
    <div class="login">
      <a-form-model
        :model="form"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="用户名">
          <a-input v-model="form.username" />
        </a-form-model-item>
        <a-form-model-item label="密码">
          <a-input v-model="form.password" />
        </a-form-model-item>
        <a-checkbox v-model="rememberPwd" style="float:right">
          记住密码
        </a-checkbox>
      </a-form-model>
      <a-form-model-item>
        <div class="sign">
          <a-button type="primary" @click="login">
            登录
          </a-button>
          <a-button >
            注册
          </a-button>
        </div>
      </a-form-model-item>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '星火系统',
      form: {
        username: '',
        password: ''
      },
      rememberPwd: false,
      labelCol: { span: 4, offset: 2 },
      wrapperCol: { span: 16, offset: 2 }
    }
  },
  methods: {
    login () {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style lang="less" scoped>
.bg-banner {
  height: 100vh;
  background: url('../../assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  .login {
    height: 300px;
    width: 450px;
    padding:  50px;
    opacity: 0.91;
    border-radius: 30px;
    background-color: #fff; /* 不支持线性的时候显示 */
    background-image: linear-gradient(
      to bottom right,
      rgb(163, 188, 178),
      rgb(55, 185, 233)
    );
    position: absolute;
    top: 50%;
    left: 65%;
    margin-top: -150px;
    margin-left: -150px;

    .sign{
      margin-top: 30px;
      button{
        width: 40%;
        margin-left: 25px;
      }
    }
  }
}
</style>
