import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TimerApp from '../7guisApp/TimerApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TimerApp />
  </StrictMode>,
)
