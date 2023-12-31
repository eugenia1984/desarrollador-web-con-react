import { FC } from 'react'

import TaskItem from '../task-item/TaskItem'

import {  ITask } from '../../interfaces/ITask'

import styles from './TaskList.module.css'
interface TaskListProps {
  tasks: ITask[]
  onDeleted: (taskId: ITask["id"]) => void
  onCompleted: (taskId: ITask["id"]) => void
}

const TaskList: FC<TaskListProps> = ({
  tasks,
  onDeleted,
  onCompleted
}) => {

  const taskQuantity = tasks.length
  const completedTask = tasks.filter(task => task.isCompleted).length

  return (
    <section className={ styles.tasks }>
      <section className={ styles.header }>
        <div>
          <p>Created tasks</p>
          <span>{ taskQuantity }</span>
        </div>
        <div>
          <p className={ styles.textGreen }>Completed</p>
          <span>{ completedTask } of { taskQuantity }</span>
        </div>
      </section>
      <div className={ styles.list }>
        {
          tasks.map((task) => (
            <TaskItem
              key={ task.id }
              task={ task }
              onCompleted={ onCompleted }
              onDeleted={ onDeleted}
            />
          ))
        }

      </div>
    </section>
  )
}

export default TaskList