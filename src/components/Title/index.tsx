import React, { useEffect, useMemo } from 'react'
import styles from './index.module.css'

function getDay() {
  const date = new Date()
  const day = `${date.toLocaleDateString().split('.').join('')} ${date.toDateString().slice(0, 3)}`
  return day
}

export default function Title() {
  console.log(
    'Title.tsx : TITLE은 한번만 렌더링 되어야합니다. 이후 이 로그가 나온다면 최적화를 다시 해봅시당!',
  )
  const today = useMemo(() => getDay(), []) // 현제 날짜를 가져옵니다.

  useEffect(() => {
    // title gradient관련 설정입니다.
    Array.from(document.querySelectorAll('.gradient-title p')).map((el, i) => {
      if (i === 0) el.setAttribute('data-before', 'React To Do List')
      else if (i === 1) el.setAttribute('data-before', today)
    })
  }, [])

  return (
    <h1>
      <div>
        <p>FastCampus To Do List</p>
      </div>
      <div>
        <p>{today}</p>
      </div>
    </h1>
  )
}
