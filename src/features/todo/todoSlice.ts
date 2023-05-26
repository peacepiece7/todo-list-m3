import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

import { Todos } from '../../types'
import { editTodoAsync, getTodoAsync } from './todoAsync'

const initState: Todos = { todos: [] }

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initState,
  /**
   * @description 동기 작업만 수행하는 Reducer입니다.
   * @example
   * addItem: (state) => {
   *  const newItem = getNewItem()
   *  state.todos.push(newItem)
   *  return state
   * }
   * ...out of the todoSlice boundary
   * export const { addItem } = todoSlice.actions
   */
  reducers: {},

  /**
   * @description 비동기 작업을 수행하는 Reducer입니다.
   */
  extraReducers: (builder) => {
    builder
      // * getTodoAsync
      .addCase(getTodoAsync.pending, (state) => {
        state.getTodoStatus = 'loading'
      })
      .addCase(getTodoAsync.fulfilled, (state, action) => {
        state.getTodoStatus = 'idle'
        state.todos = action.payload
      })
      .addCase(getTodoAsync.rejected, (state) => {
        state.getTodoStatus = 'failed'
        // ? 이 부분을 어떻게 처리해주는게 좋을까?
        state.todos = []
      })

      // * editTodoAsync
      .addCase(editTodoAsync.pending, (state, action) => {
        state.editTodoStatus = 'loading'
      })
      .addCase(editTodoAsync.fulfilled, (state, action) => {
        state.editTodoStatus = 'idle'
        state.todos = [
          ...state.todos.map((todo) => (todo.id === action.payload.id ? action.payload : todo)),
        ]
      })
      .addCase(editTodoAsync.rejected, (state) => {
        state.editTodoStatus = 'failed'
        // ? 이 부분을 어떻게 처리해주는게 좋을까?
        state.todos = []
      })
  },
})

export const selectTodo = (state: RootState) => state.todo
export default todoSlice.reducer
