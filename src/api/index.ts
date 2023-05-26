import axios from 'axios'
import { Todo, TodoAddParams } from '../types'
axios.defaults.baseURL = 'https://asia-northeast3-heropy-api.cloudfunctions.net'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.username = 'KDT5_JeongTaeUk'
axios.defaults.headers.apikey = 'KDT5_nREmPe9B'

export async function getTodosAPI() {
  const { data } = await axios('/api/todos', {
    method: 'GET',
  })
  return data
}

export async function addTodoAPI(todo: TodoAddParams) {
  const { data } = await axios('api/todos', {
    method: 'POST',
    data: JSON.stringify(todo),
  })
  return data
}

export async function editTodoAPI(todo: Todo) {
  const { data } = await axios(`/api/todos/${todo.id}`, {
    method: 'PUT',
    data: JSON.stringify(todo),
  })
  return data
}
