import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterApp from '../7guisApp/CounterApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)
