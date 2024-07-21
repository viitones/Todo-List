

import logo from "/Logo.svg"

import styles from "./styles.module.css"

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo do todo - um foguete" />
    </header>
  )
}