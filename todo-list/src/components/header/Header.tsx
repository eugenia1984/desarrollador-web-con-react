import todoLogo from '../../assets/todoLogo.svg'
import TaskForm from '../task-form/TaskForm'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={ styles.header }>
      <h1>
        <img
          src={ todoLogo }
          className={ styles.logo }
          width="30"
          alt="To do list"
        /> To-Do List
      </h1>
      <TaskForm />
    </header>
  )
}

export default Header