import React from "react";
// import Link from 'next/link'
import styles from "../../styles/Layout.module.scss";

export default function Layout({children}) {
  return(
    <>
      <header>
        HEADER
      </header>
      <div className={styles.wrap}>
        <nav>
          <ul>
            <li>top</li>
            <li>search</li>
            <li>user</li>
            <li>bookmark</li>
          </ul>
        </nav>
        <main>
          MAIN CONTENT
          {children}
        </main>
      </div>
    </>
  )
}