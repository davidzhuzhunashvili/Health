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
      break;

    case 'TOGGLE':
      /* USE THIS ONCE FUNCTIONS ARE ADDED */
      /*
      let current = [...state.caloriesList][action.payload]
      const newObject = {
        calories: current.calories,
        amount: current.amount,
        info: current.info,
        enabled: !current.enabled  
      }
      */
      const current = JSON.parse(JSON.stringify([...state.caloriesList][action.payload]))
      current.enabled = !current.enabled

      state = {
        ...state,
        caloriesList: [
          ...state.caloriesList.slice(0, action.payload),
          current,
          ...state.caloriesList.slice(action.payload + 1)
        ]
      }
  }

  return state
}

export default calorieReducer