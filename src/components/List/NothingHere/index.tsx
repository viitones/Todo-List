
import clipboard from "/clipboard.svg"
import styles from "./styles.module.css"

export function NothingHere() {

return (
  <div className={styles.nothing}>
    <div>
      <img src={clipboard} alt="Nenhuma tarefa criada" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  </div>
)
}