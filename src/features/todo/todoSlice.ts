import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState, AppThunk } from '../../app/store'

export type TodoState = {
  id: string
  text: string
  title: string
  createdAt: string
  lastUpdatedAt: string
  isFinish: boolean
}
export interface TodoStates {
  todos: TodoState[]
  status: 'idle' | 'loading' | 'failed'
}

const initState: TodoStates = { todos: [], status: 'idle' }

function getNewItem() {
  return {
    id: Math.random().toString(36).substr(2, 9),
    text: 'foo bar',
    title: 'Foo',
    createdAt: '2023-05-24',
    lastUpdatedAt: '2023-05-24',
    isFinish: false,
    status: 'idle',
  }
}
async function getAsyncTodoItems() {
  return await new Promise((res) => {
    setTimeout(() => {
      res([
        {
          id: Math.random().toString(36).substr(2, 9),
          text: 'foo bar',
          title: 'Foo',
          createdAt: '2023-05-24',
          lastUpdatedAt: '2023-05-24',
          isFinish: false,
          status: 'idle',
        },
        {
          id: Math.random().toString(36).substr(2, 9),
          text: 'foo bar',
          title: 'Foo',
          createdAt: '2023-05-24',
          lastUpdatedAt: '2023-05-24',
          isFinish: false,
          status: 'idle',
        },
      ])
    }, 2000)
  })
}

export const getTodoAsync = createAsyncThunk('todo/get', async () => {
  const responseData = await getAsyncTodoItems()
  return responseData
})
export const deleteTodoAsyncById = createAsyncThunk('todo/delete', async (id: string) => {
  const responseData = await getAsyncTodoItems()
  // 대략 이런 느낌으로 api ㄱㄱ
  return responseData
})

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initState,
  reducers: {
    addItem: (state) => {
      // todo api 호출 로직
      const newItem = getNewItem()
      state.todos.push(newItem)
      return state
    },
  },
})

export const { addItem } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo
export default todoSlice.reducer
