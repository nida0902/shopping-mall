import Cookies from 'js-cookie'

const KEY = 'token'
export function getToken() {
  return Cookies.get(KEY)
}

export function setToken(token) {
  return Cookies.set(KEY, token)
}

export function removeToken() {
  return Cookies.remove(KEY)
}

export function setStore(key, value) {
  if (!key) return
  if (typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export function getStore(key) {
  if (!key) return
  const value = window.localStorage.getItem(key)
  if (!value) {
    return ''
  }
  return JSON.parse(value)
}

export function removeStore(key) {
  if (!key) return
  window.localStorage.removeItem(key)
}
