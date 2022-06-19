import React from 'react'
import ReactDOM from 'react-dom/client'
import Project from 'src/containers/project'

import reportWebVitals from './reportWebVitals'

const rootDOM = document.getElementById('root')
if (rootDOM) {
  const root = ReactDOM.createRoot(rootDOM)
  root.render(
    <React.StrictMode>
      <Project />
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
