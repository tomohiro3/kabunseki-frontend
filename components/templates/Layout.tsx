import React from "react";
import Link from 'next/link'
import styles from "../../styles/layout.module.scss";
import { List } from "../atoms/List";
import { MediumIcon } from "../atoms/Icon";

export default function Layout({children}) {
  return(
    <>
      {/* <header>
        HEADER
      </header> */}
      <div className={styles.container}>
        <nav className={styles.nav}>
          <List>
            <li>
              <Link href="/" as="/">
                <a>
                  <MediumIcon iconName="icon-home1" primary />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/search" as="/search">
                <a>
                  <MediumIcon iconName="icon-search1" primary />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/mypage" as="/mypage">
                <a>
                  <MediumIcon iconName="icon-user1" primary />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/bookmark" as="/bookmark">
                <a>
                  <MediumIcon iconName="icon-star1" primary />
                </a>
              </Link>
            </li>
          </List>
        </nav>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </>
  )
}