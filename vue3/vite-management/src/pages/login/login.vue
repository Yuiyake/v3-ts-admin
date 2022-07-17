<template>
  <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      class="demo-ruleForm"
  >
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input
          v-model="ruleForm.pwd"
          type="password"
          autocomplete="off"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginFn()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import {adminLoginApi, getAdminInfoApi} from '../../request/api'
import Cookies from "js-cookie";
import {useRouter} from 'vue-router'
import {useStore} from "vuex";

const state = reactive({
  ruleForm: {
    username: "",
    pwd: "",
  }
})

let { ruleForm } = toRefs(state);

let ruleFormRef = ref();

let router = useRouter();

let store = useStore();

const validatePed = (rule: unknown, value: string|undefined, cb: (msg?:string) => void) => {
  if(!value){cb("密码不能为空")}
  else cb();
}

const rules = reactive({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
  ],
  pwd: [
     { validator: validatePed, trigger: 'blur' },
  ]
})

const loginFn = () => {
  ruleFormRef.value.validate().then(() => {
    console.log('校验通过')
    adminLoginApi({
      "password": ruleForm.value.pwd,
      "username": ruleForm.value.username
    }).then(res => {
      if(res.code === 200) {
      //  存储token
        Cookies.set('token', res.data.tokenHead + res.data.token, {expires: 7})
        store.dispatch('getAdminInfo').then(res => {
          router.push('/homepage');
        })
      }
    })
  }).catch(() => {
    console.log('校验不通过');
  })
}



</script>

<style lang='less' scoped>

</style>
