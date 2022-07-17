<template>
  <el-dialog v-model="visible" title="Shipping address" :before-close="close">
    <el-form :model="form" :label-width="formLabelWidth">
      <el-form-item label="Promotion name" >
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" >
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
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
import { reactive, toRefs, ref } from 'vue'

const props = defineProps<{
  visible: boolean
}>();

const state = reactive({
  form: {
    name: '',

  },
  formLabelWidth: '120px'
})
const { form, formLabelWidth } = toRefs(state)

const emit = defineEmits<{
  (event: 'close'): void
}>();
const close = () => {
  // 把关闭的指令传到父组件，让父组件来处理visible的状态
  emit('close')
}
const modifyAdmin = () => {
  close();
}

</script>

<style lang='less' scoped>

</style>
