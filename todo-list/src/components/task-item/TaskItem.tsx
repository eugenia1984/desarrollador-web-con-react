import { FC } from 'react'

import { BsFillCheckCircleFill } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'

import { ID, ITask } from '../../interfaces/ITask'

import styles from './TaskItem.module.css'
interface TaskItemProps {
  task: ITask
  onCompleted: (taskId: ID) => void
}

const TaskItem: FC<TaskItemProps> = ({ task, onCompleted }) => {
  return (
    <section className={ styles.task }>
      <button
        className={ styles.checkContainer }
        onClick={ () => onCompleted(task.id) }
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
      <button className={ styles.deleteButton }>
        <TbTrash size={ 20 } />
      </button>
    </section>
  )
}

export default TaskItem