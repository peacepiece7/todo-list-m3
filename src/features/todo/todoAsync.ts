import { createAsyncThunk } from '@reduxjs/toolkit'

import { TodoAddParams, Todo } from '../../types'
import { getTodosAPI, addTodoAPI, editTodoAPI } from '../../api'

export const getTodoAsync = createAsyncThunk('todo/get', async () => {
  const responseData = await getTodosAPI()
  return responseData
})
export const addTodoAsync = createAsyncThunk('todo/add', async (todo: TodoAddParams) => {
  const responseData = await addTodoAPI(todo)
  return responseData
})

export const editTodoAsync = createAsyncThunk('todo/edit', async (todo: Todo) => {
  const responseData = await editTodoAPI(todo)
  return responseData
})
