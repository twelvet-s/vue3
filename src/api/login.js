import request from '@/utils/request'

// 登录方法
export function login(username, password, code, uuid) {
  const data = {
    username,
    password,
    grant_type: "password",
    scope: "server",
    code,
    uuid
  }
  const auth = 'Basic ' + window.btoa("twelvet:123456")
  return request({
    url: '/auth/oauth2/token',
    headers: {
      Authorization: auth
    },
    method: 'post',
    params: data,
    data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/user/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/auth/token/logout',
    method: 'DELETE'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}