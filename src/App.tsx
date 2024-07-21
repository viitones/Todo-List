import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Header as ListHeader } from "./components/List/Header";
import { NothingHere } from "./components/List/NothingHere";
import { Task } from "./components/List/Task";

import styles from "./app.module.css"

export interface ITask {
  id: string,
  content: string,
  isCheck: boolean
}



export function App() {

const [tasks, setTasks] = useState<ITask[]>(() => {
  const notesOnStorage = localStorage.getItem("@todo:task")
  if(notesOnStorage) {
    return JSON.parse(notesOnStorage)
  }
  return []
})

const [newTaskText, setNewTaskText] = useState("")


function handleNewTaskChange(e: ChangeEvent<HTMLInputElement>) {

  setNewTaskText(e.target.value)
  
}

function handleCreateNewTask(e: FormEvent) {

  if(newTaskText === "") {
    alert("Por favor, digite algo!")
    return 
  }

  e.preventDefault()

  const newTask: ITask = {
    id: crypto.randomUUID(),
    content: newTaskText,
    isCheck: false
  }
  
  // const tasksOnStorage = [newTask, ...tasks]
  
  setTasks((state) => [newTask, ...state])
  // localStorage.setItem("@todo:task", JSON.stringify(tasksOnStorage))
  setNewTaskText("")
}

function deleteTask(taskToDelete: string) {
  if(!confirm("Deseja mesmo apagar essa tarefa?")) {
    return
  }

  const tasksWithoutDeletedOne = tasks.filter(task => {
    return task.id !== taskToDelete
  })

  setTasks(tasksWithoutDeletedOne)
}

function onFinishTask({id, value}: { id: string, value: boolean }) {
  const isCompleteTask = tasks.map(task => {
    if(task.id === id) {
      return { ...task, isCheck: value }
    }

    return { ...task }
  })

  setTasks(isCompleteTask)
}

const quantityOfTasks =  tasks.length
const isTaskChecked = tasks.reduce((prev, curr) => {
  if(curr.isCheck) {
    return prev + 1 
  }

  return prev
}, 0)

useEffect(() => {
  localStorage.setItem("@todo:task", JSON.stringify(tasks));
}, [tasks])

return (
  <>
    <Header />

    <main className={styles.main}>
      <form onSubmit={handleCreateNewTask}>
        <Input 
          required
          onChange={handleNewTaskChange}
          value={newTaskText}
        />
        <Button />
      </form>

      <section>
        <header>
          <ListHeader 
            numberOfTasks={quantityOfTasks}
            taskCheckeds={isTaskChecked}
          />
        </header>

        <nav>
          {
            quantityOfTasks > 0 ? (
              <div>
                {tasks.map(task => {
                  return (
                    <Task 
                      key={task.id}
                      data={task}
                      OnDeleteTask={deleteTask}
                      onFinishTask={onFinishTask}
                    />
                  )
                })}
              </div>
            ) : (
              <NothingHere />
            )
          }
        </nav>
      </section>
    </main>
  </>
)
}