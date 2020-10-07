import React from 'react';
import Link from 'next/link';
import styles from '../../styles/layout.module.scss';
import { List } from '../atoms/List';
import { MediumIcon } from '../atoms/Icon';

export default function Layout({ children }) {
  return (
    <>
      {/* <header>
        HEADER
      </header> */}
      <div className={styles.container}>
        <nav className={styles.nav}>
          <List>
            <li>
              <Link href="/">
                <a aria-label="TOPページに移る">
                  <MediumIcon role="button" iconName="icon-home1" primary />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a aria-label="検索ページに移る">
                  <MediumIcon role="button" iconName="icon-search1" primary />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/mypage">
                <a aria-label="マイページに移る">
                  <MediumIcon role="button" iconName="icon-user1" primary />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/bookmark">
                <a aria-label="検索ページに移る">
                  <MediumIcon role="button" iconName="icon-star1" primary />
                </a>
              </Link>
            </li>
          </List>
        </nav>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
}
