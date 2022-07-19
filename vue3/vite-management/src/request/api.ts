import request from "./request";
import qs from 'qs'

interface AdminLoginData {
    "password": string,
    "username": string
}

type promiseRes<T = {}> = Promise<ManageResult<T>>

interface ManageResult<T> {
    code: number,
    data: T;
    // message: string;
}
// 登录返回接口
interface AdminLoginRes {
    token: string;
    tokenHead: string;
}
// 当前用户信息
interface AdminInfoRes {
    menus: [];
}

interface adminListParams {
    keyword: string,
    pageNum: number,
    pageSize: number
}
interface list {

}

// 登录api
export const adminLoginApi = (data: AdminLoginData):promiseRes<AdminLoginRes> => request.post('/admin/login', data);
// 获取当前登录用户的信息
export const getAdminInfoApi = ():promiseRes<AdminInfoRes> => request.get('/admin/info');
// 获取用户权限表格数据
export const getAdminListApi = (data: adminListParams):promiseRes<{ list: {}[] }> => request.get('/admin/list', {params: data});
// 修改用户信息
export const updateAdminInfoApi = (id: number, data: adminObjItf):promiseRes => request.post('/admin/update/' + id , data);
// 获取用户权限数据
export const getRoleListAll = ():promiseRes<RoleObjItf[]> => request.get('/role/listAll/');
// 根据用户id获取角色
export const getAdminRoleById = (id:number):promiseRes<RoleObjItf[]> => request.get('/admin/role/' + id);
// 给用户分配角色
export const updateAdminRole = (data: {adminId: number; roleIds: string}):promiseRes => request.post('/admin/role/update/', qs.stringify(data));
