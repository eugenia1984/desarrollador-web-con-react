import { useState, useEffect } from 'react'

import Header from './components/header/Header'
import TaskList from './components/task-list/TaskList'
import Footer from './components/footer/Footer'

import { ITask } from './interfaces/ITask'
import { LOCAL_STORAGE_KEY } from './utils/constants'

function App() {

  const [tasks, setTasks] = useState<ITask[]>([])

  const loadSavedTasks = (): void => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)

    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  const setTasksAndSave = (newTasks: ITask[]): void => {
    setTasks(newTasks)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }

  const addTask = (taskTitle: ITask["title"]): void => {
    setTasksAndSave([
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
    setTasksAndSave(newTask)
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

    setTasksAndSave(newTasks)
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
      <Footer/>
    </>
  )
}

export default App
