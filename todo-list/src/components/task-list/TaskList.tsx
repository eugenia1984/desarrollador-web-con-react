import { FC } from 'react'

import TaskItem from '../task-item/TaskItem'

import { ITask } from '../../interfaces/ITask'

import styles from './TaskList.module.css'
interface TaskListProps {
  tasks: ITask[]
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {
  return (
    <section className={ styles.tasks }>
      <section className={ styles.header }>
        <div>
          <p>Created tasks</p>
          <span>10</span>
        </div>
        <div>
          <p className={ styles.textGreen }>Completed</p>
          <span>1 of 10</span>
        </div>
      </section>
      <div className={ styles.list }>
        {
          tasks.map((task) => (
            <TaskItem key={ task.id } task={ task } />
          ))
        }

      </div>
    </section>
  )
}

export default TaskList