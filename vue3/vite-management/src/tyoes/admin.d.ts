interface adminObjItf {
    id?: number;
    username?: string;
    nickName?: string;
    email?: string;
    password?: string;
    note?: string;
    status?: boolean;
}

interface AdminRoleFormData {
    userRoles: RoleObjItf[];
    roleLists: RoleObjItf[];
    adminId: number;
}
