import router from "."; // 路由实例
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 配置加载进度条，不显示旋转图标
NProgress.configure({
    // 是否显示旋转图标，默认为 true
    // showSpinner: false,
});

// 设置白名单，不需要重定向的路径列表
const whiteList = ['/login'];

// 检测本地是否存在 token
function checkToken() {
    const token = localStorage.getItem('token'); // 从 localStorage 中获取 token
    return token !== null; // 如果 token 不为 null，则返回 true，否则返回 false
}

// 路由导航前的钩子
router.beforeEach((to, _from, next) => {
    // 如果目标路由在白名单中，则直接放行，不显示进度条
    if (whiteList.includes(to.path)) {
        next();
    } else {
        // 开启加载进度条
        NProgress.start();
        // 检查用户是否已经登录
        if (checkToken()) {
            // 如果用户已经登录，则跳转到指定的页面
            if (to.path === '/') {
                // 跳转到首页的仪表盘页面
                next('/dashboard');
            } else {
                next(); 
            }
        } else {
            // 如果用户未登录，则重定向到登录页面
            next('/login'); // 假设登录页面的路径为 '/login'，需要根据你的实际情况修改
        }
    }
});

// 路由导航后的钩子
router.afterEach(() => {
    // 关闭加载进度条
    NProgress.done();
});
