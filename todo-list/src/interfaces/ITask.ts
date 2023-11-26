export type ID = `${ string }-${ string }-${ string }-${ string }-${ string }`

export interface ITask {
  id: ID,
  title: string,
  isCompleted: boolean
}