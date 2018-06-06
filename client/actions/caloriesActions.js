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

export { addCalorie, removeCalorie }