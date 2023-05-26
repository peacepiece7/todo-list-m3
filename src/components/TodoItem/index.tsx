import React, { useState } from 'react'
import dayjs from 'dayjs'

import { Todo } from '../../types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectTodo } from '../../features/todo/todoSlice'
import { editTodoAsync } from '../../features/todo/todoAsync'

import Spinner from '../Spinner'

import styles from './index.module.css'
import { DATE_FORMAT } from '../../constants'

type Props = {
  todo: Todo
}
export default function TodoItem({ todo }: Props) {
  const [isOptimisticDone, setIsOptimisticDone] = useState(todo.done)
  console.log('isOptimisticDone : ', isOptimisticDone)
  const dispath = useAppDispatch()
  const { todos } = useAppSelector(selectTodo)

  function changeTodoStatus(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement
    const todoID = target.closest('li')?.dataset.todoid
    setIsOptimisticDone(!isOptimisticDone)
    const title = target.closest('li')?.querySelector('p')?.textContent as string

    todos.map((todo) => {
      if (todo.id === todoID) {
        dispath(editTodoAsync({ ...todo, done: !isOptimisticDone, title }))
      }
    })
  }
  return (
    <li
      className={styles.item}
      data-todoid={todo.id}
    >
      <button
        className={styles.button}
        type='button'
        onClick={changeTodoStatus}
      >
        {isOptimisticDone ? 'DONE' : 'DOING'}
      </button>

      <div>
        <p>{todo.title}</p>
      </div>
      <div>
        <div>생성일 {dayjs(todo.createdAt).format(DATE_FORMAT)}</div>
        <div>마지막 수정일 {dayjs(todo.updatedAt).format(DATE_FORMAT)}</div>
      </div>
    </li>
  )
}
