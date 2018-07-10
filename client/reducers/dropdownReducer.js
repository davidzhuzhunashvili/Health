const dropdownReducer = (state = { show: false }, action) => {
  switch (action.type) {
    case 'DROPDOWN_TOGGLE':
      state = {
        ...state,
        show: !state.show,
      }
      break
  }

  return state
}

export default dropdownReducer