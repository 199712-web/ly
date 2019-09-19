'use strict'

import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 轻量级进度条
import 'nprogress/nprogress.css' // 轻量级进度条样式
NProgress.configure({ease:'ease',speed:1500});


// // http request 拦截器
// axios.interceptors.request.use(
//   console.log(store.state.userInfo),
//   config => {
//     if (store.state.userInfo) {
//       config.headers.Authorization = `token ${store.state.userInfo}`
//     }
//     return config
//   },
//   err => {
//     return Promise.reject(err)
//   })
//
// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           // 401 清除token信息并跳转到登录页面
//           router.replace({
//             path: 'login',
//             query: {redirect: router.currentRoute.fullPath}
//           })
//       }
//     }
//     // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//     return Promise.reject(error)
// })

// 请求超时拦截器
// axios.interceptors.request.use(config => {
//     return config
// }, error => {
//     return Promise.reject(error.response)
// })
//
// // 请求完成后的拦截器
// axios.interceptors.response.use(response => {
//     return response
// }, error => {
//     // 这里我们把错误信息扶正, 后面就不需要写 catch 了
//     return Promise.resolve(error.response)
// })

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  NProgress.done(true)
  return {
    status: -404,
    msg: '无法连接到服务器'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Message({
      showClose: true,
      message: res.msg,
      type: 'error'
    })
  }
  if (res.data && (!res.data.success)) {
  }
  NProgress.done(true)
  return res
}

export default {
  post (url, data) {
    NProgress.inc()
    // NProgress.set(0.4)
    return axios({
      method: 'post',
      // baseURL: 'http://111.230.239.224:8079/',
      baseURL: 'http://127.0.0.1:8089/',
      url,
      data: qs.stringify(data),
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Max-Age': '1209600'
         // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
        // 'Access-Control-Allow-Methods': 'GET,POST'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: 'http://127.0.0.1:8089/',
      // baseURL: 'http://localhost:8079/',
      url,
      params, // get 请求时带的参数
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
        // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
        // 'Access-Control-Allow-Methods': 'GET,POST'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  ajaxGet(url,params){
    return axios({
      method: 'get',
      //baseURL: 'http://127.0.0.1:8089/',
      // baseURL: 'http://localhost:8079/',
      url,
      params, // get 请求时带的参数
      timeout: 60000,
      // headers: {
      //   'X-Requested-With': 'XMLHttpRequest'
      // }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  ajaxPost(url,data){
    NProgress.inc()
    // NProgress.set(0.4)
    return axios({
      method: 'post',
      // baseURL: 'http://111.230.239.224:8079/',
      // baseURL: 'http://127.0.0.1:8089/',
      url,
      data: qs.stringify(data),
      timeout: 60000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Access-Control-Max-Age': '1209600'
         // 'Access-Control-Allow-Headers': 'Authorization,Origin, X-Requested-With, Content-Type, Accept'
        // 'Access-Control-Allow-Methods': 'GET,POST'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  getDm(){
    return [{ name:"院级领导", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_24", pId:"0", nodeid:"dept_21_24", oncheck:"check(dept_21_24)", value:"24"}, { name:"党委宣传部、网络工作部", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_21", pId:"0", nodeid:"dept_21_21", oncheck:"check(dept_21_21)", value:"21"}, { name:"组织部、统战部、教师工作部（合署）", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_54", pId:"0", nodeid:"dept_21_54", oncheck:"check(dept_21_54)", value:"54"}, { name:"党政办公室", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_26", pId:"0", nodeid:"dept_21_26", oncheck:"check(dept_21_26)", value:"26"}, { name:"人事处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_27", pId:"0", nodeid:"dept_21_27", oncheck:"check(dept_21_27)", value:"27"}, { name:"财务处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_28", pId:"0", nodeid:"dept_21_28", oncheck:"check(dept_21_28)", value:"28"}, { name:"保卫处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_29", pId:"0", nodeid:"dept_21_29", oncheck:"check(dept_21_29)", value:"29"}, { name:"教务处、校企合作处（合署）", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_25", pId:"0", nodeid:"dept_21_25", oncheck:"check(dept_21_25)", value:"25"}, { name:"国际与交流合作处、国际学院（合署）", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_53", pId:"0", nodeid:"dept_21_53", oncheck:"check(dept_21_53)", value:"53"}, { name:"学生处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_30", pId:"0", nodeid:"dept_21_30", oncheck:"check(dept_21_30)", value:"30"}, { name:"科技处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_32", pId:"0", nodeid:"dept_21_32", oncheck:"check(dept_21_32)", value:"32"}, { name:"招生就业处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_31", pId:"0", nodeid:"dept_21_31", oncheck:"check(dept_21_31)", value:"31"}, { name:"基建后勤处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_33", pId:"0", nodeid:"dept_21_33", oncheck:"check(dept_21_33)", value:"33"}, { name:"纪检监察处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_22", pId:"0", nodeid:"dept_21_22", oncheck:"check(dept_21_22)", value:"22"}, { name:"审计处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_55", pId:"0", nodeid:"dept_21_55", oncheck:"check(dept_21_55)", value:"55"}, { name:"国有资产管理处、招投标管理中心（合署)", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_35", pId:"0", nodeid:"dept_21_35", oncheck:"check(dept_21_35)", value:"35"}, { name:"老校区管理处、退离休工作部", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_23", pId:"0", nodeid:"dept_21_23", oncheck:"check(dept_21_23)", value:"23"}, { name:"矿业与环境工程学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_40", pId:"0", nodeid:"dept_21_40", oncheck:"check(dept_21_40)", value:"40"}, { name:"机械工程学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_41", pId:"0", nodeid:"dept_21_41", oncheck:"check(dept_21_41)", value:"41"}, { name:"建筑工程学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_42", pId:"0", nodeid:"dept_21_42", oncheck:"check(dept_21_42)", value:"42"}, { name:"信息工程学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_44", pId:"0", nodeid:"dept_21_44", oncheck:"check(dept_21_44)", value:"44"}, { name:"财经与贸易学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_43", pId:"0", nodeid:"dept_21_43", oncheck:"check(dept_21_43)", value:"43"}, { name:"地质与测绘工程学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_37", pId:"0", nodeid:"dept_21_37", oncheck:"check(dept_21_37)", value:"37"}, { name:"电气工程学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_39", pId:"0", nodeid:"dept_21_39", oncheck:"check(dept_21_39)", value:"39"}, { name:"艺术与设计学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_45", pId:"0", nodeid:"dept_21_45", oncheck:"check(dept_21_45)", value:"45"}, { name:"马克思主义学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_48", pId:"0", nodeid:"dept_21_48", oncheck:"check(dept_21_48)", value:"48"}, { name:"体育与国防教学部", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_50", pId:"0", nodeid:"dept_21_50", oncheck:"check(dept_21_50)", value:"50"}, { name:"基础教学部", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_38", pId:"0", nodeid:"dept_21_38", oncheck:"check(dept_21_38)", value:"38"}, { name:"工会办公室、校友联络处（合署）", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_34", pId:"0", nodeid:"dept_21_34", oncheck:"check(dept_21_34)", value:"34"}, { name:"继续教育学院", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_36", pId:"0", nodeid:"dept_21_36", oncheck:"check(dept_21_36)", value:"36"}, { name:"老校区置换领导小组", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_52", pId:"0", nodeid:"dept_21_52", oncheck:"check(dept_21_52)", value:"52"}, { name:"图书馆", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_46", pId:"0", nodeid:"dept_21_46", oncheck:"check(dept_21_46)", value:"46"}, { name:"卫生所", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_51", pId:"0", nodeid:"dept_21_51", oncheck:"check(dept_21_51)", value:"51"}, { name:"现代教育技术中心", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_47", pId:"0", nodeid:"dept_21_47", oncheck:"check(dept_21_47)", value:"47"}, { name:"新校区指挥部", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_56", pId:"0", nodeid:"dept_21_56", oncheck:"check(dept_21_56)", value:"56"}, { name:"质量管理处", icon:"/images/treeimages/subCopany_Colse_wev8.gif", checkbox:"Y", id:"dept_21_49", pId:"0", nodeid:"dept_21_49", oncheck:"check(dept_21_49)", value:"49"}] 
  }
}
