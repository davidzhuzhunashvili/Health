const addCalorie = (calorie) => {
  return {
    type: 'ADD',
    payload: calorie
  }
}

const removeCalorie = (index) => {
  return {
    type: 'REMOVE',
    payload: index
  }
}

const toggleEnabled = (index) => {
  return {
    type: 'TOGGLE',
    payload: index
  }
}

export { addCalorie, removeCalorie, toggleEnabled }