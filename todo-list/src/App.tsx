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

  const toggleTaskCompletedById = (taskId: ID): void => {
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
        onCompleted={ toggleTaskCompletedById }
      />
    </>
  )
}

export default App
