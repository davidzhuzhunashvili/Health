const login = () => {
  return {
    type: 'LOGIN',
    payload: null,
  }
}

const logout = () => {
  return {
    type: 'LOGOUT',
    payload: null,
  }
}

export { login, logout }