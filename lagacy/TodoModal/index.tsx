import React from 'react'

import styles from './index.module.css'

export type ModalType = 'add' | 'edit'

type Props = {
  isOpen: boolean
  children: React.ReactNode
}

export interface ModalFormProps {
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>, value: string) => void
  title?: string
}

export default function TodoModal({ isOpen, children }: Props) {
  return (
    <aside
      role='dialog'
      className={[isOpen ? styles.visible : styles.hidden, styles.container].join(' ')}
    >
      <div className={styles.modal}>{children}</div>
    </aside>
  )
}
