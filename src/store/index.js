// 提供操作用户信息的工具函数

// 设置用户信息
// 获取用户信息
// 删除用户信息
const KEY = 'hm-toutiao-pc-91-user'
export default {
  setUser (user) {
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
