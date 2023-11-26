import { FC, useState, FormEvent,  ChangeEvent } from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './TaskForm.module.css'

interface TaskFormProps {
  onAddTask: (taskTitle: string) => void
}

const initialTitleValue = ''

const TaskForm: FC<TaskFormProps> = ({ onAddTask }) => {

  const [title, setTitle] = useState<string>(initialTitleValue)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onAddTask(title)
    setTitle(initialTitleValue)
  }

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>  setTitle(event.target.value)
  
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