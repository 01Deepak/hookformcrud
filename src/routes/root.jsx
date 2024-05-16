// import React from 'react'
import styles from "../assets/styles/root.module.scss"

const Root = () => {
  return (
    <>
    <div className={styles.sidebar}>
      <div className={styles.form_Container}>
        <form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            id="search-spinner"
            aria-hidden
            hidden={true}
          />
          <div
            className="sr-only"
            aria-live="polite"
          ></div>
        </form>
        <form method="post">
          <button type="submit">New</button>
        </form>
      </div>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/1`}>Your Name</a>
          </li>
          <li>
            <a href={`/contacts/2`}>Your Friend</a>
          </li>
        </ul>
      </nav>
    </div>
    <div id="detail"></div>
  </>
  )
}

export default Root