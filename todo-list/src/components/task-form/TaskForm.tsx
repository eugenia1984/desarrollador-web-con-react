import { FC, useState } from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './TaskForm.module.css'

interface TaskFormProps {
  onAddTask: (taskTitle: string) => void
}

const TaskForm: FC<TaskFormProps> = ({ onAddTask }) => {

  const [title, setTitle] = useState<string>('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onAddTask(title)
  }

  const onChangeTitle = (event) =>  setTitle(event.target.value)
  
  return (
    <form
      onSubmit={ handleSubmit }
      className={ styles.newTaskForm }
    >
      <input
        placeholder="Add a new task"
        type="text"
        value={ title }
        onChange={ onChangeTitle}
      />
      <button>
        Create  <AiOutlinePlusCircle size={ 20 } />
      </button>
    </form>
  )
}

export default TaskForm