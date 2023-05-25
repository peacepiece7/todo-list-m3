import React from 'react'
import { createRoot } from 'react-dom/client'
// ? : react-dom/client.js가 에러가 나는 이유?
// react-dom/client.js는 react-dom.development.js에서 import 되는데
// react-dom.development.js는 react-dom.development.js가 import 되어야 사용할 수 있다.
// 그래서 react-dom.development.js를 import 해줘야 한다. 라고 코파일럿이 말해줌
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'
import './global.css'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
