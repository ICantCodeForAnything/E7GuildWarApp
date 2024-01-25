import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import App from './App'
import { MantineProvider } from '@mantine/core'
import PageCtx from './ContextProviders/PageContext'
import '@mantine/notifications/styles.css';
import { Notifications } from '@mantine/notifications'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <MantineProvider defaultColorScheme='dark'>
        <PageCtx>
            <Notifications />
            <App />
        </PageCtx>
      </MantineProvider>
  </React.StrictMode>
)
