const authReducer = (state = { isLoggedIn: '' }, action) => {
  switch (action.type) {
    case 'LOGIN':
      state = {
        ...state,
        isLoggedIn: true,
      }
      break

    case 'LOGOUT':
      state = {
        ...state,
        isLoggedIn: false,
      }
      break
  }

  return state
}

export default authReducer