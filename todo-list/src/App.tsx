import { useState } from 'react'

import Header from './components/header/Header'
import TaskList from './components/task-list/TaskList'

import { ITask } from './interfaces/ITask'

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

  return (
    <>
      <Header onAddTask={ addTask } />
      <TaskList tasks={ tasks } />
    </>
  )
}

export default App
