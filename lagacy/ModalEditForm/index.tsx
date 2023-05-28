import React, { useRef } from 'react'
import { ModalFormProps } from '../TodoModal'

export default function ModalEditForm({ onSubmitForm, title }: ModalFormProps) {
  const titleRef = useRef<HTMLInputElement>(null)

  function handleOnSubmitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const value = titleRef.current?.value || '' // titleRef을 참조하지 못하면 빈 문자열을 할당 (없을 수가 없음)
    onSubmitForm(event, value)
  }
  return (
    <>
      <h2>Edit To Do Form</h2>
      <form onSubmit={handleOnSubmitForm}>
        <input
          type='text'
          placeholder='Enter a to do title'
          defaultValue={title}
          ref={titleRef}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    </>
  )
}
