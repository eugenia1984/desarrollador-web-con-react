import { FC } from 'react'

//import { BsFillCheckCircleFill } from 'react-icons/bs'
import { TbTrash } from 'react-icons/tb'

import { ITask } from '../../interfaces/ITask'

import styles from './TaskItem.module.css'
interface TaskItemProps {
  task: ITask
}

const TaskItem: FC<TaskItemProps> = ({ task }) => {
  return (
    <section className={ styles.task }>
      <button className={ styles.checkContainer }>
        <div />
      </button>
      <p>{ task.title }</p>
      <button className={ styles.deleteButton }>
        <TbTrash size={ 20 } />
      </button>
    </section>
  )
}

export default TaskItem