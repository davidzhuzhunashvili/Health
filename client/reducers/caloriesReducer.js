const calorieReducer = (state = { caloriesList: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        caloriesList: [action.payload, ...state.caloriesList]
      }
      break;

    case 'REMOVE':
      state = {
        ...state,
        caloriesList: [
          ...state.caloriesList.slice(0, action.payload),
          ...state.caloriesList.slice(action.payload + 1)
        ]
      }
  }

  return state
}

export default calorieReducer