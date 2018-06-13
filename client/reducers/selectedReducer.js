const selectedReducer = (state = { item: '', amount: '' }, action) => {
  switch (action.type) {
    case 'SET':
      state = {
        ...state,
        ...action.payload
      }
      break
  }

  return state
}

export default selectedReducer