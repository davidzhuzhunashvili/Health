const addCalorie = (calorie) => {
  return {
    type: 'ADD',
    payload: calorie 
  }
}

export { addCalorie }