import React from 'react'
import Title from './components/Title'
import Layout from './Layout'
import TodoList from './components/TodoList'

function App() {
  return (
    <Layout>
      <Title />
      <TodoList />
    </Layout>
  )
}
export default App
