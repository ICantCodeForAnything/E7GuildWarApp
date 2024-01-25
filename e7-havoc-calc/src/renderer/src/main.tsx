import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import PageCtx from './ContextProviders/PageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <MantineProvider defaultColorScheme='dark'>
        <PageCtx>
          <App />
        </PageCtx>
      </MantineProvider>
  </React.StrictMode>
)
