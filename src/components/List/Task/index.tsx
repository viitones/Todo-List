import { Check, Trash } from "@phosphor-icons/react";

import { ITask } from "../../../App";

import styles from "./styles.module.css"

interface TaskProps{
  data: ITask;
  OnDeleteTask: (taskToDelete: string) => void;
  onFinishTask: ({id, value}: { id: string, value: boolean }) => void
}

export function Task({ data, OnDeleteTask, onFinishTask }: TaskProps) {


  function handleDeleteTask() {
    OnDeleteTask(data.id)
    
  }

  function handleFinishTask() {
    onFinishTask({ id: data.id, value: !data.isCheck })
  }

  const checkboxChecked = data.isCheck ? styles["checkbox-checked"] : styles["checkbox-unchecked"]

  const paragraphChecked = data.isCheck ? styles["paragraph"] : styles[""]

return (
  <div className={styles.task}>
    <div>
      <label htmlFor="checkbox" onClick={handleFinishTask}>

        <input readOnly type="checkbox" checked={data.isCheck} />
        <span className={`${styles.checkbox} ${checkboxChecked}`}>
          {data.isCheck && <Check size={12} />}
        </span>

        <p className={`${paragraphChecked}`}>
          {data.content}
        </p>
      </label>
    </div>
    <button
      onClick={handleDeleteTask}
    >
      <Trash size={20}/>
    </button>
  </div>
)
}