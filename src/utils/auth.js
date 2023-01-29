import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const RefreshToken = 'Admin-Token-Refresh-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function getRefreshToken() {
  return Cookies.get(RefreshToken)
}

export function setRefreshToken(refreshToken) {
  return Cookies.set(RefreshToken, refreshToken)
}

export function removeToken() {
  Cookies.remove(RefreshToken)
  return Cookies.remove(TokenKey)
}
