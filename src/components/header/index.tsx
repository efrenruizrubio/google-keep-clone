'use client'

import Hamburger from "hamburger-react"
import { IconArrowLeft, IconSearch, IconX } from "@tabler/icons-react"

import { useToggle } from "@/hooks/use-toggle"
import styles from './header.module.css'

export default function Header(): JSX.Element {
  const { value: hamburgerValue, toggle: hamburgerToggle } = useToggle()
  const { value: searchValue, toggle: searchToggle } = useToggle()
  
  return (
    <header className={styles.header}>
      <Hamburger
        toggled={hamburgerValue}
        toggle={hamburgerToggle}
      />
      <div className={styles.search}>
        <input
          type="text"
          hidden={!searchValue}
          // onChange={searchToggle}
          className={styles.input}
        />
        {searchValue && (
          <IconArrowLeft 
            className={`${styles.icon} ${styles.left}`}
          />
        )}
        {
          !searchValue ? (
            <IconSearch
              onClick={searchToggle}
              className={`${styles.icon} ${styles.right}`}
            />
          ) : (
            <IconX
              onClick={searchToggle}
              className={`${styles.icon} ${styles.right}`}
            />
          )
        }

      </div>
    </header>
  )
}