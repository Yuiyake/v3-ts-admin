<template>
 <div>
   <el-table :data="tableData" border style="width: 100%">
     <el-table-column prop="id" label="编号" />
     <el-table-column prop="username" label="账号" />
     <el-table-column prop="nickName" label="姓名" />
     <el-table-column prop="email" label="邮箱" />
     <el-table-column prop="createTime" label="添加时间" >
       <template #default="scope">
         {{ formateDate(scope.row.createTime) }}
       </template>
     </el-table-column>
     <el-table-column prop="loginTime" label="最后登录" >
       <template #default="scope">
         {{ formateDate(scope.row.loginTime) }}
       </template>
     </el-table-column>
     <el-table-column label="是否启用" >
       <template #default="scope">
         <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0"></el-switch>
       </template>
     </el-table-column>
     <el-table-column label="操作" >
       <template #default="{ row }">
         <el-button type="text">分配角色</el-button>
         <el-button type="text" @click="editAdmin(row)">编辑</el-button>
       </template>
     </el-table-column>
   </el-table>
   <EditAdmin :visible="visible" @close="closeDialog" :form="rowData" />
 </div>
</template>

<script lang='ts' setup>
import { reactive, toRefs, ref } from 'vue'
import {getAdminListApi} from '../../request/api'
import EditAdmin from './conponents/editAdmin.vue'

const state = reactive<{
  tableData: {}[];
  visible: boolean;
  rowData: adminObjItf
}>({
  tableData: [],
  visible: false,
  rowData: {}
})
const {tableData, visible, rowData} = toRefs(state);

const fetchData = () => {
  getAdminListApi({
    keyword: '',
    pageSize: 10,
    pageNum: 1
  }).then(res => {
    if(res.code === 200){
      tableData.value = res.data.list
    }
  })
}
fetchData();

// 格式化时间
const formateDate = (time: string | undefined) => {
  if(!time) return '';
  const date =  new Date(time);
  let year = date.getFullYear();
  let month = addZero(date.getMonth()+1);
  let day = addZero(date.getDate());
  let hours = addZero(date.getHours());
  let min = addZero(date.getMinutes());
  let seconds = addZero(date.getSeconds());
  return `${year}-${month}-${day} ${hours}:${min}:${seconds}`;
}
const addZero = (num:number) => {
  return num>9? num: '0'+num;
}

const editAdmin = (row: adminObjItf) => {
  visible.value = true;
  rowData.value = {...row};
}
const closeDialog = (r?: 'reload') => {
  visible.value = false;
  if(r === 'reload') {
    fetchData();
  }
}


</script>

<style lang='less' scoped>

</style>
