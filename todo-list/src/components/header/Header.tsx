import todoLogo from '../../assets/todoLogo.svg'

import styles from './Header.module.css'

import { AiOutlinePlusCircle } from 'react-icons/ai'

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
      <form className={ styles.newTaskForm}>
        <input placeholder="Add a new task" type="text" />
        <button>
          Create  <AiOutlinePlusCircle size={ 20 } />
        </button>
      </form>
    </header>
  )
}

export default Header