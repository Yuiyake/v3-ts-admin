<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="newForm" :label-width="formLabelWidth">
      <el-form-item label="账号：" >
        <el-input v-model="newForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="姓名：" >
        <el-input v-model="newForm.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="邮箱：" >
        <el-input v-model="newForm.email" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码：" >
        <el-input v-model="newForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="备注：" >
        <el-input v-model="newForm.note" type="textarea" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否启用：" >
        <el-radio v-model="newForm.status" :label="1">是</el-radio>
        <el-radio v-model="newForm.status" :label="0">否</el-radio>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="modifyAdmin"
        >确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref, toRef, watch } from 'vue'
import {updateAdminInfoApi} from '../../../request/api'


const props = defineProps<{
  visible: boolean,
  form: adminObjItf,
}>();

const state = reactive<{formLabelWidth: string; newForm:adminObjItf}>({
  formLabelWidth: '120px',
  newForm: {}
})
const { formLabelWidth, newForm } = toRefs(state)

// 因为setup是在beforeCreate之前的，所以要用监听，再拷贝
watch(() => props.form, () => {
  newForm.value = {...props.form};
})

const emit = defineEmits<{
  (event: 'close', r?: 'reload'): void
}>();
const close = (r?: 'reload') => {
  // 把关闭的指令传到父组件，让父组件来处理visible的状态
  emit('close', r)
}
const modifyAdmin = () => {
  updateAdminInfoApi(newForm.value.id as number, newForm.value).then(res => {
    if(res.code === 200){
      close('reload');
    }
  })

}

</script>

<style lang='less' scoped>

</style>
