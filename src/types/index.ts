export type ResponseValue = Todo[] // 할 일 목록

export type Todo = {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}
export type TodoAddParams = {
  order?: number
  title: string
}

export interface Todos {
  todos: Todo[]
  getTodoStatus?: 'idle' | 'loading' | 'failed'
  addTodoStatus?: 'idle' | 'loading' | 'failed'
  editTodoStatus?: 'idle' | 'loading' | 'failed'
  deleteToDoStatus?: 'idle' | 'loading' | 'failed'
}

type RequestBody = {
  todoIds: string[] // 새롭게 정렬할 할 일 ID 목록 (필수!)
}
