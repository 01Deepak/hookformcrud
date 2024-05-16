// import React from 'react'
import { useRouteError } from 'react-router-dom'
import styles from "../../assets/styles/errorPage.module.scss"

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.error_page}>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <p>
      <i>{error.statusText || error.message}</i>
    </p>
  </div>
  )
}

export default ErrorPage