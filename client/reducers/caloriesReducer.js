const calorieReducer = (state = { caloriesList: [] }, action) => {
  switch(action.type) {
    case 'ADD':
      state = {
        ...state,
        caloriesList: [...state.caloriesList, action.payload]
      }
      break;
  }
  return state
}

export default calorieReducer