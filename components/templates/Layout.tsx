import React from "react";
import Link from 'next/link'
import styles from "../../styles/Layout.module.scss";
import Icons from "../../assets/sprite.svg";

import { List, ListItem } from "../atoms/List";

export default function Layout({children}) {
  // console.log((id) => Icons(id));
  return(
    <>
      <header>
        HEADER
      </header>
      <div className={styles.wrap}>
        <nav>
          <List>
            <ListItem>
              <Link href="/" as="/">
                <a>TOP</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/search" as="/search">
                <a>検索</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/mypage" as="/mypage">
                <a>マイページ</a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/bookmark" as="/bookmark">
                <a>お気に入り</a>
              </Link>
            </ListItem>
          </List>
        </nav>
        <main>
          MAIN CONTENT
          <svg>
            <use xlinkHref={`${Icons}#icon-user`} />
          </svg>
          {children}
        </main>
      </div>
    </>
  )
}