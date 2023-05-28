import React, { useRef } from 'react'
import { ModalFormProps } from '../TodoModal'

export default function ModalAddForm({ onSubmitForm }: ModalFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)

  function handleOnSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const title = titleRef.current?.value
    if (!title) {
      alert('title을 입력해주세요')
      return
    }
    onSubmitForm(event, title)
  }

  return (
    <>
      <h2>Add To Do Form</h2>
      <form onSubmit={handleOnSubmitForm}>
        <input
          type='text'
          placeholder='Enter a to do title'
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    </>
  )
}
