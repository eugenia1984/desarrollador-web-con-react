import { FC } from 'react'

import todoLogo from '../../assets/todoLogo.svg'
import TaskForm from '../task-form/TaskForm'

import styles from './Header.module.css'

interface HeaderProps {
  onAddTask: (taskTitle: string) => void
}

const Header: FC<HeaderProps> = ({ onAddTask }) => {
  return (
    <header className={ styles.header }>
      <h1>
        <img
          src={ todoLogo }
          className={ styles.logo }
          width="30"
          alt="To do list"
        /> <span className={ styles['text-green'] }>To-Do</span> <span className={ styles['text-yellow']}>List</span>
      </h1>
      <TaskForm onAddTask={ onAddTask } />
    </header>
  )
}

export default Header