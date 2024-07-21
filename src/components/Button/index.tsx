import { PlusCircle } from "@phosphor-icons/react";

import styles from "./styles.module.css"

export function Button() {

return (
  <button className={styles.button}>
    Criar
    <PlusCircle size={24}/>
  </button>
)
}