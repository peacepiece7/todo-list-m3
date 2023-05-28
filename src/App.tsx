import React from 'react'
import Title from '@/components/Title'
import Layout from '@/Layout'
import TodoList from '@/components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  return (
    <Layout>
      <Title />
      <TodoForm />
      <TodoList />
    </Layout>
  )
}
export default App
