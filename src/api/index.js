import request from '@/utils/request'
const ApiBaseUrl = '/api'

/**
 * 用户登录验证
 * @param data
 * @returns {AxiosPromise}
 */
export function login(data) {
  return request({
    url: ApiBaseUrl + '/web/login',
    method: 'post',
    data
  })
}

/**
 * 用户注销
 * @param data
 * @returns {AxiosPromise}
 */
export function logout(data) {
  return request({
    url: ApiBaseUrl + '/web/logout',
    method: 'post',
    data
  })
}
