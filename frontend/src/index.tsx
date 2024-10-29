/* src/index.tsx */

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

/* Gets root element */
const rootElement = document.getElementById('root')

/* Tests if it exists ibside DOM */
if (rootElement) {

  /* Instantiates root element */
  const root = ReactDOM.createRoot(rootElement)

  const renderApp = () => (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )

  root.render(renderApp())
} else {
  /* Case null, returns error */
  console.error('Root element not found')
}
