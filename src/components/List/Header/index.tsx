import styles from "./styles.module.css"

interface INumberOfTasks {
  numberOfTasks: number,
  taskCheckeds: number
}

export function Header({numberOfTasks, taskCheckeds}: INumberOfTasks) {

return (
  <>
    <p className={styles.create}>
      Tarefas criadas
      <span>
        {numberOfTasks}
      </span>
    </p>
    <p className={styles.create}>
      Concluídas
      <span>
        {numberOfTasks === 0 
          ? numberOfTasks
          : `${taskCheckeds} de ${numberOfTasks}`
        }
      </span>
    </p>
  </>
)
}