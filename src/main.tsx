import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { AppProvider } from '@app/providers'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
