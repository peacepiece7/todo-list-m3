import React, { useEffect, useMemo } from 'react'
import changeTextColor from '../../utils/gradient'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addItem, selectTodo } from '../../features/todo/todoSlice'

import styles from './index.module.css'

function getDay() {
  const date = new Date()
  const day = `${date.toLocaleDateString().split('.').join('')} ${date.toDateString().slice(0, 3)}`
  return day
}

export default function Title() {
  const { todos, status } = useAppSelector(selectTodo)
  const dispath = useAppDispatch()

  console.log('todos : ', todos)

  // 현제 날짜를 가져옵니다.
  const today = useMemo(() => getDay(), [])

  useEffect(() => {
    // title gradient관련 설정입니다.
    Array.from(document.querySelectorAll('.gradient-cover p')).map((el, i) => {
      if (i === 0) el.setAttribute('data-before', 'FastCampus To Do List')
      else if (i === 1) el.setAttribute('data-before', today)
    })
    // '.gradient-cover p' 의 색깔을 2초마다 변경합니다.
    // React.strict모드에서는 두 번 동작하니까 주의해주세요.
    changeTextColor('.gradient-cover p', 2000)
  }, [])

  return (
    <h1 className={[styles.header, 'gradient'].join(' ')}>
      <div className='gradient-cover'>
        <p>FastCampus To Do List</p>
      </div>
      <div className='gradient-cover'>
        <p>{today}</p>
      </div>
      {/* todo test */}
      <button onClick={() => dispath(addItem())}>addItem</button>
      {todos.map((todo, i) => (
        <div key={todo.id + i}>{todo.title}</div>
      ))}
    </h1>
  )
}
