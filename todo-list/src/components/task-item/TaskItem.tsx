import { FC } from 'react'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'

import {  ITask } from '../../interfaces/ITask'

import styles from './TaskItem.module.css'
interface TaskItemProps {
  task: ITask
  onCompleted: (taskId: ITask["id"]) => void
  onDeleted: (taskId: ITask["id"]) => void
}

const TaskItem: FC<TaskItemProps> = ({
  task,
  onCompleted,
  onDeleted
}) => {
  return (
    <section className={ styles.task }>
      <button
        className={ styles.checkContainer }
        onClick={ () => onCompleted(task.id) }
        aria-label='Button to check the task as completed'
      >
        {
          task.isCompleted ?
            <BsFillCheckCircleFill />
            : <div />
        }
      </button>
      <p className={ task.isCompleted ? styles.textCompleted : ''}>
        { task.title }
      </p>
      <button
        className={ styles.deleteButton }
        onClick={ () => onDeleted(task.id) }
        aria-label='Button to delete the task'
      >
        <TbTrash size={ 20 } />
      </button>
    </section>
  )
}

export default TaskItem