import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectTodo } from '../../features/todo/todoSlice'
import { getTodoAsync } from '../../features/todo/todoAsync'

import TodoItem from '../TodoItem'
import Spinner from '../Spinner'

import styles from './index.module.css'

export default function TodoList() {
  const { todos, getTodoStatus } = useAppSelector(selectTodo)
  const dispath = useAppDispatch()

  useEffect(() => {
    dispath(getTodoAsync())
  }, [])

  return (
    <ul className={styles.todoList}>
      {getTodoStatus === 'loading' && <Spinner />}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </ul>
  )
}
