import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './TaskForm.module.css'

const TaskForm = () => {
  return (
    <form className={ styles.newTaskForm }>
      <input placeholder="Add a new task" type="text" />
      <button>
        Create  <AiOutlinePlusCircle size={ 20 } />
      </button>
    </form>
  )
}

export default TaskForm