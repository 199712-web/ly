import Test from './views/test/Test.vue'
import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import UserList from './views/user/UserList.vue'
import PermiList from './views/permission/PermisList.vue'
import RoleList from './views/permission/RoleList.vue'
import DictionaryList from './views/dictionary/DictionaryList.vue'
import OperatingRecord from './views/system/OperatingRecord.vue'
import Statistics from './views/system/Statistics.vue'
import LoginLog from './views/system/LoginLog.vue'
import Ueditor from './views/ueditor.vue'
import TaskList from './views/task/TaskList'


let router = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '任务管理',
        iconCls: 'icon iconfont icon-yonghurenxiang',//图标样式class
        children: [
            { path: '/tasklist', component: TaskList, name: '任务列表'},
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'icon iconfont icon-yonghurenxiang',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/userList', component: UserList, name: '用户列表' },
            { path: '/ueditor', component: Ueditor, name: '富文本测试' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '权限管理',
        iconCls: 'icon iconfont icon-Slice',
        children: [
            { path: '/permisList', component: PermiList, name: '菜单列表' },
            { path: '/roleList', component: RoleList, name: '角色权限' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '数据字典',
        iconCls: 'icon iconfont icon-dic-manager',
        children: [
            { path: '/dictionaryList', component: DictionaryList, name: '字典属性' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '系统管理',
        iconCls: 'icon iconfont icon-xitongguanli',
        children: [
            { path: '/operatingRecord', component: OperatingRecord, name: '操作记录' },
            { path: '/loginLog', component: LoginLog, name: '登陆日志' },
            { path: '/statistics', component: Statistics, name: '统计图表' },

        ]
    },
    {
        path: '/',
        component: Home,
        name: 'TEST',
        iconCls: 'icon iconfont icon-ceshi',
        children: [
            { path: '/Test', component: Test, name: '测试页面' },
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];


export default router;
