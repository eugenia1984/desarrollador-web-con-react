import { useState } from 'react'

import Header from './components/header/Header'
import TaskList from './components/task-list/TaskList'

import { ID, ITask } from './interfaces/ITask'

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  const addTask = (taskTitle: ITask["title"]) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }

  const deleteTaskById = (taskId: ITask["id"]): void => {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTasks(newTask)
  }

  const toggleTaskCompletedById = (taskId: ITask["id"]): void => {
    const newTasks = tasks.map(task => {

      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTasks(newTasks)
  }

  return (
    <>
      <Header
        onAddTask={ addTask }
      />
      <TaskList
        tasks={ tasks }
        onDeleted={ deleteTaskById }
        onCompleted={ toggleTaskCompletedById }
      />
    </>
  )
}

export default App
