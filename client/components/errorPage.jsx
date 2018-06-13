import React from 'react'

import '../css/errorPage.css'

const ErrorPage = (props) => {
  return (
    <div id='error'>
      <h1>ERROR 404: COULD NOT GET {props.props.location.pathname}</h1>
      {/* <h1>COULD NOT GET: {window.location.href}</h1> */}
    </div>
  )
}

export default ErrorPage 