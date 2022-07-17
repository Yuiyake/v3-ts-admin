import {createRouter, createWebHashHistory,RouteRecordRaw} from 'vue-router';
import {App} from 'vue';
import Cookies from "js-cookie";
import store from '../store/index'
import { getAdminInfoApi } from '../request/api'
import component from "*.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login/login.vue')
    },
    // {
    //     path: '/homepage',
    //     name: 'homepage',
    //     component: () => import('../pages/homepage/homepage.vue')
    // },
    // {
    //     path: '/pms',
    //     name: 'pms',
    //     component: () => import('../pages/homepage/homepage.vue'),
    //     children: [
    //         {
    //             path: 'product',
    //             name: 'product',
    //             component: () => import('../pages/pms/product.vue'),
    //         }
    //     ]
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

// 封装 动态添加路由规则方法
const genRoutes = () => {
    const menus = store.getters.getNewMenus;
    // 循环菜单对象，生成动态路由
    for(let key in menus) {
        const newRoute: RouteRecordRaw = {
            path: '/' + menus[key].name,
            name: menus[key].name,
            component: () => import('../pages/homepage/homepage.vue'),
            redirect: '/' + menus[key].name + '/' + menus[key].children[0].name,
            children: []
        }
        for(let i=0; i<menus[key].children.length; i++) {
            // 对最后的一个元素进行children的push操作
            newRoute.children?.push({
                path: menus[key].children[i].name,
                name: menus[key].children[i].name,
                component: () => import(`../pages/${menus[key].name}/${menus[key].children[i].name}.vue`)
            })
        }

        router.addRoute(newRoute);
    }
    router.addRoute({
        path: '/',
        name: 'homepage',
        component: () => import('../pages/homepage/homepage.vue'),
        redirect: '/index',
        children: [{
            path: 'index',
            name: 'index',
            component: () => import('../pages/index/index.vue'),
        }]
    })
}

// 前置导航守卫
router.beforeEach((to, from, next) => {
    const token = Cookies.get('token');
    // token 和 vuex 里的menus 为空
    if(token && store.state.menus.length===0) {
        // 异步
        store.dispatch('getAdminInfo').then(() => {
            genRoutes();
            next(to);
        });
    } else if(token && store.state.menus.length !== 0 && from.path === '/login' && to.path === '/homepage') {
        // 首次登录校验
        genRoutes();
        next('/index')
    } else if(!token && to.path !== '/login') {
        next('/login')
    } else if(!token && to.path === '/login') {
        next(from)
    } else {
        next();
    }

})

// 封装router，有点依赖倒转内味。就是不在app上挂载router，而是在router里面封装一个app的方法，
// 再在app里引入，这样其他文件是用不了这个router的。
export const initRouter = (app: App<Element>) => {
    app.use(router)
}

// export default router
