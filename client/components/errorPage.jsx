import React from 'react'

const ErrorPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>ERROR 404: PAGE NOT FOUND</h1>
      <h1>COULD NOT GET: {props.props.location.pathname}</h1>
      {/* <h1>COULD NOT GET: {window.location.href}</h1> */}
    </div>
  )
}

export default ErrorPage 